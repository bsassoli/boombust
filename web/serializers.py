from rest_framework import serializers
from web.models import Signal, Asset


class SignalSerializer(serializers.ModelSerializer):
    """Serializes the Signal model."""
    class Meta:
        model = Signal
        fields = "__all__"


class AssetSerializer(serializers.ModelSerializer):
    """Serializes the Asset model."""
    class Meta:
        model = Asset
        fields = "__all__"