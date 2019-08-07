from django.db import models
from django.conf import settings


# Create your models here.
class Subject(models.Model):    # {subject}_set -> .all() queryset
    title = models.CharField(max_length=100)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class Section(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, blank=True)
    subject = models.ForeignKey("Subject", on_delete=models.CASCADE)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    section = models.ForeignKey("Section", on_delete=models.CASCADE)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class Paragraph(models.Model):
    content = models.CharField(max_length=1000)
    article = models.ForeignKey("Article", on_delete=models.CASCADE)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.content
