import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()


SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Function to initalize the supabase client
def init_supabase() -> Client:
    if SUPABASE_URL is None or SUPABASE_KEY is None:
        raise ValueError("Supabase URL and API key must be set in the environment variables")
    return create_client(SUPABASE_URL, SUPABASE_KEY)

supabase = init_supabase()