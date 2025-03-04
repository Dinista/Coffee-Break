from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    first_name = None
    last_name = None
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password']
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.username
