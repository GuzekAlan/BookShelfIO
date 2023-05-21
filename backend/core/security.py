from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hashed(pw: str) -> str:
    return pwd_context.hash(pw)


def is_match(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)
