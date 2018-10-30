from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import BeerShop
from .serializers import BeershopSerializer, BeershopDetailSerializer

class BeershopListCreateAPIView(APIView):

    def get(self, request, format=None):
        queryset = BeerShop.objects.all()
        serializer = BeershopSerializer(queryset, many=True)

        return Response(serializer.data)


    def post(self, request, format=None):
        user = request.user
        serializer = BeershopSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=user)

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        
        else :
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BeershopDetailAPIView(APIView):

    def get(self, request,pk, format=None):
        beershop = get_object_or_404(BeerShop, pk=pk)
        serializer = BeershopDetailSerializer(beershop)

        return Response(data=serializer.data, status=status.HTTP_200_OK)
        
    def put(self, request, pk, format=None):
        user = request.user
        beershop = get_object_or_404(BeerShop, pk=pk)

        if beershop.owner == user:

            serializer = BeershopDetailSerializer(beershop, data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save(owner=user)
                return Response(data=serializer.data, status=status.HTTP_200_OK)

            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        else :
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
    def delete(self, request, pk, format=None):
        user = request.user
        beershop = get_object_or_404(BeerShop, pk=pk)

        if beershop.owner == user:

            beershop.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        else :
            return Response(status=status.HTTP_401_UNAUTHORIZED)
