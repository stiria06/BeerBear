from django.urls import path, include
from users.views import UserProfileAPIView

app_name = "users"

urlpatterns = [
    path('profile/',view=UserProfileAPIView.as_view(),name='profile'),
]

