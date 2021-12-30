from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from .managers import CustomUserManager


class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    email = models.EmailField("email address", unique=True)
    name = models.CharField("name", max_length=150)
    username = models.CharField("username", max_length=150, unique=True)
    password = models.CharField("password", max_length=150)

    is_staff = models.BooleanField("staff status", default=False)
    is_active = models.BooleanField("active", default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class Photos(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    photoId = models.CharField("photo id", max_length=150)

    def __str__(self):
        return f"Photo id: {self.photoId}"

    class Meta:
        unique_together = ("user", "photoId")


class Videos(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    videoId = models.CharField("video id", max_length=150)

    def __str__(self):
        return f"Video id: {self.videoId}"

    class Meta:
        unique_together = ("user", "videoId")


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
