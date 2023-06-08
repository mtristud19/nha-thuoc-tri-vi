from django.db import models

class NhomSanPham(models.Model):
    id = models.IntegerField(null=False, primary_key=True)
    ten_nhom = models.CharField(max_length=100)

    def __str__(self):
        return self.ten_nhom

    class Meta:
        db_table = 'nhom_san_pham'

class LoaiSanPham(models.Model):
    ma_loai = models.IntegerField(null=False, primary_key=True)
    ten_loai = models.CharField(max_length=100)
    id_nhom = models.ForeignKey(NhomSanPham, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.ten_nhom

    class Meta:
        db_table = 'loai_san_pham'


class SanPham(models.Model):
    ma_san_pham = models.CharField(max_length=200, null=False, primary_key=True)
    ten_san_pham = models.CharField(max_length=300, null=True)
    ten_tieu_de = models.CharField(max_length=100, null=True)
    hinh_anh = models.TextField(null=True)
    cong_dung = models.TextField()
    doi_tuong = models.CharField(max_length=100, null=True)
    dang_bao_che = models.CharField(max_length=100, null=True)
    id_loai = models.ForeignKey(LoaiSanPham, on_delete=models.CASCADE, null=True)
    # id_loai = models.ForeignObject(LoaiSanPham, on_delete=models.CASCADE, null=True)
    # brand = models.ForeignKey(Brand, on_delete=models.CASCADE, null=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.ten_san_pham

    class Meta:
        db_table = 'san_pham'