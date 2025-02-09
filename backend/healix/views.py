from django.contrib.auth.views import LoginView
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from django.http import HttpResponseForbidden 
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from healix.models import Doctor  # Import your Doctor model



class DoctorLoginView(LoginView):
    template_name = 'doctor/login.html'  # Template for the login page
    redirect_authenticated_user = True  # Redirect authenticated users to their dashboard

    def get_success_url(self):
        # Redirect to doctor dashboard after login
        return reverse_lazy('doctor_dashboard')  # Name of the URL for the dashboard view


# Dashboard view (Accessible only after login)
@login_required
def doctor_dashboard(request):
    if hasattr(request.user, 'doctor_profile'):  # Ensures the user has a related Doctor object
        doctor = request.user.doctor
        return render(request, 'doctor/dashboard.html', {'doctor': doctor})
    else:
        # If the user is not a doctor, deny access to this page
        return HttpResponseForbidden("You are not authorized to access this page.")
    
def doctor_signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)  # Use Django's built-in form for user signup
        if form.is_valid():
            user = form.save()  # Save the user
            # Create a doctor profile linked to this user
            doctor = Doctor.objects.create(
                user=user,
                name=user.username,  # Default name as username, can be changed later
                specialty="General",  # Default specialty, can be updated later
                email=user.email  # Store email if available
            )
            doctor.save()

            # Log in the user after signup
            login(request, user)
            return redirect('doctor_dashboard')  # Redirect to dashboard after signup
    else:
        form = UserCreationForm()  # Show empty form for GET request
    
    return render(request, 'doctor/signup.html', {'form': form})