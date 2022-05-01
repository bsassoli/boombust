from django.urls import path, include
from users.views import SignUpView, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"users", UserViewSet, basename="users")
urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("signup/", SignUpView.as_view(), name="signup"),
]
