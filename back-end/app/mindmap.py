# back-end/mindmap.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import openai  # or the relevant library for your model
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
model_id = os.getenv("FINE_TUNED_MODEL_ID")

router = APIRouter()

# Define the request body model
class PromptRequest(BaseModel):
    prompt: str

# Initialize your OpenAI API client
client = OpenAI(api_key=api_key)# Replace with your actual API key


@router.post("/api/generate-mermaid")
async def generate_mermaid(prompt_request: PromptRequest):
    prompt = prompt_request.prompt
    try:
        # Call the model to generate a response
        completion = client.chat.completions.create(
            model=model_id,
            prompt=[{"role": "user", "content": prompt}],
            max_tokens=100  # Adjust max_tokens as needed
        )

        # Extract the generated text
        mermaid_code = completion.choices[0].text.strip()

        # Return the Mermaid.js code to the client
        return {"mermaidCode": mermaid_code}

    except Exception as e:
        # Handle errors and raise an HTTPException
        raise HTTPException(status_code=500, detail=str(e))

