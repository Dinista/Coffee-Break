from ninja import Schema
from typing import Optional

class UserEntryDetailSchema(Schema):
    refresh: str
    access: str

class UserCreateSchema(Schema):
    username: Optional[str] = None
    email: str
    phone_number: Optional[str] = None
    password: str

class UserLoginSchema(Schema):
    email: str
    password: str

class TokenResponse(Schema):
    email: str
    refresh: str
    access: str

    