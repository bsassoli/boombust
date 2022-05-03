from django.shortcuts import render



from rest_framework.viewsets import ModelViewSet
from .serializers import SignalSerializer, AssetSerializer
from .models import Signal, Asset

# Create your views here.
class SignalViewSet(ModelViewSet):
    serializer_class = SignalSerializer
    queryset = Signal.objects.all().order_by("date")
class AssetViewSet(ModelViewSet):
    serializer_class = AssetSerializer
    queryset = Asset.objects.all().order_by("name")