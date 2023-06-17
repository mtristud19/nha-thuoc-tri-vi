import axios from "axios";

import { URL_API_NSP } from "../constant";
import Menuadmin from "../subpage/menubaradmin";
function nhomsanpham() {
  return (
    <>
      <div className="app sidebar-mini rtl">
        <Menuadmin />
        <main className="app-content">
          <div className="app-title">
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item active">
                <a href="#1">
                  <b>Quản lý danh mục</b>
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
                        Thêm danh mục
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
                        <th style={{ width: "10%" }}>Mã Danh mục</th>
                        <th style={{ width: "50%" }}>Tên danh mục</th>
                        <th style={{ width: "10%" }}>Chức năng </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>71309005</td>
                        <td>Thuốc</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                          <button
                            className="btn btn-primary btn-sm edit ml-2"
                            type="button"
                            title="Sửa"
                            id="show-emp"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalUP"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td width="10">
                          <input type="checkbox" name="check1" value="1" />
                        </td>
                        <td>61304005</td>
                        <td>Thực phẩm chức năng</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm trash"
                            type="button"
                            title="Xóa"
                            onclick="myFunction(this)"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                          <button
                            className="btn btn-primary btn-sm edit ml-2"
                            type="button"
                            title="Sửa"
                            id="show-emp"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalUP"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                        </td>
                      </tr>
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
                      <h5>Chỉnh sửa thông tin danh mục</h5>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="control-label">Mã danh mục </label>
                    <input
                      className="form-control"
                      type="number"
                      value="213165"
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">Tên danh mục</label>
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
}

export default nhomsanpham;
