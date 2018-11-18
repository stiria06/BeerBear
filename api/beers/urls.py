from django.urls import path, include
from .views import (
    BeerViewSet, 
    BeerRatingDetailAPIView,
    BeerRatingListAPIView
)
app_name = "beers"

beer_list = BeerViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
beer_detail = BeerViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})


urlpatterns = [
    path('', beer_list, name='beer-list'),
    path('<int:pk>/', beer_detail, name='beer-detail'),
    path('<int:pk>/rating/', BeerRatingListAPIView.as_view(), name='beer-rating'),
    path('<int:pk>/rating/<int:rating_id>/',BeerRatingDetailAPIView.as_view(),name='beer-rating-detail'),
]
