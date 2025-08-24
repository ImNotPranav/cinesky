from django.shortcuts import render,redirect,get_object_or_404
from .models import Book
from .forms import BookForm

# Create your views here.
def home(request):
    books=Book.objects.all()
    return render(request,"index.html",{"books":books})
def delete_book(request,pk):
    books=get_object_or_404(Book,pk=pk)
    books.delete()
    return redirect("home")
def add_book(request):
    if request.method == "POST":
        form = BookForm(request.POST)
        if form.is_valid():
            form.save()
    return redirect("home")
