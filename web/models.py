from django.db import models

# Create your models here.
class Asset(models.Model):
    name = models.CharField(max_length=40)
    ticker = models.CharField(max_length=10, null=True)

    def __str__(self):
        return self.name


class Signal(models.Model):
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    signal = models.CharField(max_length=100, null=True)
    date = models.DateField(null=True)
    opening_price = models.DecimalField(max_digits=6, decimal_places=2, null=True)
    closing_price = models.DecimalField(max_digits=6, decimal_places=2, null=True)
    performance_usd = models.DecimalField(max_digits=8, decimal_places=2, null=True)
    performance_percentage = models.DecimalField(max_digits=8, decimal_places=2, null=True)
    note = models.TextField(max_length=300, null=True)
    shade = models.CharField(max_length=30, null=True)
