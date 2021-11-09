from rest_framework import serializers

from .models import User, Photos, Videos


class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ("id", "name", "email", "username", "password", "password2")
        extra_kwargs = {"password": {"write_only": True}}

    def save(self):
        user = User(email=self.validated_data['email'],
                    username=self.validated_data['username'],
                    name=self.validated_data['name'])
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError(
                {'password': "Password Must Match."})
        user.set_password(password)
        user.save()
        return user


class PhotosSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Photos
        fields = "__all__"


class VideosSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Videos
        fields = "__all__"
