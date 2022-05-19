from django.urls import path, include
from users.views import SignUpView, UserViewSet
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt import views as jwt_views

from users.views import current_user, UserList



router = DefaultRouter()
router.register(r"users", UserViewSet, basename="users")
urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("signup/", SignUpView.as_view(), name="signup"),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(),
         name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]

    # path('current_user/', current_user),
    # path('users/', UserList.as_view())

