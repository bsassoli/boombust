from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    return HttpResponse("<title>Home</title><body><h1>Signals<h1></body>")
