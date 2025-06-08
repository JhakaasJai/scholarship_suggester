from openai import OpenAI
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import os

embedding_model = SentenceTransformer('all-MiniLM-L6-v2')

# Custom dataset - replace with your actual data
custom_dataset = [
    {"text": "Our company policy states that all employees must take lunch between 12-1pm.", "metadata": "HR Policy Doc v3.2"},
    {"text": "The refund process takes 5-7 business days to complete after approval.", "metadata": "Customer Service Guidelines"},
    {"text": "The project deadline is every Friday at 5pm EST for status reports.", "metadata": "Project Management Handbook"},
]

# Create embeddings for your dataset
document_embeddings = []
for doc in custom_dataset:
    embedding = embedding_model.encode(doc["text"])
    document_embeddings.append({
        "text": doc["text"],
        "metadata": doc["metadata"],
        "embedding": embedding
    })

def retrieve_relevant_documents(query, k=3):
    """Retrieve top k most relevant documents for the query"""
    query_embedding = embedding_model.encode(query)
    
    similarities = []
    for doc in document_embeddings:
        sim = cosine_similarity(
            [query_embedding],
            [doc["embedding"]]
        )[0][0]
        similarities.append((sim, doc))
    
    # Sort by similarity and return top k
    similarities.sort(reverse=True, key=lambda x: x[0])
    return [doc for (sim, doc) in similarities[:k]]

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="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",
)

def get_chatbot_response(userPrompt: str) -> str:
    # Retrieve relevant context
    relevant_docs = retrieve_relevant_documents(userPrompt)

    # Build context string
    context = "\n\nRelevant information:\n"
    for i, doc in enumerate(relevant_docs, 1):
        context += f"{i}. {doc['text']} [Source: {doc['metadata']}]\n"

    # Augment the user prompt with context
    augmented_prompt = f"{context}\n\nQuestion: {userPrompt}\n\nAnswer:"

    completion = client.chat.completions.create(
        extra_headers={
            "HTTP-Referer": "<YOUR_SITE_URL>",
            "X-Title": "<YOUR_SITE_NAME>",
        },
        extra_body={},
        model="deepseek/deepseek-r1-0528-qwen3-8b:free",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant. Use the provided context to answer questions accurately."
            },
            {
                "role": "user",
                "content": augmented_prompt
            }
        ]
    )
    return completion.choices[0].message.content
