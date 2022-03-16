from django.urls import path, include
from . import views

urlpatterns = [
    path('video_id', views.get_comment),
    path('', views.create_comment)
]
