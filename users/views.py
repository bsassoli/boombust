from django.shortcuts import render
from django.urls import reverse_lazy
from .forms import UserRegisterForm
from django.views.generic.edit import CreateView
from django.contrib.messages.views import SuccessMessageMixin

from rest_framework.viewsets import ModelViewSet
from .serializers import UserSerializer
from .models import CustomUser


class UserViewSet(ModelViewSet):

    serializer_class = UserSerializer
    queryset = CustomUser.objects.all().order_by("last_name")


class SignUpView(SuccessMessageMixin, CreateView):
    template_name = "users/signup.html"
    success_url = reverse_lazy("signup")
    form_class = UserRegisterForm
    success_message = "Your profile was created successfully"
