from typing import List
from django.shortcuts import get_object_or_404
from ninja import Router
from .models import WaitlistEntry
from .schemas import WaitlistEntryListSchema, WaitlistEntryDetailSchema, WaitlistEntryCreateSchema

router = Router(tags=["waitlist"])

@router.post("/", response=WaitlistEntryDetailSchema)
def create_entry(request, payload: WaitlistEntryCreateSchema):
    entry = WaitlistEntry.objects.create(**payload.dict())
    return entry

@router.put("/{entry_id}", response=WaitlistEntryDetailSchema)
def update_entry(request, entry_id: int, payload: WaitlistEntryListSchema):
    entry = get_object_or_404(WaitlistEntry, id=entry_id)
    for key, value in payload.dict().items():
        setattr(entry, key, value)
    entry.save()
    return entry

@router.delete("/{entry_id}")
def delete_entry(request, entry_id: int):
    entry = get_object_or_404(WaitlistEntry, id=entry_id)
    entry.delete()
    return {"message" : f"Waitlist entry with id {entry_id} has been deleted."}

@router.get("/", response=List[WaitlistEntryListSchema])
def list_waitlist_entries(request):
    queryset = WaitlistEntry.objects.all()
    return queryset

@router.get("/{entry_id}", response=WaitlistEntryDetailSchema)
def get_waitlist_entry(request, entry_id: int):
    obj = get_object_or_404(WaitlistEntry, id=entry_id)
    return obj
