from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
from sentence_transformers import SentenceTransformer
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import os

app = FastAPI()

# Allow CORS (for frontend communication)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your Vercel app URL in production
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize models
embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY"),  # Store in environment variables
)

# Custom dataset (replace with your data)
custom_dataset = [
    {"text": "Employees get 20 vacation days per year.", "metadata": "HR Policy"},
    {"text": "Refunds take 5-7 business days.", "metadata": "Support Guidelines"},
]

# Precompute embeddings
document_embeddings = []
for doc in custom_dataset:
    embedding = embedding_model.encode(doc["text"])
    document_embeddings.append({
        "text": doc["text"],
        "metadata": doc["metadata"],
        "embedding": embedding
    })

class Query(BaseModel):
    text: str

@app.post("/ask")
async def ask_question(query: Query):
    try:
        # Retrieve relevant docs
        query_embedding = embedding_model.encode(query.text)
        similarities = []
        for doc in document_embeddings:
            sim = cosine_similarity([query_embedding], [doc["embedding"]])[0][0]
            similarities.append((sim, doc))
        similarities.sort(reverse=True, key=lambda x: x[0])
        relevant_docs = [doc for (sim, doc) in similarities[:3]]

        # Build augmented prompt
        context = "Relevant information:\n"
        for i, doc in enumerate(relevant_docs, 1):
            context += f"{i}. {doc['text']} [Source: {doc['metadata']}]\n"
        
        augmented_prompt = f"{context}\n\nQuestion: {query.text}\n\nAnswer:"

        # Call OpenRouter AI
        completion = client.chat.completions.create(
            model="deepseek/deepseek-r1-0528-qwen3-8b:free",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": augmented_prompt}
            ]
        )

        return {
            "answer": completion.choices[0].message.content,
            "sources": [doc["metadata"] for doc in relevant_docs]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))