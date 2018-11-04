from django.urls import path, include
from .views import BeerViewSet
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
]
