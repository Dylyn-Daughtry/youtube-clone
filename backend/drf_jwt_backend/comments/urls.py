from django.urls import path, include
from . import views

urlpatterns = [
    path('video_id', views.get_comment),
    path('', views.get_create_comment),
    path('reply/<int:pk>/', views.post_reply),
    path('update_comment/<int:pk>', views.update_comment_by_id),
]
