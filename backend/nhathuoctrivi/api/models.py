from django.db import models
# from .model2 import ChiTietPhieuNhap

# Model Nha cung cap
class KhachHang(models.Model):
    ma_kh = models.IntegerField(primary_key=True, null=False)
    ten_kh = models.CharField(max_length=100, null=False)
    email = models.CharField(max_length=100, null=True)
    dia_chi = models.TextField(null=True)
    account = models.CharField(max_length=100, null=True)
    password = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.ten_kh

    class Meta:
        db_table = 'khach_hang'

# Model Nha cung cap
class NhaCungCap(models.Model):
    ma_ncc = models.IntegerField(primary_key=True, null=False)
    ten_ncc = models.CharField(max_length=100, null=True)
    dia_chi = models.TextField(null=True)

    def __str__(self):
        return self.ten_ncc

    class Meta:
        db_table = 'nha_cung_cap'

# Model Phieu nhap
class PhieuNhap(models.Model):
    ma_phieu = models.CharField(null=False, primary_key=True, max_length=20)
    tong_gia_nhap = models.FloatField(null=True)
    ngay_nhap = models.DateField(null=True)
    ncc = models.ForeignKey(NhaCungCap, on_delete=models.CASCADE ,null=True)

    def __str__(self):
        return self.ma_phieu

    class Meta:
        db_table = 'phieu_nhap'


# Model Nha san xuat
class NhaSanXuat(models.Model):
    ma_nsx = models.IntegerField(null=False, primary_key=True)
    ten_nsx = models.CharField(max_length=100, null=True)
    quoc_gia = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.ten_nsx

    class Meta:
        db_table = 'nha_san_xuat'

# Model Nhom san pham
class NhomSanPham(models.Model):

    ma_nhom = models.IntegerField(null=False, primary_key=True)
    ten_nhom = models.CharField(max_length=100)

    def __str__(self):
        return self.ten_nhom

    class Meta:
        db_table = 'nhom_san_pham'

# Loai san pham
class LoaiSanPham(models.Model):
    ma_loai = models.IntegerField(null=False, primary_key=True)
    ten_loai = models.CharField(max_length=100)
    nhom = models.ForeignKey(NhomSanPham, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.ten_loai

    class Meta:
        db_table = 'loai_san_pham'

# Model Chi tiet phieu nhap 
class ChiTietPhieuNhap(models.Model):
    ma_ctphieu = models.IntegerField(null=False, primary_key=True)
    san_pham = models.ForeignKey('SanPham', on_delete=models.CASCADE, null=True)
    phieu_nhap = models.ForeignKey(PhieuNhap, on_delete=models.CASCADE, null=True)
    so_luong = models.IntegerField(null=True)
    gia_nhap = models.FloatField(null=True)
    lo_nhap = models.CharField(max_length=20, null=True)
    ngay_san_xuat = models.DateField(null=True)
    han_su_dung = models.DateField(null=True)

    def __str__(self):
        return self.ma_ctphieu

    class Meta:
        db_table = 'chi_tiet_phieu_nhap'

# Model San pham
class SanPham(models.Model):
    ma_san_pham = models.CharField(max_length=200, null=False, primary_key=True)
    ten_san_pham = models.CharField(max_length=300, null=True)
    ten_tieu_de = models.CharField(max_length=100, null=True)
    hinh_anh = models.TextField(null=True)
    cong_dung = models.TextField()
    doi_tuong = models.CharField(max_length=100, null=True)
    dang_bao_che = models.CharField(max_length=100, null=True)
    loai = models.ForeignKey(LoaiSanPham, on_delete=models.CASCADE, null=True)
    nsx = models.ForeignKey(NhaSanXuat, on_delete=models.CASCADE, null=True)
    ctpnhap = models.ForeignKey(ChiTietPhieuNhap, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.ten_san_pham

    class Meta:
        db_table = 'san_pham'

# Model Don vi tinh
class DonViTinh(models.Model):
    ma_don_vi = models.CharField(null=False, primary_key=True, max_length=20)
    ten_don_vi = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.ten_don_vi

    class Meta:
        db_table = 'don_vi_tinh'

# Model Don vi san pham (san pham theo don vi)
class DonViSanPham(models.Model):
    ma_dvsp = models.IntegerField(null=False, primary_key=True)
    san_pham = models.ForeignKey(SanPham, on_delete=models.CASCADE, null=True)
    don_vi_tinh = models.ForeignKey(DonViTinh, on_delete=models.CASCADE, null=True)
    gia_ban = models.FloatField(null=True)
    so_luong = models.FloatField(null=True)

    def __str__(self):
        return self.ma_dvsp

    class Meta:
        db_table = 'don_vi_san_pham'        

# Model Blog
class Blog(models.Model):
    blog_id = models.IntegerField(null=False, primary_key=True)
    tieu_de = models.TextField(null=True)
    moi_dung = models.TextField(null=True)
    ngay_tao = models.DateField(null=True)

    def __str__(self):
        return self.tieu_de

    class Meta:
        db_table = 'blog'