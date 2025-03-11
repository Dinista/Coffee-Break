from ninja_jwt.tokens import RefreshToken
from ninja.responses import Response

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return Response({
        'email': str(user.email),
        'username': str(user.username),
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    })