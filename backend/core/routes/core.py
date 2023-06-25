from fastapi import APIRouter
from .user import router as user_router
from .book import router as book_router

def make_router():
    main_router = APIRouter()
    main_router.include_router(user_router)
    main_router.include_router(book_router)

    return main_router

main_router = make_router()
