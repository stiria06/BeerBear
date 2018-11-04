import django_filters.rest_framework
from django.shortcuts import render
from rest_framework import viewsets, permissions, filters
from .models import Beer
from .serializers import BeerSerializer

class BeerViewSet(viewsets.ModelViewSet):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name', 'country', 'style')
