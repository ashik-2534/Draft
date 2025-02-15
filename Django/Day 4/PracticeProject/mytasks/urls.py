from django.urls import path
from . import views

app_name = "mytasks"

urlpatterns = [
    path("", views.index, name="index"),
    path("addtask",views.add, name="add"),
]