from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Comments
from .models import Reply
from .serializers import CommentSerializer
from . serializers import ReplySerializer
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import OR, IsAuthenticated, AllowAny

# Create your views here.

@api_view(['GET'])
def get_comment(request):
    comment_sort = request.query_params.get('video_id')
    comment = Comments.objects.all()

    if comment_sort:
        comment = comment.filter(video_id=comment_sort)

    serializer = CommentSerializer(comment, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def get_create_comment(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['Put'])
@permission_classes([IsAuthenticated])
def update_comment_by_id(request, id):
    if request.method == 'PUT':
        comment = Comments.objects.get(id = id)
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)
    

