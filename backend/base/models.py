from django.db import models
from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

# Create your models here.


class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()
