from bson import ObjectId
from pydantic import BaseModel, Field
from fastapi.encoders import jsonable_encoder
from .model import PyObjectId, Genre

class Book(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    title: str = Field(...)
    author: str = Field(...)
    genre: Genre = Field(...)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            'example': {
                "title": "Harry Potter",
                "author": "J K Rowling",
                "genre": "FANTASY",
            }
        }

    def to_dict(self) -> dict:
        return jsonable_encoder(self)