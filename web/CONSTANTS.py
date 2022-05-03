from django.utils.translation import gettext_lazy as _
from django.db import models
class SignalChoices(models.TextChoices):
        RED_BOOM = 'RB', _('RED BOOM')
        ORANGE_BOOM = 'OB', _('ORANGE BOOM')
        NEUTRAL = 'NE', _('NEUTRAL')
        BLUE_BUST = 'BB', _('BLUE BUST')
        GREEN_BUST = 'GB', _('GREEN BUST')
