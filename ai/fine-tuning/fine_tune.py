import openai
import os

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

# Upload your dataset
with open("C:/Users/rsu49/OneDrive/Documents/GitHub/Flux/ai/data/fixed_fine_tune_dataset.jsonl", "rb") as f:
    dataset = openai.File.create(file=f, purpose='fine-tune')

# Start fine-tuning the model
fine_tune = openai.FineTune.create(
    training_file=dataset['id'],
    model="ada"  # Can be 'curie', 'ada', etc.
)

print(f"Fine-tuning job started: {fine_tune['id']}")
