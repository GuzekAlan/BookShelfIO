from pydantic import BaseModel, Field, EmailStr
from .model import PyObjectId, PhoneNumberStr
from bson.objectid import ObjectId
from typing import Optional
from core.security import hashed
from fastapi.encoders import jsonable_encoder

class User(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    username: str = Field(...)
    email: EmailStr = Field(...)
    phone_number: PhoneNumberStr = Field(...)
    password: str = Field(...)
    first_name: str = Field(...)
    last_name: str = Field(...)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.password = hashed(self.password)

    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            'example': {
                "username": "johndoe21",
                "email": "user@example.com",
                "phone_number": "123456789",
                "password": "password",
                "first_name": "John",
                "last_name": "Doe"
            }
        }

    def to_dict(self) -> dict:
        return jsonable_encoder(self)
    

class UpdateUser(BaseModel):
    username: Optional[str]
    email: Optional[EmailStr]
    phone_number: Optional[PhoneNumberStr]
    password: Optional[str]
    first_name: Optional[str]
    last_name: Optional[str]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.password is not None:
            self.password = hashed(self.password)

    class Config:
        json_encoders = {ObjectId: str}

    def to_dict(self) -> dict:
        return {k:v for k,v in self.dict().items() if v is not None}
