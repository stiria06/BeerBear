from django.contrib.auth import get_user_model
from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
)
from .models import BeerShop


class BeershopSerializer(ModelSerializer):

    class Meta:
        model = BeerShop
        fields = (
            'id',
            'name',
            'owner'
        )
       
class BeershopDetailSerializer(ModelSerializer):
    
    class Meta:
        model = BeerShop
        fields = (
            '__all__'
        )
