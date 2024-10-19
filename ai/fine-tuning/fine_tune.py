import openai
import os

# Correct the typo from open to openai
openai.api_key = os.getenv("OPENAI_API_KEY")

# Upload your dataset
dataset = openai.File.create(file=open("data/fine_tune_dataset.jsonl"), purpose='fine-tune')

# Start fine-tuning the model (e.g., 'ada')
fine_tune = openai.FineTune.create(
    training_file=dataset['id'],
    model="ada"  # Can be 'curie', 'ada', etc.
)

print(f"Fine-tuning job started: {fine_tune['id']}")
