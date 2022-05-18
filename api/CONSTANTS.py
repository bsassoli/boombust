from django.utils.translation import gettext_lazy as _
from django.db import models


class SignalChoices(models.TextChoices):
    RED_BOOM = "RBO"
    ORANGE_BOOM = "OBO"
    NEUTRAL = "NEU"
    BLUE_BUST = "BBU"
    GREEN_BUST = "GBU"
    SIGNALS_CHOICES = [
        (RED_BOOM, _("RED BOOM")),
        (ORANGE_BOOM, _("ORANGE BOOM")),
        (NEUTRAL, _("NEUTRAL")),
        (BLUE_BUST, _("BLUE BUST")),
        (GREEN_BUST, _("GREEN BUST")),
    ]
