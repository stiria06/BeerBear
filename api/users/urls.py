from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from users.views import UserCreateAPIView, UserLoginAPIView
app_name = "users"

urlpatterns = {
    path('login/', UserLoginAPIView.as_view(), name="login"),
    path('register/', UserCreateAPIView.as_view(), name="register"),
}

urlpatterns = format_suffix_patterns(urlpatterns)
