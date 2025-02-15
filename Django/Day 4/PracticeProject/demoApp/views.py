from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(hm):
    return render (hm, "home/hello.html")
def ashik(ask):
    return HttpResponse ("hello ashik")

def Kaj (k):
    return HttpResponse("bekar")

def user(request, name):
    return render (request, "home/greetuser.html",{
        "name": name.capitalize(),
    })