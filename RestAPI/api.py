from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from django.contrib.auth.models import User
from knox.models import AuthToken

from . import serializers
from . import models


# User API
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    lookup_field = 'username'


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = serializers.RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": serializers.UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = serializers.LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": serializers.UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# Journal Viewset
class SubjectViewSet(viewsets.ModelViewSet):
    queryset = models.Subject.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
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
    ]
    serializer_class = serializers.ArticleSerializer


class SnnipetViewSet(viewsets.ModelViewSet):
    queryset = models.Snnipet.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]
    serializer_class = serializers.SnnipetSerializer

