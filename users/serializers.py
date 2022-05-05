from rest_framework import serializers
from users.models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    """User serializer"""

    class Meta:
        model = CustomUser
        fields = "__all__"
