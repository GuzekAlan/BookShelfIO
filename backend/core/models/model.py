from enum import Enum
from bson.objectid import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


class PhoneNumberStr(str):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        v = v.replace(' ', '')
        if len(v) == 9 and v.isdecimal():
            return v
        raise ValueError('Incorrect phone number')

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class Genre(str, Enum):
    FANTASY = 'FANTASY'
    HORROR = 'HORROR'
    ROMANCE = 'ROMANCE'
    POETRY = 'POETRY'
    HISTORY = 'HISTORY'