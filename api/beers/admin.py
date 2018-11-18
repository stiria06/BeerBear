from django.contrib import admin
from .models import Beer, BeerRating, BeerReview

admin.site.register(Beer)
admin.site.register(BeerRating)
admin.site.register(BeerReview)
