from fastapi import FastAPI
from core.routes.core import main_router as router

app = FastAPI()
app.include_router(router)

@app.get("/")
async def root():
    return {"message": "Hello World"}
