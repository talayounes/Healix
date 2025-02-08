from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Doctor, Appointment

admin.site.register(Doctor)
admin.site.register(Appointment)
