import axios from "axios";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { URL_API_LSP } from "../constant";
import Menuadmin from "../subpage/menubaradmin";
import ItemListLoaiSanPham from "./ItemListLoaiSanPham";

const ListLoaiSanPham = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(URL_API_LSP).then((res) => {
      setData(res.data);
      // console.log(res.data);
    });
  }, []);
  return (
    <>
      <div className="app sidebar-mini rtl">
        <Menuadmin />
        <main className="app-content">
          <div className="app-title">
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item active">
                <a href="#1">
                  <b>Quản lý loại sản phẩm</b>
                </a>
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
                      <a
                        className="btn btn-add btn-sm"
                        href="/admin/adddanhmuc"
                        title="Thêm"
                      >
                        <i className="fas fa-plus"></i>
                        Thêm loại sản phẩm
                      </a>
                    </div>

                    <div className="col-sm-2">
                      <a
                        href
                        className="btn btn-delete btn-sm"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i> Xóa tất cả{" "}
                      </a>
                    </div>
                  </div>
                  <table
                    className="table table-hover table-bordered"
                    id="datatable"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "5%" }}>
                          <input type="checkbox" id="all" />
                        </th>
                        <th style={{ width: "10%" }}>Mã loại</th>
                        <th style={{ width: "50%" }}>Tên loại</th>
                        <th style={{ width: "20%" }}>Nhóm</th>
                        <th style={{ width: "10%" }}>Chức năng </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => <ItemListLoaiSanPham loaiSanPham={item} key = {item.ma_loai}/>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>

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
                      <h5>Chỉnh sửa thông tin loại sản phẩm</h5>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="control-label">Mã loại </label>
                    <input
                      className="form-control"
                      type="number"
                      value="213165"
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">Tên loại sản phẩm</label>
                    <input
                      className="form-control"
                      type="text"
                      value="Eugica trị ho, đau họng, sổ mũi, cảm cúm, long đàm"
                    />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <button className="btn btn-save" type="button">
                  Lưu lại
                </button>
                <a
                  className="btn btn-cancel ml-2"
                  data-bs-dismiss="modal"
                  href="#1"
                >
                  Hủy bỏ
                </a>
                <br />
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListLoaiSanPham
