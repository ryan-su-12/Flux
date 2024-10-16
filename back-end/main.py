from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from supabase_client import supabase
import logging

# Set up logging for debugging
logging.basicConfig(level=logging.INFO)

app = FastAPI()

# Define a Pydantic model to validate incoming POST requests
class User(BaseModel):
    name: str
    email: str
    password: int
# maybe here, causing the 422 error
# 

# Endpoint to create a new user
@app.post("/users")
async def create_user(user: User):
    try:
        # Insert the new user into the Supabase "users" table
        response = supabase.table("users").insert({
            "name": user.name,
            "email": user.email,
            "password": user.password
        }).execute()

        # Log the response to see its structure
        logging.info(f"Supabase response: {response}")

        # Handle the response correctly depending on its structure
        if hasattr(response, 'error') and response.error:
            raise HTTPException(status_code=400, detail=response.error.message)

        return {"message": "User created successfully", "data": getattr(response, 'data', None)}

    except Exception as e:
        # Catch any exception and return as an HTTP error response
        logging.error(f"Error occurred: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Example root endpoint (optional)
@app.get("/")
async def root():
    return {"message": "Welcome to the Supabase-FastAPI backend!"}