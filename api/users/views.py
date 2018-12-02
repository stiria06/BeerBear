from django.core.files import File
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, filters, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from io import BytesIO

from beershops.serializers import StampSerializer
from beershops.models import Stamp, BeerShop
from .serializers import UserSerializer
from .models import User, BeerBearCustomer,BeershopOwner

class UserProfileAPIView(APIView):
    def get(self, request, format=None):
        user = get_object_or_404(User, pk=request.user.id)
        if user.qr == None:
            qr = user.generate_qrcode()
            blob = BytesIO()
            qr.save(blob, 'JPEG')
            user.qr.save('qrcode_{}.jpeg'.format(user),
                                    File(blob))
        serializer = UserSerializer(user)
        return Response(data=serializer.data ,status=status.HTTP_200_OK)
 
class QRCodeReadAPIView(APIView):
    def post(self, request,user_pk, format=None):
        owner = get_object_or_404(BeershopOwner, pk=request.user.pk)
        beershop = get_object_or_404(BeerShop,owner=owner)
        customer = get_object_or_404(BeerBearCustomer,pk=user_pk)
        stamp = Stamp.objects.create(beershop=beershop,customer=customer)
        serializer = StampSerializer(stamp)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
        