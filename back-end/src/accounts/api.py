from ninja.responses import Response
from ninja import Router
from .models import CustomUser
from .schemas import TokenResponse, UserLoginSchema, UserCreateSchema
from .utils import get_tokens_for_user
from django.contrib.auth import authenticate

router = Router(tags=["authenticate"])

@router.post("/signup/", response=TokenResponse)
def signup(request, payload: UserCreateSchema):
    user = CustomUser.objects.create_user(
        username=payload.email,
        email=payload.email,
        phone_number=payload.phone_number,
    )
    user.set_password(payload.password)
    user.save()
    return get_tokens_for_user(user)

@router.post("/login/", response=TokenResponse)
def login(request, payload: UserLoginSchema):
    user = authenticate(email=payload.email, password=payload.password)
    if not user:
        return Response({"message": "Invalid credentials"}, status=401)
    return get_tokens_for_user(user)