from django.shortcuts import render
from django.urls import reverse_lazy
from .forms import UserRegisterForm
from django.views.generic.edit import CreateView
from django.contrib.messages.views import SuccessMessageMixin
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework import permissions, status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializer
from .models import CustomUser
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer, MyTokenObtainPairSerializer


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("Errors" + serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    permission_classes = (permissions.AllowAny,)
    

class CustomUserCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(ReadOnlyModelViewSet):
    """API CustomUser viewset."""
    # permission_classes = [IsAuthenticated]
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all().order_by("last_name")
    
    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = self.queryset.filter(username=self.request.query_params['username'])
        return queryset
    
