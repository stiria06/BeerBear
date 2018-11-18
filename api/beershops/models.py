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

class BeerShopReview(models.Model):
    creator = models.ForeignKey(User, on_delete="CASCADE", null=True)
    beershop = models.ForeignKey(BeerShop, on_delete="CASCADE", null=True)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  # first created
    updated_at = models.DateTimeField(auto_now=True)  # last-modified
    
    
class Stamp(models.Model):
    beershop = models.ForeignKey(BeerShop, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)  # first created
  
