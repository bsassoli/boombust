from email import message
from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework import permissions, status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import CustomUser
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer, MyTokenObtainPairSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    """MyTokenObtainPairView Generates access and refresh JWT for authentication
    """
    serializer_class = MyTokenObtainPairSerializer
    permission_classes = (permissions.AllowAny,)


class CustomUserCreate(APIView):
    """CustomUserCreate Creates CustomUser object    """
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format="json"):
        serializer = CustomUserSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            # check if the username already exists or not
            username = serializer.validated_data.get("username")
            if CustomUser.objects.filter(username=username).count() > 0:
                return Response(
                    {"error": "This username is already taken."},
                    status=status.HTTP_406_NOT_ACCEPTABLE,
                )

            # check if the email already exists or not
            email = serializer.validated_data.get("email")
            if CustomUser.objects.filter(email=email).count() > 0:
                return Response(
                    {"error": "This email is already in use."},
                    status=status.HTTP_406_NOT_ACCEPTABLE,
                )

            # if username is new
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(ReadOnlyModelViewSet):
    """API CustomUser viewset. 
    Returns: user details when queried with a username.
    """

    # permission_classes = [IsAuthenticated]
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all().order_by("last_name")

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = self.queryset.filter(id=self.request.query_params["id"])
        return queryset
