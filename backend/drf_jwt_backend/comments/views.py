from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Comments
from .models import Reply
from .serializers import CommentSerializer
from . serializers import ReplySerializer
from rest_framework import status
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET'])
def get_comment(request):
    comment_sort = request.query_params.get('video_id')
    comment = Comments.objects.all()

    if comment_sort:
        comment = comment.filter(video_id=comment_sort)

    serializer = CommentSerializer(comment, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)