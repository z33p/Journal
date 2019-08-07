from rest_framework import viewsets, permissions
from rest_framework.response import Response
from collections import namedtuple

from . import serializers
from . import models


# Journal viewset
class SubjectViewSet(viewsets.ModelViewSet):

    queryset = models.Subject.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.SubjectSerializer

class SectionViewSet(viewsets.ModelViewSet):
    queryset = models.Section.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.SectionSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = models.Article.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.ArticleSerializer

class ParagraphViewSet(viewsets.ModelViewSet):
    queryset = models.Paragraph.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.ParagraphSerializer
