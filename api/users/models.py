from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db import models
import qrcode

class User(AbstractUser):


    name = CharField(_("Name of User"), blank=True, max_length=255)
    qr = models.ImageField(null=True, blank=True)
    # objects = InheritanceManager()
    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
    
    def generate_qrcode(self):
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(self.pk)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        return img

class BeerBearCustomer(User):
    class Meta:
        verbose_name = 'BeerBearCustomer'
        verbose_name_plural = 'BeerBearCustomers'

class BeershopOwner(User):
    class Meta:
        verbose_name = 'BeershopOwner'
        verbose_name_plural = 'BeershopOwners'
