from django.urls import path
from . import views


urlpatterns = [
    path('journal/<str:subject>', views.index)
]