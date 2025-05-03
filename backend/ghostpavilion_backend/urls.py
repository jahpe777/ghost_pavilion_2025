from django.contrib import admin
from django.urls import path
from mailing.views import SignUpCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/signup/', SignUpCreateView.as_view(), name='signup'),
]
