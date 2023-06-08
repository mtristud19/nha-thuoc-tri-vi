from django.urls import path
from .views import (
    SanPhamListAPIView,
    SanPhamDetailAPIView,
)

urlpatterns = [
    path('', SanPhamListAPIView.as_view()),
    path(':ma_san_pham', SanPhamDetailAPIView.as_view()),
]