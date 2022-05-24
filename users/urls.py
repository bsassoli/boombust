from django.urls import path, include
from users.views import UserViewSet, CustomUserCreate, MyTokenObtainPairView
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from rest_framework_simplejwt import views as jwt_views




router = DefaultRouter()
router.register(r"users", UserViewSet, basename="users")
urlpatterns = [
    path("", include(router.urls)),
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('user/', UserViewSet.as_view({'get':'list'}), name="user_details"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/obtain/', MyTokenObtainPairView.as_view(),
         name='token_create'),  # override sjwt stock token
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
