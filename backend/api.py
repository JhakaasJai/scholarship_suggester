import main

from typing import Union

from fastapi import FastAPI, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import main

app = FastAPI()

# Allow CORS for frontend testing (adjust origins as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    prompt: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/chatbot")
def get_chatbot_response(prompt: str = Query(..., description="User prompt for chatbot")):
    response = main.get_chatbot_response(prompt)
    return {"response": response}

@app.put("/chatbot")
def put_chatbot_response(chat_request: ChatRequest):
    response = main.get_chatbot_response(chat_request.prompt)
    return {"response": response}
