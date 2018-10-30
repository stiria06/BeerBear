from django.db import models
from django.contrib.auth import get_user_model
from beers.models import Beer

User = get_user_model()

class BeerShop(models.Model):
    ''' Beer Shop '''
    name = models.CharField(max_length=200)
    beer_list = models.ManyToManyField(Beer, related_name='sale_beershop')
    shop_image = models.ImageField(null=True, blank=True)
    owner = models.ForeignKey(User, null=True, on_delete=models.CASCADE)

    
