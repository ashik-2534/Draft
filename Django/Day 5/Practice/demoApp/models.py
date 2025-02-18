from django.db import models

# Create your models here.
class person(models.Model):
    firstName = models.CharField(max_length=10)
    lastName = models.CharField(max_length=10)
    phone = models.CharField(max_length=11, null=True)
    date = models.DateField(null=True)