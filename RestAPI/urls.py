from django.urls import path, include
from . import api
from rest_framework import routers
from knox import views as knox_views


router = routers.DefaultRouter()
router.register('subject',  api.SubjectViewSet, 'subject')
router.register('article',  api.ArticleViewSet, 'article')
router.register('snnipet',  api.SnnipetViewSet, 'snnipet')
router.register('users', api.UserViewSet, 'users')

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('auth', include('knox.urls')),
    path('auth/register', api.RegisterAPI.as_view()),
    path('auth/login', api.LoginAPI.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view(), name="knox_logout"),

]
