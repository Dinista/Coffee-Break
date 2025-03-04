from ninja import Schema
from datetime import datetime

class WaitlistEntryCreateSchema(Schema):
    email: str


class WaitlistEntryListSchema(Schema):
    id: int
    email: str
    

class WaitlistEntryDetailSchema(Schema):
    id: int
    email: str
    updated: datetime
    timestamp: datetime