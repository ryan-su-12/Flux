import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

# Prompt to send to the fine-tuned model
prompt = "Explain the significance of artificial intelligence in healthcare."

response = openai.Completion.create(
    model="your-fine-tuned-model-id",  # Replace with your fine-tuned model ID
    prompt=prompt,
    max_tokens=150
)

print(response.choices[0].text.strip())
