from django.shortcuts import render
from django.http import HttpResponse
import datetime
# Create your views here.

def index(request):
    rightNow = datetime.datetime.now()
    timenow = f"Right now it is {rightNow}"
    return HttpResponse (timenow)