import Menuadmin from "../subpage/menubaradmin";
import "../css/main.css";
function Baocaodanhthu() {
  return (
    <>
      <div class="app sidebar-mini rtl">
        {/* <!-- Sidebar menu--> */}
        <Menuadmin />
        <main class="app-content">
          <div class="row">
            <div class="col-md-12">
              <div class="app-title">
                <ul class="app-breadcrumb breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#1">
                      <b>Báo cáo doanh thu </b>
                    </a>
                  </li>
                </ul>
                <div id="clock"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="widget-small info coloured-icon">
                <i class="icon bx bxs-purchase-tag-alt fa-3x"></i>
                <div class="info">
                  <h4>Tổng sản phẩm</h4>
                  <p>
                    <b>8580 sản phẩm</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="widget-small warning coloured-icon">
                <i class="icon fa-3x bx bxs-shopping-bag-alt"></i>
                <div class="info">
                  <h4>Tổng đơn hàng</h4>
                  <p>
                    <b>457 đơn hàng</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="widget-small primary coloured-icon">
                <i class="icon fa-3x bx bxs-chart"></i>
                <div class="info">
                  <h4>Tổng thu nhập</h4>
                  <p>
                    <b>104.890.000 đ</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="widget-small primary coloured-icon">
                <i class="icon fa-3x bx bxs-user-badge"></i>
                <div class="info">
                  <h4>khách hàng</h4>
                  <p>
                    <b>234 người dùng </b>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="widget-small warning coloured-icon">
                <i class="icon fa-3x bx bxs-tag-x"></i>
                <div class="info">
                  <h4>Hết hàng</h4>
                  <p>
                    <b>1 sản phẩm</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="widget-small danger coloured-icon">
                <i class="icon fa-3x bx bxs-receipt"></i>
                <div class="info">
                  <h4>Đơn hàng hủy</h4>
                  <p>
                    <b>2 đơn hàng</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="tile">
                <div>
                  <h3 class="tile-title">SẢN PHẨM BÁN CHẠY</h3>
                </div>
                <div class="tile-body">
                  <table
                    class="table table-hover table-bordered"
                    id="sampleTable"
                  >
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Danh mục</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>71309005</td>
                        <td>Panadol Extra giảm đau hạ sốt</td>
                        <td>5.600.000 đ</td>
                        <td>Thuốc</td>
                      </tr>
                      <tr>
                        <td>62304003</td>
                        <td>Viên sủi Efferalgan 500mg giúp giảm đau, hạ sốt</td>
                        <td>33.235.000 đ</td>
                        <td>Thuốc</td>
                      </tr>
                      <tr>
                        <td>72109004</td>
                        <td>
                          {" "}
                          Hapacol Cảm Cúm trị các triệu chứng sốt, đau, sung
                          huyết mũi
                        </td>
                        <td>3.800.000 đ</td>
                        <td>Thuốc</td>
                      </tr>
                      <tr>
                        <td>83826226</td>
                        <td>
                          Son dưỡng môi Fixderma Lip Balm ngừa nứt nẻ, khô môi,
                          làm mềm da tuýp 15ml
                        </td>
                        <td>2.450.000 đ</td>
                        <td>Mỹ phẩm</td>
                      </tr>
                      <tr>
                        <td>71304041</td>
                        <td>
                          Sáp dưỡng môi Vaseline Lip Therapy Original làm mềm,
                          mượt môi hũ 7g
                        </td>
                        <td>21.550.000 đ</td>
                        <td>Mỹ Phẩm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="tile">
                <div>
                  <h3 class="tile-title">TỔNG ĐƠN HÀNG</h3>
                </div>
                <div class="tile-body">
                  <table
                    class="table table-hover table-bordered"
                    id="sampleTable"
                  >
                    <thead>
                      <tr>
                        <th>ID đơn hàng</th>
                        <th>Khách hàng</th>
                        <th>Đơn hàng</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>MD0837</td>
                        <td>Triệu Thanh Phú</td>
                        <td>
                          Sáp dưỡng môi Vaseline Lip Therapy Original làm mềm,
                          mượt môi hũ 7g
                        </td>
                        <td>2 sản phẩm</td>
                        <td>9.400.000 đ</td>
                      </tr>
                      <tr>
                        <td>MĐ8265</td>
                        <td>Nguyễn Thị Ngọc Cẩm</td>
                        <td>
                          {" "}
                          Sáp dưỡng môi Vaseline Lip Therapy Original làm mềm,
                          mượt môi hũ 7g
                        </td>
                        <td>1 sản phẩm</td>
                        <td>3.800.000 đ</td>
                      </tr>
                      <tr>
                        <td>MT9835</td>
                        <td>Đặng Hoàng Phúc</td>
                        <td>
                          Sáp dưỡng môi Vaseline Lip Therapy Original làm mềm,
                          mượt môi hũ 7g
                        </td>
                        <td>3 sản phẩm</td>
                        <td>40.650.000 đ</td>
                      </tr>
                      <tr>
                        <td>ER3835</td>
                        <td>Nguyễn Thị Mỹ Yến</td>
                        <td>
                          {" "}
                          Sáp dưỡng môi Vaseline Lip Therapy Original làm mềm,
                          mượt môi hũ 7g
                        </td>
                        <td>1 sản phẩm</td>
                        <td>16.770.000 đ</td>
                      </tr>
                      <tr>
                        <td>AL3947</td>
                        <td>Phạm Thị Ngọc</td>
                        <td>
                          Son dưỡng môi Fixderma Lip Balm ngừa nứt nẻ, khô môi,
                          làm mềm da tuýp 15ml
                        </td>
                        <td>2 sản phẩm</td>
                        <td>19.770.000 đ</td>
                      </tr>
                      <tr>
                        <td>QY8723</td>
                        <td>Ngô Thái An</td>
                        <td>
                          Son dưỡng môi Fixderma Lip Balm ngừa nứt nẻ, khô môi,
                          làm mềm da tuýp 15ml
                        </td>
                        <td>1 sản phẩm</td>
                        <td>14.500.000 đ</td>
                      </tr>
                      <tr>
                        <th colspan="4">Tổng cộng:</th>
                        <td>104.890.000 đ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="tile">
                <div>
                  <h3 class="tile-title">SẢN PHẨM ĐÃ HẾT</h3>
                </div>
                <div class="tile-body">
                  <table
                    class="table table-hover table-bordered"
                    id="sampleTable"
                  >
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Ảnh</th>
                        <th>Số lượng</th>
                        <th>Tình trạng</th>
                        <th>Giá tiền</th>
                        <th>Danh mục</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>83826226</td>
                        <td>
                          Son dưỡng môi Fixderma Lip Balm ngừa nứt nẻ, khô môi,
                          làm mềm da tuýp 15ml
                        </td>
                        <td>
                          <img
                            src="/img-sanpham/tu.jpg"
                            alt=""
                            width="100px;"
                          />
                        </td>
                        <td>0</td>
                        <td>
                          <span class="badge bg-danger">Hết hàng</span>
                        </td>
                        <td>2.450.000 đ</td>
                        <td>Mỹ phẩm </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Baocaodanhthu;
