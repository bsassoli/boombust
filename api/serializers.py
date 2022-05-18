from rest_framework import serializers
from api.models import Signal, Asset


class SignalSerializer(serializers.ModelSerializer):
    """Serializes the Signal model."""

    signal = serializers.CharField(source="get_signal_display")
    asset = serializers.CharField(source="asset.name")

    class Meta:
        model = Signal
        fields = "__all__"


class AssetSerializer(serializers.ModelSerializer):
    """Serializes the Asset model."""

    class Meta:
        model = Asset
