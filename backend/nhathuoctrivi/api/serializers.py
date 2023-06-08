from rest_framework import serializers
from .models import SanPham, NhomSanPham, LoaiSanPham

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
