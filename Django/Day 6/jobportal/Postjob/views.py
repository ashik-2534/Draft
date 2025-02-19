from django.shortcuts import render, redirect, get_object_or_404
from .models import Job, Application
from .forms import JobForm, ApplicationForm

# Create your views here.

def job_list (request):
    jobs = Job.objects.all()
    return render (request, 'Postjob/job_list.html', {
        'jobs': jobs
    })

def job_detail (request, job_id):
    job = get_object_or_404(Job, pk = job_id)
    return render(request, 'Postjob/job_detail.html', {
        'job' : job
    })

def job_post (request):
    if request.method == 'POST':
        form = JobForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('job_list')
    else:
        form = JobForm()
    return render (request, 'Postjob/job_post.html',{
        'form' : form
    })


def apply_job(request, job_id):
    job = get_object_or_404(Job, pk = job_id)
    if request.method == 'POST':
        form = ApplicationForm(request.POST, request.FILES)
        if form.is_valid():
            application = form.save(commit=False)
            application.job = job
            application.save()
            return redirect('job_detail', job_id)
    else:
        form = ApplicationForm()
    
    return render(request, 'Postjob/apply_job.html', {
        'form': form, 'job' : job
    })