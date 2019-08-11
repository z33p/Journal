from django.db import models
from django.conf import settings

# Create your models here.
class Subject(models.Model):    # {parent}.{children}_set -> .all() queryset
    title = models.CharField(max_length=100)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
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


class htmlSnnipet(models.Model):
    htmlTags = (
        ('a', 'Anchor tag'),
        ('p', 'Paragraph'),
        ('li', 'List item'),
        ('img', 'Imagem link')
    )

    title = models.CharField(max_length=100, blank=True)
    content = models.TextField(blank=True)
    htmlTag = models.CharField(max_length=3, choices=htmlTags)
    article = models.ForeignKey("Article", on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title if self.title else self.content[:30] + "..."
