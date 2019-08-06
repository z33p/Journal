from django.db import models

# Create your models here.

class Subject(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=True)


class Section(models.Model):
    title = models.CharField(max_length=100)
    subject = models.ForeignKey("Subject", on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)


class Article(models.Model):
    title = models.CharField(max_length=100)
    section = models.ForeignKey("Section", on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)


class Paragraph(models.Model):
    content = models.Field(max_length=1000)
    article = models.ForeignKey("Article", on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
