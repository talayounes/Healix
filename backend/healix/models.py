from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="doctor_profile") 
    name = models.CharField(max_length=100)
    specialty = models.CharField(max_length=100)
    email = models.EmailField(max_length=255, unique=True, null=True)
    phone = models.CharField(max_length=15, null=True, blank=True)  # Optional phone number
    profile_picture = models.ImageField(upload_to='doctor_pics/', null=True, blank=True)  # Optional profile picture
    # Add other fields like phone, email, etc. done

    def __str__(self):
        return self.name

class Appointment(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient_name = models.CharField(max_length=100)
    patient_email = models.EmailField(max_length=255, blank=True, null=True)
    appointment_date = models.DateTimeField()
    status = models.CharField(max_length=20, default="Scheduled", choices=[  # Appointment status
        ("Scheduled", "Scheduled"),
        ("Completed", "Completed"),
        ("Cancelled", "Cancelled"),
    ])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.patient_name} with {self.doctor.name} on {self.appointment_date}"
    
