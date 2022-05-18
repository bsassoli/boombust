from django.db import models

# from .CONSTANTS import SignalChoices
from django.utils.translation import gettext_lazy as _


class SignalChoices(models.TextChoices):
    RED_BOOM = "RBO"
    ORANGE_BOOM = "OBO"
    NEUTRAL = "NEU"
    BLUE_BUST = "BBU"
    GREEN_BUST = "GBU"
    SIGNALS_CHOICES = [
        (RED_BOOM, _("RED BOOM")),
        (ORANGE_BOOM, "ORANGE BOOM"),
        (NEUTRAL, _("NEUTRAL")),
        (BLUE_BUST, _("BLUE BUST")),
        (GREEN_BUST, _("GREEN BUST")),
    ]


class Asset(models.Model):
    name = models.CharField(max_length=40)
    ticker = models.CharField(max_length=10, null=True)
    long_description = models.TextField(max_length=1000, null=True)
    short_description = models.TextField(max_length=200, null=True)

    class Meta:
        ordering = ["name"]
        indexes = [
            models.Index(fields=["name"]),
        ]

    def __str__(self):
        return self.name


class Signal(models.Model):
    """Signals model."""

    RED_BOOM = "RBO"
    ORANGE_BOOM = "OBO"
    NEUTRAL = "NEU"
    BLUE_BUST = "BBU"
    GREEN_BUST = "GBU"
    SIGNALS_CHOICES = [
        (RED_BOOM, "RED BOOM"),
        (ORANGE_BOOM, "ORANGE BOOM"),
        (NEUTRAL, "NEUTRAL"),
        (BLUE_BUST, "BLUE BUST"),
        (GREEN_BUST, "GREEN BUST"),
    ]
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    signal = models.CharField(
        max_length=3,
        choices=SIGNALS_CHOICES,
        default=RED_BOOM,
    )
    date = models.DateField(auto_now_add=True)
    opening_price = models.DecimalField(max_digits=10, decimal_places=2)
    closing_price = models.DecimalField(max_digits=10, decimal_places=2)
    performance_usd = models.DecimalField(max_digits=10, decimal_places=2)
    performance_percentage = models.DecimalField(max_digits=10, decimal_places=2)
    note = models.TextField(max_length=300, blank=True)
    shade = models.CharField(max_length=30, blank=True)

    class Meta:
        ordering = ["date", "asset"]
        indexes = [
            models.Index(fields=["date", "asset"]),
            models.Index(fields=["asset", "signal"]),
        ]

    def __str__(self):
        return f"{self.signal} for {self.asset} on {self.date}."
