# Generated by Django 4.0.4 on 2022-05-03 07:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("web", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="signal",
            name="note",
            field=models.TextField(blank=True, max_length=300),
        ),
        migrations.AlterField(
            model_name="signal",
            name="shade",
            field=models.CharField(blank=True, max_length=30),
        ),
    ]
