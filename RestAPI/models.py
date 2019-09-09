from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Subject(models.Model):    # {parent}.{children}_set -> .all() queryset
    title = models.CharField(max_length=100)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, blank=True)
    subject = models.ForeignKey("Subject", on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class Snnipet(models.Model):
    tags = (
        ('a', 'Link'),
        ('p', 'Paragrafo'),
        ('w', 'Warning'),
        ('img', 'Link da Imagem')
    )

    title = models.CharField(max_length=100, blank=True)
    content = models.TextField(blank=True)
    tag = models.CharField(max_length=3, choices=tags)
    article = models.ForeignKey("Article", on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title if self.title else self.content[:30] + "..."
