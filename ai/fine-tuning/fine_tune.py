import os
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables from .env file
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
model_id = os.getenv("FINE_TUNED_MODEL_ID")

# Initialize OpenAI client with the API key
client = OpenAI(api_key=api_key)

# Create a chat completion request with the fine-tuned model

completion = client.completions.create(
    model=model_id,
    prompt="How do I plan a software development project?",  # Replace with your desired prompt
    max_tokens=100  # Adjust max_tokens as needed
)

# Print the response from the model
print("Response:", completion.choices[0].text.strip())

