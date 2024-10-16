from fastapi import FastAPI
from app.auth import router as auth_router 



app = FastAPI()

app.include_router(auth_router, prefix="/auth")



# Example root endpoint (optional)
@app.get("/")
async def root():
    return {"message": "Welcome to the Supabase-FastAPI backend!"}