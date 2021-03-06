# Generated by Django 4.0.4 on 2022-05-18 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="signal",
            name="signal",
            field=models.CharField(
                choices=[
                    ("RBO", "RED BOOM"),
                    ("OBO", "ORANGE BOOM"),
                    ("NEU", "NEUTRAL"),
                    ("BBU", "BLUE BUST"),
                    ("GBU", "GREEN BUST"),
                ],
                default="RBO",
                max_length=3,
            ),
        ),
    ]
