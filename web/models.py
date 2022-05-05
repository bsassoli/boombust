from django.db import models
from .CONSTANTS import SignalChoices

# Create your models here.
class Asset(models.Model):
    name = models.CharField(max_length=40)
    ticker = models.CharField(max_length=10, null=True)
    def __str__(self):
        return self.name


class Signal(models.Model):
    """Signals model."""
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    signal = models.CharField(
        max_length=2,
        choices=SignalChoices.choices,
        default=SignalChoices.RED_BOOM,)
    date = models.DateField(auto_now_add=True)
    opening_price = models.DecimalField(max_digits=10, decimal_places=2)
    closing_price = models.DecimalField(max_digits=10, decimal_places=2)
    performance_usd = models.DecimalField(max_digits=10, decimal_places=2)
    performance_percentage = models.DecimalField(max_digits=10, decimal_places=2)
    note = models.TextField(max_length=300, blank=True)
    shade = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return f"{self.signal} for {self.asset} on {self.date}."