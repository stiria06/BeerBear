from django.db import models
from coupons.models import Coupon
from users.models import User

class Chat(models.Model):
    userlist = models.ManyToManyField(User)
    coupons = models.ManyToManyField(Coupon)
    is_active = models.BooleanField()

class Message(models.Model):
    chatroom = models.ForeignKey(Chat, on_delete="CASCADE")
    created_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField()

