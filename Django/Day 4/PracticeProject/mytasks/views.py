from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django import forms


class KajJogkoro(forms.Form):
    kajerNam = forms.CharField(label = " kaj ki ")


def index(request):
    if "ajairakaj" not in request.session:
        request.session["ajairakaj"] = []
    return render (request, "mytask/index.html",{
        "tasks": request.session["ajairakaj"],
    })

def add (request):
    if request.method == "POST":
        khata = KajJogkoro(request.POST)
        if khata.is_valid():
            likhakaj = khata.cleaned_data["kajerNam"]
            request.session["ajairakaj"] += [likhakaj]
            return HttpResponseRedirect (reverse("mytasks:index"))
        else:
            return render(request, "mytask/addtask.html",{
                "ajairakhata": khata
            })
        
    return render (request, "mytask/addtask.html",{
        "juktokaj" : KajJogkoro(),
    })