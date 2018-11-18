from django.db import models
from users.models import User
from datetime import datetime, timedelta

class Coupon(models.Model):

    name = models.CharField(max_length=200, null=True)
    is_used = models.BooleanField()
    is_active = models.BooleanField()
    count = models.IntegerField()
    due_date = models.DateTimeField(default=datetime.now()+timedelta(days=90))
    created_at = models.DateTimeField(auto_now_add=True)  # first created
    user = models.ForeignKey(User, on_delete=models.CASCADE)

