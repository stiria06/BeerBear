import django_filters.rest_framework
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, filters, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Beer, BeerRating, BeerReview
from .serializers import BeerSerializer, BeerRatingSerializer, BeerReviewSerializer

class BeerViewSet(viewsets.ModelViewSet):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name', 'country', 'style')


class BeerRatingListAPIView(APIView):
    def get(self, request, pk, format=None):
        ratings = BeerRating.objects.filter(beer__id=pk)
        serializer = BeerRatingSerializer(ratings,many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, pk, format=None):
        user = request.user
        if not user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            beer = get_object_or_404(Beer, pk=pk)
            serializer = BeerRatingSerializer(data=request.data)
            # if serializer.is_valid():
            #     serializer.save(creator=user, beer=beer)
            #     return Response(data=serializer.data, status=status.HTTP_200_OK)
            print(serializer)
            # else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BeerRatingDetailAPIView(APIView):
    def get(self, request, pk, rating_id, format=None):
        user = request.user
        rating = get_object_or_404(BeerRating, pk=rating_id, beer__id=pk, creator=user)
        serializer = BeerRatingSerializer(rating)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


    def put(self, request, pk, format=None):
        user = request.user
        if not user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            beer = get_object_or_404(Beer, pk=pk)
            serializer = BeerRatingSerializer()
            if serializer.is_valid():
                serializer.save(beer=beer, creator=user)
                return Response(data=serializer.data, status=status.HTTP_200_OK)

            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        user = request.user
        beershop = get_object_or_404(BeerShop, pk=pk)

        if beershop.owner == user:

            beershop.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
