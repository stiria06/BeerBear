# Generated by Django 2.1.2 on 2018-10-29 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Beer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ref', models.IntegerField(null=True)),
                ('name', models.CharField(max_length=200)),
                ('brewery', models.CharField(max_length=200)),
                ('style', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=200)),
                ('state', models.CharField(max_length=200)),
                ('country', models.CharField(max_length=200)),
                ('ABV', models.FloatField()),
                ('IBU', models.IntegerField(null=True)),
                ('EST_CAL', models.IntegerField(null=True)),
                ('avg_scr', models.FloatField()),
                ('description', models.TextField(blank=True)),
                ('image', models.ImageField(null=True, upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rank', models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)])),
            ],
        ),
    ]
