
from typing import Annotated
from fastapi import APIRouter, Body, Depends
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from starlette import status
from core.models.user import User, UpdateUser
from core.database import db
from core.security import is_match, Jwt, Claims, authenticate

router = APIRouter(prefix='/user')

@router.post('/register')
async def register(user: User = Body(...)):
    user = user.to_dict()

    res = check_unique(user)
    if res is not None:
        return not_uniq_response(res)
        
    res = db.user.insert_one(user)

    content = {'data': {'id': res.inserted_id}}
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=content)


class LoginBody(BaseModel):
    username: str
    password: str

@router.post('/login')
async def login(form_data: LoginBody = Depends()):
    un = form_data.username
    user = db.user.find_one({'username': un})
    if user is None:
        return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={'error':f'no user with such username {un}'})
    if not is_match(form_data.password, user['password']):
        return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={'error': 'password do not match'})

    token = Jwt.encode(Claims(user['_id']))
    return JSONResponse(status_code=status.HTTP_201_CREATED, content={'data': {'token': token}})


@router.patch('/update/')
async def update_user(uid: Annotated[str, Depends(authenticate)], update_user: UpdateUser = Body(...)):
    update_user = update_user.to_dict()

    res = check_unique(update_user)
    if res is not None:
        return not_uniq_response(res)
    
    res = db.user.update_one({"_id": uid}, {'$set': update_user})

    if res.modified_count == 0:
        return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content=f'No user with id({id}) found.')

    content = {'data': {'count': res.modified_count}}
    return JSONResponse(status_code=status.HTTP_200_OK, content=content)


@router.delete('/delete/')
async def delete_user(uid: Annotated[str, Depends(authenticate)]):
    res = db.user.delete_one({'_id': uid})
    if res.deleted_count == 0:
        return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content=f'No user with id({id}) found.')
    content =  {'data': {'count': res.deleted_count}}
    return JSONResponse(status_code=status.HTTP_200_OK, content=content)


def check_unique(user: dict) -> bool:
    to_check = ['username', 'email', 'phone_number']
    for param in to_check:
        if param not in user:
            continue;
        res = db.user.find_one({param: user[param]})
        if res is not None:
            return param
    return None

def not_uniq_response(param: str) -> JSONResponse:
    content = {
        'error': {
            'not unique': param
        }
    }
    return JSONResponse(status_code=status.HTTP_409_CONFLICT, content=content)
