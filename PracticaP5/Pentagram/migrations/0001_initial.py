# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.contrib.auth.models
import Pentagram.models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('auth', '0006_require_contenttypes_0002'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('comment', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('photo', models.ImageField(upload_to=Pentagram.models.photos_directory, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, to=settings.AUTH_USER_MODEL, primary_key=True, parent_link=True, serialize=False)),
            ],
            options={
                'abstract': False,
                'verbose_name_plural': 'users',
                'verbose_name': 'user',
            },
            bases=('auth.user',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.AddField(
            model_name='photo',
            name='user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='like',
            name='photo',
            field=models.ForeignKey(to='Pentagram.Photo'),
        ),
        migrations.AddField(
            model_name='like',
            name='user',
            field=models.ForeignKey(to='Pentagram.User'),
        ),
        migrations.AddField(
            model_name='comment',
            name='photo_id',
            field=models.ForeignKey(to='Pentagram.Photo'),
        ),
        migrations.AddField(
            model_name='comment',
            name='user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
    ]
