import json
from testclient import client

def test_add_book():
    book_data = {
        "title": "Exafmplfe23 Book",
        "author": "John Doe",
        "genre": "FANTASY"
    }
    response = client.post('/book/add', json=book_data)
    assert response.status_code == 201

def test_not_unique_book():
    book_data = {
        "title": "Example23 Book",
        "author": "John Doe",
        "genre": "FANTASY"
    }
    response = client.post('book/add', json=book_data)
    assert response.status_code == 409
    assert response.json() == {'error': {'not unique': 'book'}}

def test_search_books_by_name():
    response = client.get('book/search/Lola')
    assert response.status_code == 200
    assert response.json() == {
                                "results": [
                                    {
                                    "_id": "6496d2208113b3a64913e8c3",
                                    "title": "Lola",
                                    "author": "ALAxB",
                                    "genre": "FANTASY"
                                    }
                                ]
                                }
def test_search_books_by_name_nonexistent():
    response = client.get('book/search/Nonexistent')
    assert response.status_code == 404
    assert response.json() == {'message': 'No books found'}

def test_search_books_by_genre():
    response = client.get('book/read/FANTASY')
    assert response.status_code == 200
    res = response.json()
    res = json.dumps(res)
    book = json.dumps({
                    "_id": "6498a145e2d7982fbf1418c0",
                    "title": "Example Book",
                    "author": "John Doe",
                    "genre": "FANTASY"
                    })
    assert book in res

def test_search_books_by_genre_nonexistent():
    response = client.get('book/search/Nonexistent')
    assert response.status_code == 404
    assert response.json() == {'message': 'No books found'}

def test_search_books():
    response = client.get('book/read')
    assert response.status_code == 200
    res = response.json()
    res = json.dumps(res)
    book = json.dumps({
                    "_id": "6498a145e2d7982fbf1418c0",
                    "title": "Example Book",
                    "author": "John Doe",
                    "genre": "FANTASY"
                    })
    assert book in res

def test_search_books_nonexistent():
    response = client.get('book/search/Nonexistent')
    assert response.status_code == 404
    assert response.json() == {'message': 'No books found'}

def test_delete_book():
    response = client.delete('book/delete?id=6496c4aa9e577e3297972043')
    assert response.status_code == 200
    assert response.json() == {'data': {'count': 1}}

def test_delete_book_nonexistent():
    response = client.delete('book/delete?id=6496c4a99e577e3297972042')
    assert response.status_code == 404
    assert response.json() == 'No book with id(6496c4a99e577e3297972042) found.'