from django.urls import path, include
from .api import SubjectViewSet, ArticleViewSet, SnnipetViewSet, UserViewSet
from rest_framework import routers
from knox import views as knox_views


router = routers.DefaultRouter()
router.register('subject',  SubjectViewSet, 'subject')
router.register('article',  ArticleViewSet, 'article')
router.register('snnipet',  SnnipetViewSet, 'snnipet')
router.register('users', UserViewSet, 'users')

urlpatterns = [
    path('', include(router.urls)),
]
