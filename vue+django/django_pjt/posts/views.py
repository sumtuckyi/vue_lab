from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Category, Post, Comment

from .serializers import PostListSerializer, PostSerializer, CategorySerializer, CommentSerializer

# Create your views here.
@api_view(['GET', 'POST'])
def post_list(request):
    if request.method == 'GET':
        posts = get_list_or_404(Post)
        serializer = PostListSerializer(posts, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    
@api_view(['GET', 'POST', 'PUT'])
def post_detail(request, post_pk):
    post = get_object_or_404(pk=post_pk)

    if request.method == 'GET':
        serializer = PostSerializer(post)
        print(serializer.data)
        return Response(serializer.data)
    

    if request.method == 'PUT':
            serializer = PostSerializer(post, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)


@api_view(['GET', 'POST'])
def category(request):
    if request.method == 'GET':
        cats = get_list_or_404(Category)
        serializer = CategorySerializer(cats, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        

