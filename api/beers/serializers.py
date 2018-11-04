from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
)
from .models import Beer

class BeerSerializer(ModelSerializer):
    
    class Meta:
        model = Beer
        fields = (
            '__all__'
        )
