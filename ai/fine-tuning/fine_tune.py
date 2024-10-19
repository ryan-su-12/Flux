import openai
import os

open.api_key = os.getenv("OPENAI_API_KEY")

# need to upload my dataset
dataset = x
# Fine-tune the model (I will choose the cheapest)
fine_tune = openai.FineTune.create(
    training_file=dataset['id'],
    model="ada",  # Can be 'curie', 'ada', etc.
)

