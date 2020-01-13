from django.urls import path

from . import views

urlpatterns = [
    path('trainx/', views.index)
]
