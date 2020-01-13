from django.db import models
from django.contrib.auth.models import User


class Client(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField(blank=True, unique=True)
    phone = models.CharField(max_length=20, blank=True, unique=True)
    address = models.CharField(max_length=200, blank=True)
    city = models.CharField(max_length=20, blank=True)
    state = models.CharField(max_length=20, blank=True)
    zip_code = models.CharField(max_length=15, blank=True)
    owner = models.ForeignKey(User, related_name="clients" on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name + " " + self.last_name
