from rest_framework import serializers
from .models import Comments
from .models import Reply

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['user', 'video_id', 'text', 'likes', 'dislikes', 'replies']
        depth = 1

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['text', 'user', 'comment']