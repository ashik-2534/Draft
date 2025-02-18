from django.urls import path

from . import views

app_name = 'datedetail'

urlpatterns = [
    path('', views.index, name='index'),
]