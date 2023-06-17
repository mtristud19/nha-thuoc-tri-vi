import json
from django.http import JsonResponse

from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
# from rest_framework import serializers
from rest_framework.generics import ListAPIView

from .models import ChiTietPhieuNhap, DonViSanPham, DonViTinh, LoaiSanPham, NhaCungCap, NhaSanXuat, NhomSanPham, PhieuNhap, SanPham
from .serializers import ChiTietPhieuNhapSerializer, DonViSanPhamSerializer, DonViTinhSerializer, LoaiSanPhamSerializer, NhaCungCapSerializer, NhaSanXuatSerializer, NhomSanPhamSerializer, PhieuNhapSerializer, SanPhamSerializer

# Chi tiet phieu nhap
class PhieuNhapListAPIView(APIView):
    def get(self, request, *args, **kwargs):
        ma_phieu = PhieuNhap.objects.all()
        serializer = PhieuNhapSerializer(ma_phieu, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request, *args, **kwargs):
        data = {
            'ma_phieu': request.data.get('ma_phieu'),
            'tong_gia_nhap': request.data.get('tong_gia_nhap'),
            'ngay_nhap': request.data.get('ngay_nhap'),
            'ncc': request.data.get('ncc'),
        }
        serializer = PhieuNhapSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Chi tiet phieu nhap
class ChiTietPhieuNhapListAPIView(APIView):
    def get(self, request, *args, **kwargs):
        ctpnhap = ChiTietPhieuNhap.objects.all()
        serializer = ChiTietPhieuNhapSerializer(ctpnhap, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request, *args, **kwargs):
        data = {
            'ma_ctphieu': request.data.get('ma_ctphieu'),
            'san_pham': request.data.get('san_pham'),
            'phieu_nhap': request.data.get('phieu_nhap'),
            'so_luong': request.data.get('so_luong'),
            'gia_nhap': request.data.get('gia_nhap'),
            'lo_nhap': request.data.get('lo_nhap'),
            'ngay_san_xuat': request.data.get('ngay_san_xuat'),
            'han_su_dung': request.data.get('han_su_dung'),
        }
        serializer = ChiTietPhieuNhapSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Nha cung cap
class NhaSanXuatListAPIView(APIView):
    def get(self, request, *args, **kwargs):
        nha_san_xuat = NhaSanXuat.objects.all()
        serializer = NhaSanXuatSerializer(nha_san_xuat, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request, *args, **kwargs):
        data = {
            'ma_nsx': request.data.get('ma_nsx'),
            'ten_nsx': request.data.get('ten_nsx'),
            'quoc_gia': request.data.get('quoc_gia'),
        }
        serializer = NhaSanXuatSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Nha cung cap
class NhaCungCapListAPIView(APIView):
    def get(self, request, *args, **kwargs):
        nha_cung_cap = NhaCungCap.objects.all()
        serializer = NhaCungCapSerializer(nha_cung_cap, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request, *args, **kwargs):
        data = {
            'ma_ncc': request.data.get('ma_ncc'),
            'ten_ncc': request.data.get('ten_ncc'),
            'dia_chi': request.data.get('dia_chi'),
        }
        serializer = NhaCungCapSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# nhom san pham
class NhomSanPhamListAPIView(APIView):
    # 1. List all
    def get(self, request, *args, **kwargs):
        nhom_san_pham = NhomSanPham.objects.all()
        serializer = NhomSanPhamSerializer(nhom_san_pham, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        data = {
            'ma_nhom': request.data.get('ma_nhom'),
            'ten_nhom': request.data.get('ten_nhom'),
        }
        serializer = NhomSanPhamSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Don vi tinh
class DonViTinhListAPIView(APIView):
    # 1. List all
    def get(self, request, *args, **kwargs):
        don_vi_tinh = DonViTinh.objects.all()
        serializer = DonViTinhSerializer(don_vi_tinh, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        data = {
            'ma_don_vi': request.data.get('ma_don_vi'),
            'ten_don_vi': request.data.get('ten_don_vi'),
        }
        serializer = DonViTinhSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Don vi san pham
class DonViSanPhamListAPIView(APIView):
    # 1. List all
    def get(self, request, *args, **kwargs):
        don_vi_san_pham = DonViSanPham.objects.all()
        serializer = DonViSanPhamSerializer(don_vi_san_pham, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        data = {
            'ma_dvsp': request.data.get('ma_dvsp'),
            'san_pham': request.data.get('san_pham'),
            'don_vi_tinh': request.data.get('don_vi_tinh'),
            'gia_ban': request.data.get('gia_ban'),
            'so_luong': request.data.get('so_luong'),
        }
        serializer = DonViSanPhamSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NhomSanPhamDetailAPIView(APIView):
    # # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_object(self, ma_nhom):
        try:
            return NhomSanPham.objects.get(ma_nhom=ma_nhom)
        except NhomSanPham.DoesNotExist:
            return None

    # 3. Retrieve
    def get(self, request, ma_nhom, *args, **kwargs):
        
        nhomsanpham_instance = self.get_object(ma_nhom)
        if not nhomsanpham_instance:
            return Response(
                {"res": "Object - nhom san pham does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = NhomSanPhamSerializer(nhomsanpham_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

# loai san pham
class LoaiSanPhamListAPIView(APIView):
    # 1. List all
    def get(self, request, *args, **kwargs):
        loai_san_pham = LoaiSanPham.objects.all()
        serializer = LoaiSanPhamSerializer(loai_san_pham, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        data = {
            'ma_loai': request.data.get('ma_loai'),
            'ten_loai': request.data.get('ten_loai'),
            'nhom': request.data.get('nhom'),
        }
        serializer = LoaiSanPhamSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoaiSanPhamDetailAPIView(APIView):

    def get_object(self, ma_loai):
        try:
            return LoaiSanPham.objects.get(ma_loai=ma_loai)
        except LoaiSanPham.DoesNotExist:
            return None

    # 3. Retrieve
    def get(self, request, ma_loai, *args, **kwargs):
        
        loaisanpham_instance = self.get_object(ma_loai)
        if not loaisanpham_instance:
            return Response(
                {"res": "Object - nhom san pham does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = LoaiSanPhamSerializer(loaisanpham_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

# San pham full - CRUD
class SanPhamListAPIView(APIView):
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # 1. List all
    def get(self, request, *args, **kwargs):
        list_san_pham = SanPham.objects.all()
        serializer = SanPhamSerializer(list_san_pham, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        data = {
            'ma_san_pham': request.data.get('ma_san_pham'),
            'ten_san_pham': request.data.get('ten_san_pham'),
            'ten_tieu_de': request.data.get('ten_tieu_de'),
            'hinh_anh': request.data.get('hinh_anh'),
            'cong_dung': request.data.get('cong_dung'),
            'doi_tuong': request.data.get('doi_tuong'),
            'dang_bao_che': request.data.get('dang_bao_che'),
            'loai': request.data.get('loai'),
        }
        serializer = SanPhamSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SanPhamDetailAPIView(APIView):
    # # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_object(self, ma_san_pham):
        try:
            return SanPham.objects.get(ma_san_pham=ma_san_pham)
        except SanPham.DoesNotExist:
            return None

    # 3. Retrieve
    def get(self, request, ma_san_pham, *args, **kwargs):
        
        sanpham_instance = self.get_object(ma_san_pham)
        if not sanpham_instance:
            return Response(
                {"res": "Object - san pham does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = SanPhamSerializer(sanpham_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 4. Update
    def put(self, request, ma_san_pham, *args, **kwargs):
        
        sanpham_instance = self.get_object(ma_san_pham)
        if not sanpham_instance:
            return Response(
                {"res": "Object - san pham does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )
        data = {
            'ma_san_pham': request.data.get('ma_san_pham'),
            'ten_san_pham': request.data.get('ten_san_pham'),
            'ten_tieu_de': request.data.get('ten_tieu_de'),
            'hinh_anh': request.data.get('hinh_anh'),
            'cong_dung': request.data.get('cong_dung'),
            'doi_tuong': request.data.get('doi_tuong'),
            'dang_bao_che': request.data.get('dang_bao_che'),
            'loai': request.data.get('loai'),
        }
        serializer = SanPhamSerializer(instance=sanpham_instance, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # 5. Delete
    def delete(self, request, ma_san_pham, *args, **kwargs):

        sanpham_instance = self.get_object(ma_san_pham)
        if not sanpham_instance:
            return Response(
                {"res": "Object with car id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )
        sanpham_instance.delete()
        return Response(
            {"res": "Object deleted!"},
            status=status.HTTP_200_OK
        )

# def api_home(request, *args, **kwargs):
#     print(request.GET)  # params={"variable":"example"}
#     print(request.POST)
#     body = request.body
#     data = {}
#     try:
#         data = json.loads(body)
#     except:
#         pass
#     print(data)
#     data['params'] = dict(request.GET)  # gan params tren url vao data tra ve
#     data['headers'] = dict(request.headers)  # header
#     data['content_type'] = request.content_type  # application/json
#     # print(data)
#     return JsonResponse(data)