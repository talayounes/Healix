from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.contrib import messages

# View for the login page
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            messages.success(request, "Login successful")
            return redirect('dashboard')  # Redirect to the dashboard after login
        else:
            messages.error(request, "Invalid username or password")
    else:
        form = AuthenticationForm()

    return render(request, 'accounts/login.html', {'form': form})

# View for the dashboard page (only accessible when logged in)
@login_required
def dashboard(request):
    # Patient-specific data, you can query the database here
    patient_data = {
        'username': request.user.username,
        'email': request.user.email,
        # Add any other personalized data you want to display
    }
    return render(request, 'accounts/dashboard.html', {'patient_data': patient_data})

# View for logging out the user
def logout_view(request):
    logout(request)
    messages.success(request, "You have been logged out.")
    return redirect('login')  # Redirect to login after logout
