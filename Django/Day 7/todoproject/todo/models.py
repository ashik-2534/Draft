from email.policy import default
from django.db import models

class Task(models.Model):
    PRIORITY_CHOICES = [
        ('LOW'),
        ('MEDIUM'),
        ('HIGH')
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    priority = models.CharField(max_length=6, choices= PRIORITY_CHOICES, default= 'MEDIUM')
    def __str__(self):
        return self.title
