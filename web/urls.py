from django.urls import path, include
from .views import SignalViewSet, AssetViewSet, SignalByAssetList
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"signals", SignalViewSet, basename="signals")
router.register(r"assets", AssetViewSet, basename="assets")

urlpatterns = [
    path("", include(router.urls)),
    # path('api-auth/', include('rest_framework.urls')),
    path("signal_list/", SignalByAssetList.as_view()),
]
