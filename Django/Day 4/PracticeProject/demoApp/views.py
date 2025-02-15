from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(hm):
    return HttpResponse ("homepage")
def ashik(ask):
    return HttpResponse ("hello ashik")

def Kaj (k):
    return HttpResponse("bekar")