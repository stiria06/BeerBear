from django.urls import path, include
from users.views import UserProfileAPIView, QRCodeReadAPIView

app_name = "users"

urlpatterns = [
    path('profile/',view=UserProfileAPIView.as_view(),name='profile'),
    path('qrcode/<user_pk>/', view=QRCodeReadAPIView.as_view(), name='profile'),
]
