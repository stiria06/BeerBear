from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, filters, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from .models import User

class UserProfileAPIView(APIView):
    def get(self, request, format=None):
        print(request.user)
        user = get_object_or_404(User, pk=request.user.id)
        serializer = UserSerializer(user)
        return Response(data=serializer.data ,status=status.HTTP_200_OK)
# StampAddx

