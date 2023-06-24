from fastapi import APIRouter, Body
from fastapi.responses import JSONResponse
from core.models.book import Book
from core.database import db
from core.models.model import not_uniq_response
from starlette import status
from pydantic import BaseModel, Field
from fastapi.encoders import jsonable_encoder

router = APIRouter(prefix='/book')

@router.post('/add')
async def add(book: Book = Body(...)):
    book = book.to_dict()
    res = check_unique(book)

    if res is False:
        return not_uniq_response("book")
        
    res = db.book.insert_one(book)

    content = {'data': {'id': res.inserted_id}}
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=content)
    
@router.delete('/delete')
async def delete_book(id: str):
    res = db.book.delete_one({'_id': id})
    if res.deleted_count == 0:
        return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content=f'No book with id({id}) found.')
    content =  {'data': {'count': res.deleted_count}}
    return JSONResponse(status_code=status.HTTP_200_OK, content=content)

@router.get('/search/{name}')
async def search_books_by_name(name: str):
    books = db.book.find({"title": name})

    results = []
    for book in books:
        results.append(book)

    books = db.book.find({"author": name})
    for book in books:
        results.append(book)

    if not results:
        return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={"message": "No books found"})

    return JSONResponse(status_code=status.HTTP_200_OK, content={"results": results})

@router.get('/read')
async def search_books():
    books = db.book.find()

    results = []
    for book in books:
        results.append(book)

    if not results:
        return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={"message": "No books found"})

    return JSONResponse(status_code=status.HTTP_200_OK, content={"results": results})

@router.get('/read/{genre}')
async def search_books_by_genre(genre: str):
    books = db.book.find({"genre": genre})

    results = []
    for book in books:
        results.append(book)

    if not results:
        return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={"message": "No books found"})

    return JSONResponse(status_code=status.HTTP_200_OK, content={"results": results})

def check_unique(book: dict) -> bool:
    title = db.book.find_one({'title': book['title']})
    author = db.book.find_one({'author': book['author']})
    if title is not None and author is not None:
        return False
    return True

def not_uniq_response(param: str) -> JSONResponse:
    content = {
        'error': {
            'not unique': param
        }
    }
    return JSONResponse(status_code=status.HTTP_409_CONFLICT, content=content)