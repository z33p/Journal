from rest_framework import viewsets, permissions

from . import serializers
from .models import Subject, Article, Snnipet

"""
# User API
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    # This viewset automatically provides `list` and `detail` actions.
    # permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    lookup_field = 'username'
"""

class SubjectViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return self.request.user.subject_set.all()

    # queryset = Subject.objects.all()
    serializer_class = serializers.SubjectSerializer

    def get_serializer_context(self):
        """This function returns the request to the serializers.py"""
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }


class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    queryset = Article.objects.all()
    serializer_class = serializers.ArticleSerializer


class SnnipetViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    queryset = Snnipet.objects.all()
    serializer_class = serializers.SnnipetSerializer
