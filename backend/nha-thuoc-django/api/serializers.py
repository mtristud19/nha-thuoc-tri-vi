from rest_framework import serializers
from .models import Blog, ChiTietPhieuNhap, DonViSanPham, DonViTinh, NhaCungCap, NhaSanXuat, PhieuNhap, SanPham, NhomSanPham, LoaiSanPham


class SanPhamSerializer(serializers.ModelSerializer):
    class Meta:
        model = SanPham
        fields = '__all__'


class NhomSanPhamSerializer(serializers.ModelSerializer):
    class Meta:
        model = NhomSanPham
        fields = '__all__'


class LoaiSanPhamSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoaiSanPham
        fields = '__all__'


class NhaCungCapSerializer(serializers.ModelSerializer):
    class Meta:
        model = NhaCungCap
        fields = '__all__'


class NhaSanXuatSerializer(serializers.ModelSerializer):
    class Meta:
        model = NhaSanXuat
        fields = '__all__'


class DonViTinhSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonViTinh
        fields = '__all__'


class DonViSanPhamSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonViSanPham
        fields = '__all__'


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'


class ChiTietPhieuNhapSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChiTietPhieuNhap
        fields = '__all__'


class PhieuNhapSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhieuNhap
        fields = '__all__'
