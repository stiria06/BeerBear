# Generated by Django 2.1.2 on 2018-11-25 05:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coupons', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coupon',
            name='due_date',
            field=models.DateTimeField(default=datetime.datetime(2019, 2, 23, 14, 25, 31, 905045)),
        ),
    ]
