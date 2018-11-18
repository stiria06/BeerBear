from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
# from beers.models import Beer

class User(AbstractUser):

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = CharField(_("Name of User"), blank=True, max_length=255)
    # favorite_beer_list = models.ManToManyFlied(Beer, related_name='favorite_user_list')
    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
        
class BeerBearCustomer(User):
    pass


class BeershopOwner(User):
    pass