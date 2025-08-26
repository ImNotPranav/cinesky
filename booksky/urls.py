from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("delete/<int:pk>", views.delete_book, name="delete_book"),
    path("add/", views.add_book, name="add_book"),
    path("edit_book/<int:pk>", views.edit_book, name="edit_book")
]