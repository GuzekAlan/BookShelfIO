from fastapi import APIRouter
from .user import router as user_router

def make_router():
    main_router = APIRouter()
    main_router.include_router(user_router)
    return main_router

main_router = make_router()
