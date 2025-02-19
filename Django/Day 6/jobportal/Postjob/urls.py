from django.urls import path
from . import views

app_name = 'Postjob'

urlpatterns = [
    path('', views.job_list, name='job_list'),
    path('job/<int:job_id>/', views.job_detail, name='job_detail'),
    path('job/post/', views.job_post, name= 'job_post'),
    path('apply/<int:job_id>/', views.apply_job, name='apply_job'),
]

