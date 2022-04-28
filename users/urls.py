from django.urls import path
from users.views import SignUpView, UserViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'users', UserViewSet, basename='users')
urlpatterns = [
    path('users/', UserViewSet.as_view({'get': 'list'}), name='users'),
    path('signup/', SignUpView.as_view(), name='signup'),
]
