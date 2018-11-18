from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
)
from .models import Beer, BeerRating, BeerReview

class BeerSerializer(ModelSerializer):
    
    class Meta:
        model = Beer
        fields = (
            '__all__'
        )

class BeerRatingSerializer(ModelSerializer):

    class Meta:
        model = BeerRating
        field = (
            'creator',
            'beer',
            'score'
        )


class BeerReviewSerializer(ModelSerializer):
    
    class Meta:
        model = BeerRating
        field = (
            'creator',
            'beer',
            'score',
            'comment',
            'created_at',
            'updated_at',
        )
