import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Menuadmin from "../subpage/menubaradmin";

function Addsanpham() {
  const [listdanhmuc, Setlistdanhmuc] = useState([]);
  // them danh muc
  const danhmucmoi = useRef({ tenloai: "" });
  const handleradvaldanhmuc = (e) => {
    danhmucmoi.current.tenloai = e.target.value;
  };

  // them san pham
  const sanpham = useRef({
    id: "",
    tensanpham: "",
    tieude: "",
    congdung: "",
    doituong: "",
    dangbaoche: "",
    loai: "",
    nsx: "",
    hinhanh: "",
  });
  const handleraddsanpham = async() => {
    await axios.post(
      "https://6380e309786e112fe1bd1aa5.mockapi.io/sanpham",
      sanpham.current
    );
    
  };
  const handlerchangetensp = (e) => {
    sanpham.current.tensanpham = e.target.value;
  };
  const handlerchangetieude = (e) => {
    sanpham.current.tieude = e.target.value;
  };
  const handlerchangecongdung = (e) => {
    sanpham.current.congdung = e.target.value;
  };
  const handlerchangedtsd = (e) => {
    sanpham.current.doituong = e.target.value;
  };
  const handlerchangebaoche = (e) => {
    sanpham.current.dangbaoche = e.target.value;
  };
  const handlerchangedanhmuc = (e) => {
    sanpham.current.loai = parseInt(e.target.value);
  };
  const handlerchangencc = (e) => {
    sanpham.current.nsx = e.target.value;
  };
  const handlerchangehinhanh = (e) => {
    sanpham.current.hinhanh = e.target.value;
  };

  //  xu ly them danh muc
  const handleadddanhmuc = async () => {
    await axios.post(
      "https://6380e309786e112fe1bd1aa5.mockapi.io/danhmuc",
      danhmucmoi.current
    );
    await axios
      .get("https://6380e309786e112fe1bd1aa5.mockapi.io/danhmuc")
      .then((res) => Setlistdanhmuc(res.data));

    document.getElementById("imputdanhmuc").value = "";
  };

  // load du lieu dau tien
  useEffect(() => {
    const getdulieu = axios.get(
      "https://6380e309786e112fe1bd1aa5.mockapi.io/danhmuc"
    );

    getdulieu
      .then((res) => {
        Setlistdanhmuc(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {console.log(listdanhmuc)}

      <div className="app sidebar-mini rtl">
        {/* <!-- Sidebar menu--> */}
        <Menuadmin />
        <main className="app-content">
          <div className="app-title">
            <ul className="app-breadcrumb breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/quanlysanpham">Danh sách sản phẩm</Link>
              </li>
              <li className="breadcrumb-item">Thêm sản phẩm</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Tạo mới sản phẩm</h3>
                <div className="tile-body">
                  <div className="row element-button">
                    <div className="col-sm-2">
                      <Link
                        className="btn btn-add btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        <i className="fas fa-folder-plus"></i> Thêm nhà cung cấp
                      </Link>
                    </div>
                    <div className="col-sm-2">
                      <Link
                        className="btn btn-add btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#adddanhmuc"
                      >
                        <i className="fas fa-folder-plus"></i> Thêm danh mục
                      </Link>
                    </div>
                    <div className="col-sm-2">
                      <Link
                        className="btn btn-add btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#addtinhtrang"
                      >
                        <i className="fas fa-folder-plus"></i> Thêm tình trạng
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    {/* <div className="form-group col-md-3">
                    <label className="control-label">Mã sản phẩm </label>
                    <input className="form-control" type="number" placeholder="" />
                  </div> */}
                    <div className="form-group col-md-3">
                      <label className="control-label">Tên sản phẩm</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={handlerchangetensp}
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label className="control-label">tiêu đề</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={handlerchangetieude}
                      />
                    </div>
                    <div className="form-group col-md-3 ">
                      <label htmlFor="exampleSelect1" className="control-label">
                        Tình trạng
                      </label>
                      <select className="form-control" id="exampleSelect1">
                        <option>-- Chọn tình trạng --</option>
                        <option>Còn hàng</option>
                        <option>Hết hàng</option>
                      </select>
                    </div>

                    <div className="form-group col-md-3 ">
                      <label htmlFor="exampleSelect1" className="control-label">
                        Nhà cung cấp
                      </label>
                      <select
                        className="form-control"
                        id="exampleSelect1"
                        onChange={handlerchangencc}
                      >
                        <option>-- Chọn nhà cung cấp --</option>
                        <option>Phong vũ</option>
                        <option>Thế giới di động</option>
                        <option>FPT</option>
                      </select>
                    </div>

                    <div className="form-group col-md-3 ">
                      <label htmlFor="exampleSelect1" className="control-label">
                        dối tượng sữ dụng
                      </label>
                      <select
                        className="form-control"
                        id="exampleSelect1"
                        onChange={handlerchangedtsd}
                      >
                        <option>-- Chọn dối tượng --</option>
                        <option>trẻ em</option>
                        <option>người lớn</option>
                      </select>
                    </div>
                    <div className="form-group col-md-3 ">
                      <label htmlFor="exampleSelect1" className="control-label">
                        cách đống gói
                      </label>
                      <select className="form-control" id="exampleSelect1">
                        <option>-- cách đóng gói --</option>
                        <option>Lọ</option>
                        <option>Tuýt</option>
                        <option>Viên</option>
                        <option>Gói</option>
                        <option>Vỉ</option>
                      </select>
                    </div>

                    <div className="form-group col-md-3 ">
                      <label htmlFor="exampleSelect1" className="control-label">
                        dạng bào chế
                      </label>
                      <select
                        className="form-control"
                        id="exampleSelect1"
                        onChange={handlerchangebaoche}
                      >
                        <option>-- dạng bào chế --</option>
                        <option>viên nén</option>
                        <option>viên sủi</option>
                        <option>Viên nang</option>
                        <option>Dung dịch uống</option>
                        <option>Siro</option>
                        <option>dung dich nhỏ mắt</option>
                      </select>
                    </div>
                    <div className="form-group col-md-3 ">
                      <label htmlFor="exampleSelect1" className="control-label">
                        danh mục
                      </label>
                      <select
                        className="form-control"
                        id="exampleSelect1"
                        onChange={handlerchangedanhmuc}
                      >
                        <option>-- Chọn danh mục --</option>
                        {listdanhmuc.map((val, key) => {
                          return (
                            <option key={key} value={val.id}>
                              {val.tenloai}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <label className="control-label">
                        công dụng sản phẩm
                      </label>
                      <textarea
                        className="form-control"
                        name="mota"
                        id="mota"
                        onChange={handlerchangecongdung}
                      ></textarea>
                    </div>

                    <div className="form-group col-md-12">
                      <label className="control-label">Ảnh sản phẩm</label>
                      <div id="myfileupload">
                        <input
                          type="file"
                          id="uploadfile"
                          name="ImageUpload"
                          onChange={handlerchangehinhanh}
                        />
                      </div>
                      <div id="thumbbox">
                        {/* <img height="450" width="400" alt="Thumb image" id="thumbimage" style="display: none"  />
                  <a className="removeimg" href="javascript:" ></a> */}
                      </div>
                      <div id="boxchoice">
                        {/* <a href="javascript:" className="Choicefile"><i className="fas fa-cloud-upload-alt"></i> Chọn ảnh</a>
                  <p style="clear:both"></p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-save"
                  type="button"
                  onClick={handleraddsanpham}
                >
                  Lưu lại
                </button>
                <Link className="btn btn-cancel ml-2" to="/admin/quanlysanpham">
                  Hủy bỏ
                </Link>
              </div>
            </div>
          </div>
        </main>
        {/* modal */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          data-backdrop="static"
          data-keyboard="false"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="form-group  col-md-12">
                    <span className="thong-tin-thanh-toan">
                      <h5>Thêm mới nhà cung cấp</h5>
                    </span>
                  </div>
                  <div className="form-group col-md-4">
                    <label className="control-label">Nhập nhà cung cấp</label>
                    <input className="form-control" type="text" required />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="control-label">Nhập nơi sản xuất</label>
                    <input className="form-control" type="text" required />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="control-label">Nhập quốc gia</label>
                    <input className="form-control" type="text" required />
                  </div>
                  <div className="form-group col-md-12">
                    <label className="control-label">
                      nhà cung cấp hiện đang có
                    </label>
                    <ul style={{ paddingLeft: "20px" }}>
                      <li>điện máy xanh</li>
                      <li>fpt</li>
                      <li>nokia</li>
                    </ul>
                  </div>
                </div>
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

        <div
          className="modal fade"
          id="adddanhmuc"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          data-backdrop="static"
          data-keyboard="false"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="form-group  col-md-12">
                    <span className="thong-tin-thanh-toan">
                      <h5>Thêm mới danh mục </h5>
                    </span>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">
                      Nhập tên danh mục mới
                    </label>
                    <input
                      id="imputdanhmuc"
                      className="form-control "
                      type="text"
                      onChange={handleradvaldanhmuc}
                    />
                  </div>
                  <div className="form-group col-md-12 danhsachdanhmuc">
                    <label className="control-label">
                      Danh mục sản phẩm hiện đang có
                    </label>
                    <ul style={{ paddingLeft: "20px" }}>
                      {listdanhmuc.map((val, key) => {
                        return <li key={key}>{val.tenloai}</li>;
                      })}
                    </ul>
                  </div>
                </div>
                <br />
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={handleadddanhmuc}
                >
                  Lưu lại
                </button>
                <Link className="btn btn-danger ml-2" data-bs-dismiss="modal">
                  Hủy bỏ
                </Link>
                <br />
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="addtinhtrang"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          data-backdrop="static"
          data-keyboard="false"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="form-group  col-md-12">
                    <span className="thong-tin-thanh-toan">
                      <h5>Thêm mới tình trạng</h5>
                    </span>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">Nhập tình trạng mới</label>
                    <input className="form-control" type="text" required />
                  </div>
                  <div className="form-group col-md-12">
                    <label className="control-label">
                      tình trạng hiện đang có
                    </label>
                    <ul style={{ paddingLeft: "20px" }}>
                      <li>trẻ em</li>
                      <li>người lơn</li>
                    </ul>
                  </div>
                </div>
                <br />
                <button className="btn btn-success " type="button">
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
      </div>
    </>
  );
}

export default Addsanpham;
