
from fastapi import APIRouter, Body
from fastapi.responses import JSONResponse
from starlette import status
from core.models.user import User, UpdateUser
from core.database import db

router = APIRouter(prefix='/user')

@router.post('/register')
async def new_user(user: User = Body(...)):
    user = user.to_dict()

    res = check_unique(user)
    if res is not None:
        return not_uniq_response(res)
        
    res = db.user.insert_one(user)

    content = {'data': {'id': res.inserted_id}}
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=content)

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
        'fail': {
            'not unique': param
        }
    }
    return JSONResponse(status_code=status.HTTP_409_CONFLICT, content=content)
