from rest_framework.viewsets import ModelViewSet
from .serializers import SignalSerializer, AssetSerializer
from .models import Signal, Asset
from rest_framework import generics


# Create your views here.
class SignalViewSet(ModelViewSet):
    """Signals view."""

    serializer_class = SignalSerializer
    queryset = Signal.objects.all().order_by("date")


class AssetViewSet(ModelViewSet):
    """Asset view."""

    serializer_class = AssetSerializer
    queryset = Asset.objects.all().order_by("name")


class SignalByAssetList(generics.ListAPIView):
    """Queries signals by asset."""

    queryset = Signal.objects.all().order_by("date")
    serializer_class = SignalSerializer

    def get_queryset(self, *args, **kwargs):
        query_value = self.request.query_params["asset"]
        return self.queryset.filter(asset=query_value)
