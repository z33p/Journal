from django.urls import path, include
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register('subject',  views.SubjectViewSet, 'subject')
router.register('article',  views.ArticleViewSet, 'article')
router.register('htmlSnnipet',  views.htmlSnnipetViewSet, 'htmlSnnipet')
router.register('users', views.UserViewSet)

urlpatterns = [
    path('<str:subject>', views.sreView),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
]
