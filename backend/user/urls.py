from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from . import views

app_name = "user"

router = routers.DefaultRouter()
router.register(r"signup", views.UserViewset, "signup")
router.register(r"photos", views.PhotosViewset, "photos")
router.register(r"videos", views.VideosViewset, "videos")

urlpatterns = [path("", include(router.urls))]
urlpatterns += [path('login/', obtain_auth_token)]
