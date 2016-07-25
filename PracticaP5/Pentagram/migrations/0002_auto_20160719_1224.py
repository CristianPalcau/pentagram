# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='like',
            name='photo',
            field=models.ForeignKey(null=True, to='Pentagram.Photo'),
        ),
        migrations.AlterField(
            model_name='like',
            name='user',
            field=models.ForeignKey(null=True, to='Pentagram.User'),
        ),
    ]
