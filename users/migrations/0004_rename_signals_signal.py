# Generated by Django 4.0.4 on 2022-04-30 12:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0003_asset_signals"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Signals",
            new_name="Signal",
        ),
    ]
