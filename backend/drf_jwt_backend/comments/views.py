from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Comments
from .models import Reply
from .serializers import CommentSerializer
from . serializers import ReplySerializer
from rest_framework import status
from django.shortcuts import get_object_or_404

# Create your views here.
