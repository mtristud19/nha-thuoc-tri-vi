import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import Menuadmin from "../subpage/menubaradmin";

function Admin1() {
  const [listsanpham, setListsanpham] = useState([]);
  const sanphamsua = useRef({ ids: "123" });
  const [sanphamsua1, Setsanphamsua1] = useState({ tensanpham: "123" });
  useEffect(() => {
    const getdulieu = axios.get(
      "https://6380e309786e112fe1bd1aa5.mockapi.io/sanpham"
    );

    getdulieu
      .then((res) => {
        setListsanpham(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlerxoasp = async (masp) => {
    await axios.delete(
      `https://6380e309786e112fe1bd1aa5.mockapi.io/sanpham/${masp}`
    );
    const getdulieu = axios.get(
      "https://6380e309786e112fe1bd1aa5.mockapi.io/sanpham"
    );
    getdulieu
      .then((res) => {
        setListsanpham(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handlersuasanpham = (sp) => {
    sanphamsua.current = sp;
    console.log(sanphamsua.current);
  };
  const handlersuasanpham1 = () => {};
  return (
    <>
      {console.log(listsanpham)}

      <div onload="time()" className="app sidebar-mini rtl">
        {/* <!-- Sidebar menu--> */}
        <Menuadmin />
        {/* body */}
        <main className="app-content">
          <div className="app-title">
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item active">
                <Link to="/admin/quanlysanpham">
                  <b>Danh sách sản phẩm</b>
                </Link>
              </li>
            </ul>
            <div id="clock"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <div className="tile-body">
                  <div className="row element-button">
                    <div className="col-sm-2">
                      <Link
                        className="btn btn-add btn-sm"
                        to="/admin/quanlysanpham/addsanpham"
                        title="Thêm"
                      >
                        <i className="fas fa-plus"></i>
                        Tạo mới sản phẩm
                      </Link>
                    </div>

                    <div className="col-sm-2">
                      <Link
                        className="btn btn-secondary btn-sm"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i> Xóa tất cả{" "}
                      </Link>
                    </div>
                  </div>
                  <table
                    className="table table-hover table-bordered"
                    id="datatable"
                  >
                    <thead>
                      <tr>
                        <th width="10">
                          <input type="checkbox" id="all" />
                        </th>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>tiêu đề</th>
                        <th>hình ảnh</th>
                        <th>công dụng</th>
                        <th>đối tượng</th>
                        <th>dạng bào chế</th>
                        <th>mã loại</th>
                        <th>chức năng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listsanpham.map((val, key) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <input
                                  type="checkbox"
                                  name="check1"
                                  value="1"
                                />
                              </td>
                              <td key={key} value={val.id}>
                                {val.id}
                              </td>
                              <td>{val.tensanpham}</td>
                              <td>{val.tieude}</td>
                              <td>{val.hinhanh}</td>
                              <td>{val.congdung}</td>
                              <td>{val.doituong}</td>
                              <td>{val.dangbaoche}</td>
                              <td>{val.nsx}</td>
                              <td>
                                <button
                                  className="btn btn-primary btn-sm trash"
                                  type="button"
                                  title="Xóa"
                                  onClick={() => {
                                    handlerxoasp(val.id);
                                  }}
                                >
                                  <i className="fas fa-trash-alt"></i>
                                </button>
                                <button
                                  className="btn btn-primary btn-sm edit"
                                  type="button"
                                  title="Sửa"
                                  id="show-emp"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ModalUP"
                                  onClick={() => {
                                    handlersuasanpham(val);
                                  }}
                                >
                                  <i className="fas fa-edit"></i>
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* <!--
  MODAL
--> */}
        <div
          className="modal fade"
          id="ModalUP"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
          data-backdrop="static"
          data-keyboard="false"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="form-group  col-md-12">
                    <span className="thong-tin-thanh-toan">
                      <h5>Chỉnh sửa thông tin sản phẩm cơ bản</h5>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="control-label">Mã sản phẩm </label>
                    <input
                      className="form-control"
                      type="number"
                      // đang làm cái này chưa làm đc đang thử

                      value={sanphamsua1.tensanpham}
                      onChange={handlersuasanpham1}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">Tên sản phẩm</label>
                    <input
                      className="form-control"
                      type="text"
                      value="Eugica trị ho, đau họng, sổ mũi, cảm cúm, long đàm"
                    />
                  </div>
                  <div className="form-group  col-md-6">
                    <label className="control-label">tiều đề</label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      value="Eugica trị ho, đau họng, sổ mũi, cảm cúm, long đàm"
                    />
                  </div>
                  <div className="form-group col-md-6 ">
                    <label for="exampleSelect1" className="control-label">
                      Tình trạng sản phẩm
                    </label>
                    <select className="form-control" id="exampleSelect1">
                      <option>Còn hàng</option>
                      <option>Hết hàng</option>
                      <option>Đang nhập hàng</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">đối tượng</label>
                    <input className="form-control" type="text" value="" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="exampleSelect1" className="control-label">
                      dạng bào chế
                    </label>
                    <select className="form-control" id="exampleSelect1">
                      <option>viên</option>
                      <option>vỉ</option>
                      <option>Mỹ phẩm</option>
                    </select>
                  </div>
                </div>
                <br />
                <Link
                  style={{
                    float: "right",
                    fontWeight: "600",
                    color: "#ea0000",
                  }}
                >
                  Chỉnh sửa sản phẩm nâng cao
                </Link>
                <br />
                <br />
                <button className="btn btn-save" type="button">
                  Lưu lại
                </button>
                <Link className="btn btn-cancel" data-bs-dismiss="modal">
                  Hủy bỏ
                </Link>
                <br />
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
        {/* <!--
MODAL
--> */}
      </div>
    </>
  );
}

export default Admin1;
