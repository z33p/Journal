from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.contrib.auth.models import User

from . import serializers
from . import models
from .permissions import IsOwnerOrReadOnly


# Create your views here.
def sreView(request, subject, *args, **kwargs):
    template_name = "simpleReactEngine/simpleReactEngine.html"
    context = {
        "subject": subject,
    }
    
    return render(request, template_name, context)


# User Viewset
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    lookup_field = 'username'
    

# Journal Viewset
class SubjectViewSet(viewsets.ModelViewSet):
    queryset = models.Subject.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly
    ]
    serializer_class = serializers.SubjectSerializer

    def get_serializer_context(self):
        """This function returns the request to the serializers.py"""
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = models.Article.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly
    ]
    serializer_class = serializers.ArticleSerializer


class htmlSnnipetViewSet(viewsets.ModelViewSet):
    queryset = models.htmlSnnipet.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly
    ]
    serializer_class = serializers.htmlSnnipetSerializer

