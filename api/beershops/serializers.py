from django.contrib.auth import get_user_model
from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
)
from .models import BeerShop, Stamp
from django.contrib.auth import get_user_model
User = get_user_model()


class FeedUserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username')



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


class StampSerializer(ModelSerializer):
    class Meta:
        model = Stamp
        fields = ('__all__')
