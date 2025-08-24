from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("delete/<int:pk>", views.delete_book, name="delete_book"),
    path("add/", views.add_book, name="add_book")
]