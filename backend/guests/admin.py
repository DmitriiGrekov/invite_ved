from django.contrib import admin
from .models import GuestModel


@admin.register(GuestModel)
class GuestAdmin(admin.ModelAdmin):
    """Описание админки гостей"""
    ...



