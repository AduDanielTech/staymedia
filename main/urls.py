from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path('signin/', views.log_in, name="login"),
    path('signup/', views.signup, name="register"),
    path('logout/', views.log_out, name="logout"),

    path('blog_detail/<slug:slug>/', views.blog_detail.as_view(), name='blog_detail'),
]