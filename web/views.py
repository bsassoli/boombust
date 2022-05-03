
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from .serializers import SignalSerializer, AssetSerializer
from .models import Signal, Asset
from rest_framework import generics

# Create your views here.
class SignalViewSet(ModelViewSet):
    serializer_class = SignalSerializer
    queryset = Signal.objects.all().order_by("date")
    
class AssetViewSet(ModelViewSet):
    serializer_class = AssetSerializer
    queryset = Asset.objects.all().order_by("name")
  

class SignalByAssetList(generics.ListAPIView):
    queryset = Signal.objects.all().order_by("date")
    serializer_class = SignalSerializer
    def get_queryset(self, *args, **kwargs):
        query_value= self.request.query_params["asset"]
        print(query_value)
        return self.queryset.filter(asset=query_value)
