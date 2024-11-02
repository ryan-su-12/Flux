import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

# List all fine-tuning jobs
fine_tunes = openai.FineTune.list()

for fine_tune in fine_tunes['data']:
    print(f"Fine-tune ID: {fine_tune['id']}, Status: {fine_tune['status']}")
