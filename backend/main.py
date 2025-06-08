python
   from fastapi import FastAPI
   from pydantic import BaseModel
   from langchain import OpenAI, PromptTemplate
   from langchain.chains import RetrievalQA
   from langchain.vectorstores import FAISS
   from langchain.embeddings import OpenAIEmbeddings

   # 1. Load vector store (already embedded)
   embeddings = OpenAIEmbeddings()
   vector_db = FAISS.load_local("scholarships_faiss", embeddings)

   # 2. Set up LLM + prompt
   template = """You are a scholarship advisor...
   {{ context }}"""
   prompt = PromptTemplate(template=template, input_variables=["context"])
   llm = OpenAI(model="gpt-4")
   qa_chain = RetrievalQA.from_chain_type(
       llm=llm,
       chain_type="stuff",
       retriever=vector_db.as_retriever(search_kwargs={"k":10}),
       return_source_documents=False,
       chain_type_kwargs={"prompt": prompt}
   )

