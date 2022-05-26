from django.contrib import admin
from .models import CustomUser


# Register your models here.
class CustomUserAdmin(admin.ModelAdmin):
    readonly_fields = ("id",)


admin.site.register(CustomUser, CustomUserAdmin)
