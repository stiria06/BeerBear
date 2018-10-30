from django.urls import path, include
from .views import (
    BeershopListCreateAPIView,
    BeershopDetailAPIView
)
app_name = "beershops"

urlpatterns = [
    path('', BeershopListCreateAPIView.as_view(), name='beershop_list'),
    path('<int:pk>/', BeershopDetailAPIView.as_view(), name='create_beershop'),
]
