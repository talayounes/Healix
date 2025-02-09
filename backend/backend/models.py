from django.contrib.auth.models import AbstractUser
from django.db import models

# Custom User model for more flexibility
class CustomUser(AbstractUser):
    patient_id = models.CharField(max_length=100, unique=True)  # Unique patient ID
    date_of_birth = models.DateField(null=True, blank=True)
    medical_conditions = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.username
