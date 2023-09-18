from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
from django.contrib.auth import login, authenticate, logout
from .forms import *
from django.contrib.auth.decorators import login_required

from .models import Blog
from django.views.generic.detail import DetailView


def index(request):
    blogs = Blog.objects.all()
    context = {'blogs': blogs}
    return render(request, "index.html", context)


def log_in(request):
    if request.user.is_authenticated:
        return redirect('index')
    if request.method == "POST":
        form = SignInForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            user = authenticate(email=email, password=password)
            if user:
                login(request, user)
                messages.success(request, "User logged in")
                return redirect('index')
            else:
                messages.error(request, 'Email or Password is incorrect!')
    else:
        form = SignInForm()

    return render(request, 'login.html', {'form': form})


def log_out(request):
    logout(request)
    return redirect('login')


def signup(request):
    if request.user.is_authenticated:
        return redirect('index')
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Account created successfully")
            return redirect('index')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = RegistrationForm()
    return render(request, 'register.html', {'form': form})

# blog details
class blog_detail(DetailView):
    model = Blog
