import json
from django.http import JsonResponse

from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.generics import ListAPIView

from .models import SanPham
from .serializers import SanPhamSerializer

class SanPhamListAPIView(APIView):
    # 1. List all
    def get(self, request, *args, **kwargs):
        san_pham = SanPham.objects.filter()
        serializer = SanPhamSerializer(san_pham, many=True)
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
            'id_loai': request.data.get('id_loai'),
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
        '''
        Retrieves the Car with given car_id
        '''
        sanpham_instance = self.get_object(ma_san_pham)
        if not sanpham_instance:
            return Response(
                {"res": "Object with car id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = SanPhamSerializer(sanpham_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 4. Update
    def put(self, request, ma_san_pham, *args, **kwargs):
        
        sanpham_instance = self.get_object(ma_san_pham)
        if not sanpham_instance:
            return Response(
                {"res": "Object with car id does not exists"},
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
            'id_loai': request.data.get('id_loai'),
        }
        serializer = SanPhamSerializer(
            instance=sanpham_instance, data=data, partial=True)
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

def api_home(request, *args, **kwargs):
    print(request.GET)  # params={"variable":"example"}
    print(request.POST)
    body = request.body
    data = {}
    try:
        data = json.loads(body)
    except:
        pass
    print(data)
    data['params'] = dict(request.GET)  # gan params tren url vao data tra ve
    data['headers'] = dict(request.headers)  # header
    data['content_type'] = request.content_type  # application/json
    # print(data)
    return JsonResponse(data)
