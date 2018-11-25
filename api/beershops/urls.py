from django.urls import path, include
from .views import (
    BeershopListCreateAPIView,
    BeershopDetailAPIView,
    BeershopSearchWithDistanceAPIView,
    BeershopSearchWithBeerAPIView,
    BeerShopFavoriteAPIView
)
app_name = "beershops"

urlpatterns = [
    path('', BeershopListCreateAPIView.as_view(), name='beershop_list'),
    path('<int:pk>/', BeershopDetailAPIView.as_view(), name='create_beershop'),
    path('search1/', BeershopSearchWithDistanceAPIView.as_view(), name='beershop_search_with_distance'),
    path('search2/<int:beer_id>/', BeershopSearchWithBeerAPIView.as_view(), name='beershop_search_with_distance'),
    path("<int:beershop_id>/favorite/", BeerShopFavoriteAPIView.as_view(), name='beershop_favorite'),
]
