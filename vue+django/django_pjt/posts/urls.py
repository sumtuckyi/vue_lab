from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.post_list),
    path('post/<int:post_pk>/', views.post_detail),
    path('category/', views.category),
]
