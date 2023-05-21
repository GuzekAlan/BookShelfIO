from passlib.context import CryptContext
from datetime import timedelta, datetime
from core.settings import SECRET_KEY
from jose import jwt, JWTError

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hashed(pw: str) -> str:
    return pwd_context.hash(pw)


def is_match(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


class Claims:
    ACCESS_TOKEN_EXPIRE_MINUTES = 60

    def __init__(self, user_id: str, *, expire_delta: timedelta = None):
        self.id = user_id;
        if expire_delta is not None:
            self.expire = datetime.utcnow() + expire_delta
        else:
            self.expire = datetime.utcnow() + timedelta(minutes=Claims.ACCESS_TOKEN_EXPIRE_MINUTES)

    def to_dict(self) -> dict:
        return {'sub': self.id, 'exp': self.expire}


class Jwt:
    ALGORITHM = "HS256"

    @staticmethod
    def encode(claims: Claims) -> str:
        encoded_jwt = jwt.encode(claims.to_dict(), SECRET_KEY, algorithm=Jwt.ALGORITHM)
        return encoded_jwt
    
    @staticmethod
    def decode(token: str):
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=[Jwt.ALGORITHM])
            return {'id': payload.get('sub')}
        except JWTError:
            return None
