from django.contrib import admin
from .models import Signal, Asset

# Register your models here.

admin.site.register(Asset)
admin.site.register(Signal)
