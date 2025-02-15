from django.shortcuts import render

ajaitakaj = ["A task" , "B task" , "C task"]
def index(request):
    return render (request, "mytask/index.html",{
        "tasks": ajaitakaj,
    })