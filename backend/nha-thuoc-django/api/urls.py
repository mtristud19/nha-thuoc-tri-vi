from django.urls import path
from .views import (
    ChiTietPhieuNhapListAPIView,
    DonViSanPhamDetailAPIView,
    DonViSanPhamListAPIView,
    DonViTinhListAPIView,
    LoaiSanPhamDetailAPIView,
    LoaiSanPhamListAPIView,
    NhaCungCapListAPIView,
    NhaSanXuatDetailAPIView,
    NhaSanXuatListAPIView,
    NhomSanPhamDetailAPIView,
    NhomSanPhamListAPIView,
    PhieuNhapListAPIView,
    SanPhamListAPIView,
    SanPhamDetailAPIView,
)

urlpatterns = [
    path('/san-pham', SanPhamListAPIView.as_view()),
    path('/san-pham/<str:ma_san_pham>', SanPhamDetailAPIView.as_view()),
    path('/nhom-san-pham', NhomSanPhamListAPIView.as_view()),
    path('/nhom-san-pham/list', NhomSanPhamListAPIView.as_view()),
    path('/nhom-san-pham/<int:ma_nhom>', NhomSanPhamDetailAPIView.as_view()),
    path('/loai-san-pham', LoaiSanPhamListAPIView.as_view()),
    path('/loai-san-pham/<int:ma_loai>', LoaiSanPhamDetailAPIView.as_view()),
    path('/nha-san-xuat', NhaSanXuatListAPIView.as_view()),
    path('/nha-san-xuat/<int:ma_nsx>', NhaSanXuatDetailAPIView.as_view()),
    path('/don-vi-san-pham', DonViSanPhamListAPIView.as_view()),
    path('/don-vi-san-pham/<int:ma_dvsp>', DonViSanPhamDetailAPIView.as_view()),
    
    path('/nha-cung-cap', NhaCungCapListAPIView.as_view()),
    path('/don-vi-tinh', DonViTinhListAPIView.as_view()),
    path('/phieu-nhap', PhieuNhapListAPIView.as_view()),
    path('/chi-tiet-phieu-nhap', ChiTietPhieuNhapListAPIView.as_view()),
]