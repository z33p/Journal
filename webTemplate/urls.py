from django.urls import path, include
from . import views

urlpatterns = [
    path('<str:subject_name>', views.listJournalView),
]
