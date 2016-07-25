# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('admin', '0001_initial'),
        ('authtoken', '0002_auto_20160226_1747'),
        ('Pentagram', '0002_auto_20160719_1224'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='user_ptr',
        ),
        migrations.AlterField(
            model_name='like',
            name='user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL, null=True),
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
