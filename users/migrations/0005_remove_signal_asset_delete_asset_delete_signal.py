# Generated by Django 4.0.4 on 2022-04-30 13:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0004_rename_signals_signal"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="signal",
            name="asset",
        ),
        migrations.DeleteModel(
            name="Asset",
        ),
        migrations.DeleteModel(
            name="Signal",
        ),
    ]
