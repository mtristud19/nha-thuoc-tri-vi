import "./Navbar.css";
import { Link } from "react-router-dom";
function footer() {
  return (
    <>
      <div className="raw">
        <div className="container-fluid footer">
          <div className="  row row-cols-3 pt-3">
            <div className="col gioithieu ">
              <ul className="linktrang">
                <li>
                  <h5>Nhà Thuốc Trí Vĩ</h5>
                </li>
                <li>
                  Tại nhà thuốc Trí Vĩ, mỗi dược sỹ luôn tận tâm phục vụ và được
                  đào tạo để hoàn thành xuất sắc những sứ mệnh được giao.
                </li>
                <li className="linktrang">
                  <Link to="chungtui">Tìm Hiểu Thêm</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="linktrang">
                <li>
                  <h5>Danh Mục</h5>
                </li>
                <li>
                  <Link to="thuoc">Thuốc Không Kê Đơn</Link>
                </li>
                <li>
                  <Link to="thucphamchucnang">Thực Phẩm Chức Năng</Link>
                </li>
                <li>
                  <Link to="Mỹ phẩm">Mỹ Phẩm</Link>
                </li>
                <li>
                  <Link to="dungcuyte">Thiết Bị, Dụng Cụ Y Tế</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="linktrang">
                <li>
                  <h5>Tổng Đài</h5>
                </li>
                <li>Liên Hệ: (028) 38 505 520</li>
                <li>Khiếu Nại: (028) 38 505 520</li>
                <li className="mt-2">
                  <h5>Kết Nối Với Chung Tui</h5>
                </li>
                <li>
                  <Link to="thuoc">
                    <i class="fa-brands fa-facebook fa-2xl mx-2"></i>
                  </Link>
                  <Link to="thuoc">
                    <i class="fa-brands fa-twitter fa-2xl mx-2 "></i>
                  </Link>

                  <Link to="thuoc">
                    <i class="fa-brands fa-instagram fa-2xl mx-2"></i>
                  </Link>

                  <Link to="thuoc">
                    <i class="fa-brands fa-youtube fa-2xl mx-2"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr style={{ border: "1px solid white" }}></hr>
          <div className="thongtinfooter">
            <span>
              Địa Chỉ: 180 Cao Lỗ, Phường 4, Quận 8, Tp. Hồ Chí Minh; Email:
              contact@stu.edu.vn; Số Điện Thoại: (028)73023456;
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
