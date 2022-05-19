from django.shortcuts import render
from django.urls import reverse_lazy
from .forms import UserRegisterForm
from django.views.generic.edit import CreateView
from django.contrib.messages.views import SuccessMessageMixin
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions, status
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer
from .models import CustomUser
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken

class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("Errors" + serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(ModelViewSet):
    """API CustomUser viewset."""
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all().order_by("last_name")
    
    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = queryset.filter(user = self.request.user)
    
        return queryset
    
class SignUpView(SuccessMessageMixin, CreateView):
    """API CustomUser signup view."""

    template_name = "users/signup.html"
    success_url = reverse_lazy("signup")
    form_class = UserRegisterForm
    success_message = "Your profile was created successfully"
