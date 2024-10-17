from fastapi import FastAPI
from app.auth import router as auth_router 
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

app.include_router(auth_router, prefix="/auth")

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from your frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (POST, GET, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Example root endpoint (optional)
@app.get("/")
async def root():
    return {"message": "Welcome to the Supabase-FastAPI backend!"}