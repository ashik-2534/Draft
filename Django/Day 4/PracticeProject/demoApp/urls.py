from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("ashik/", views.ashik , name="ashik"),
    path("ashik/job/", views.Kaj, name="nei")
]