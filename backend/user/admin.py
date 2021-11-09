from django.contrib import admin

from .models import User, Photos, Videos

admin.site.register(User)
admin.site.register(Photos)
admin.site.register(Videos)
