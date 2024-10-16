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
    
#-------------------------------- User Signup ----------------------------------------

# Signup api


# Set up logging for debugging


# Endpoint for signup
@app.post("/auth/signup")
async def signup(email: str, password: str):
    try:

        response = supabase.auth.sign_up({
            "email": email, 
            "password": password
        })

   
        logging.info(f"Supabase response: {response}")

        if 'error' in response and response['error']:
            raise HTTPException(status_code=400, detail=response['error']['message'])

        return {"message": "User created successfully!"}

    except Exception as e:
        logging.error(f"Error occurred during signup: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

#--------------- LOGIN ----------------------------------
@app.post("/auth/login")
async def login(email: str, password: str):
    try:
        response = supabase.auth.sign_in_with_password({
            "email": email,
            "password": password
        })

        if response.session:
            return {"message": "Login successful!", "access_token": response.session.access_token}

        if response.user is None:
            raise HTTPException(status_code=400, detail="Invalid credentials or user does not exist.")
        return {"message": "Login failed", "error": "Unknown error"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --------------- LOGOUT ----------------------
@app.post("/auth/logout")
async def logout(token: str):
    try:
        # Use the token provided by the client to sign out
        response = supabase.auth.api.sign_out(token)
        
        if response:
            return {"message": "Logged out successfully!"}
        else:
            raise HTTPException(status_code=400, detail="Invalid session or already logged out")

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



# Example root endpoint (optional)
@app.get("/")
async def root():
    return {"message": "Welcome to the Supabase-FastAPI backend!"}