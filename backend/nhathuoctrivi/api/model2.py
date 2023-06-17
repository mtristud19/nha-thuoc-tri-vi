from django.db import models
from .models import SanPham, PhieuNhap

class ChiTietPhieuNhap(models.Model):
    ma_ctphieu = models.IntegerField(null=False, primary_key=True)
    sanpham = models.ForeignKey(SanPham, on_delete=models.CASCADE, null=True)
    phieu_nhap = models.ForeignKey(PhieuNhap, on_delete=models.CASCADE, null=True)
    so_luong = models.IntegerField(null=True)
    gia_nhap = models.FloatField(null=True)
    lo_nhap = models.CharField(max_length=20, null=True)
    ngay_san_xuat = models.DateField(null=True)
    ngay_het_han = models.DateField(null=True)

    def __str__(self):
        return self.ma_ctphieu

    class Meta:
        db_table = 'chi_tiet_phieu_nhap'