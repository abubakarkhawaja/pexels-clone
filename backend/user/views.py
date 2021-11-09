from rest_framework import mixins, status, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from .models import User, Photos, Videos
from .serializers import UserSerializer, PhotosSerializer, VideosSerializer


class UserViewset(mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        data = {}
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        headers = self.get_success_headers(serializer.data)

        data = serializer.data
        data['token'] = Token.objects.get(user=user).key
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)


class PhotosViewset(viewsets.ModelViewSet):
    lookup_field = "photoId"
    queryset = Photos.objects.select_related("user")
    serializer_class = PhotosSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = queryset.filter(user=self.request.user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class VideosViewset(viewsets.ModelViewSet):
    lookup_field = "videoId"
    queryset = Videos.objects.select_related("user")
    serializer_class = VideosSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = queryset.filter(user=self.request.user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
