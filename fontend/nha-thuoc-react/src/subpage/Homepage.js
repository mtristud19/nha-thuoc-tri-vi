import { Link } from "react-router-dom";
import "./Navbar.css";
import Footer from "./footer";
import Navbar from "./navbar";

function bodypage() {
  return (
    <>
      <Navbar />
      <div>
        <div className="dic container pt-1 my-5 py-5 ">
          {/*  thuoc khong ke don */}
          <div className="thuockhongkedon mt-5 ">
            <div className="row row-cols-2 justify-content-between align-items-center">
              <h2 className="col">Thuốc không kê đơn </h2>
              <Link className="col xemthem" to="thuoc">
                Xem tất cả {">"}
              </Link>
            </div>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <div className="row  row-cols-lg-6 justify-content-center">
                    <div className="card col-lg-2 mx-2 tieudecard">
                      <Link to="hello123">
                        <div
                          className="hinhanhcard"
                          style={{
                            backgroundImage:
                              "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                          }}
                        ></div>

                        <div className="card-body">
                          <h5 className="card-title">
                            Dầu gội thảo mọc ohbama gội là nâu(10gói)
                          </h5>
                          <p className="card-text">10.000đ/hộp </p>
                        </div>
                      </Link>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 tieudecard">
                      <Link to="hello123">
                        <div
                          className="hinhanhcard"
                          style={{
                            backgroundImage:
                              "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                          }}
                        ></div>

                        <div className="card-body">
                          <h5 className="card-title">
                            Dầu gội thảo mọc ohbama gội là nâu(10gói)
                          </h5>
                          <p className="card-text">10.000đ/hộp </p>
                        </div>
                      </Link>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 tieudecard ">
                      <Link to="hello123">
                        <div
                          className="hinhanhcard"
                          style={{
                            backgroundImage:
                              "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                          }}
                        ></div>

                        <div className="card-body">
                          <h5 className="card-title">
                            Dầu gội thảo mọc ohbama gội là nâu(10gói)
                          </h5>
                          <p className="card-text">10.000đ/hộp </p>
                        </div>
                      </Link>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row  row-cols-lg-6 justify-content-center">
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/*  thuoc khong ke don */}

          {/* thuc pham chuc nang*/}
          <div className="thucphamchucnang mt-5 ">
            <div className="row row-cols-2 justify-content-between align-items-center">
              <h2 className="col">Thực phẩm chức năng</h2>
              <Link className="col xemthem" to="thucphamchucnang">
                Xem tất cả {">"}
              </Link>
            </div>
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <div className="row  row-cols-lg-6 justify-content-center">
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row  row-cols-lg-6 justify-content-center">
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* thuc pham chuc nang*/}

          {/* dung cu y te*/}
          <div className="dungcuyte mt-5 ">
            <div className="row row-cols-2 justify-content-between align-items-center ">
              <h2 className="col">Dụng cụ y tế </h2>
              <Link className="col xemthem" to="dungcuyte">
                Xem tất cả {">"}
              </Link>
            </div>
            <div
              id="carouselExampleIndicators3"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <div className="row  row-cols-lg-6 justify-content-center">
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row  row-cols-lg-6 justify-content-center">
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>

                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                    <div className="card col-lg-2 mx-2 ">
                      <div
                        className="hinhanhcard"
                        style={{
                          backgroundImage:
                            "url(https://cdn.nhathuoclongchau.com.vn/unsafe/153x153/https://cms-prod.s3-sgn09.fptcloud.com/00029784_ohbama_goi_la_nau_thao_moc_10_goi_5704_603c_large_39d652e529.jpg)",
                        }}
                      ></div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Dầu gội thảo mọc ohbama gội là nâu(10gói)
                        </h5>
                        <p className="card-text">10.000đ/hộp </p>
                      </div>
                      <div className="btnthemgiohang">
                        <a href="sdf" className="btn btn-primary">
                          thêm giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* dung cu y te*/}

          <div className="gocsuckhoe mt-5 ">
            <div className="row row-cols-2 justify-content-between align-items-center">
              <h2 className="col">Góc sức khỏe</h2>
              <Link className="col xemthem" to="suckhoe">
                Xem tất cả {">"}
              </Link>
            </div>
            <div className="row row-cols-lg-2 row-cols-1 mx-5 ">
              <div className="col col-lg-4 baivietl  ">
                <div>
                  <Link to="baivietlon">
                    <img
                      height="90%"
                      width="100%"
                      alt=""
                      src="https://cdn.tgdd.vn//News/Thumb/0/thuong-hieu-exeltis-cua-nuoc-nao-co-tot-khong-thumb-1200x628.jpg"
                    ></img>
                  </Link>
                  <h6>Tiêu đề bài viết lớn</h6>
                </div>
              </div>
              <div className="col col-lg-8 baivietl">
                <div className="row row-cols-2">
                  <div className="col baivietn mb-2">
                    <div className="row row-cols-2 ">
                      <div className="col col-lg-4 hinhbaivietn  ">
                        <Link to="hello">
                          <img
                            height="100%"
                            width="100%"
                            alt=""
                            src="https://cdn.tgdd.vn//News/Thumb/0/thuong-hieu-exeltis-cua-nuoc-nao-co-tot-khong-thumb-1200x628.jpg"
                          ></img>
                        </Link>
                      </div>
                      <div className="col col-lg-8">
                        <div className="row row-cols-1">
                          <div className="col tieudebaiviet">
                            <Link to="hello">
                              <h6>tiêu đề bài viết</h6>
                            </Link>
                          </div>
                          <div className="col col13">
                            <span>thời gian đăng</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col baivietn mb-2">
                    <div className="row row-cols-2 ">
                      <div className="col col-lg-4 hinhbaivietn  ">
                        <Link to="hello">
                          <img
                            height="100%"
                            width="100%"
                            alt=""
                            src="https://cdn.tgdd.vn//News/Thumb/0/thuong-hieu-exeltis-cua-nuoc-nao-co-tot-khong-thumb-1200x628.jpg"
                          ></img>
                        </Link>
                      </div>
                      <div className="col col-lg-8 ">
                        <div className="row row-cols-1">
                          <div className="col tieudebaiviet">
                            <Link to="hello">
                              <h6>tiêu đề bài viết</h6>
                            </Link>
                          </div>
                          <div className="col col13">
                            <span>thời gian đăng</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col baivietn mb-2">
                    <div className="row row-cols-2 ">
                      <div className="col col-lg-4 hinhbaivietn  ">
                        <Link to="hello">
                          <img
                            height="100%"
                            width="100%"
                            alt=""
                            src="https://cdn.tgdd.vn//News/Thumb/0/thuong-hieu-exeltis-cua-nuoc-nao-co-tot-khong-thumb-1200x628.jpg"
                          ></img>
                        </Link>
                      </div>
                      <div className="col col-lg-8 ">
                        <div className="row row-cols-1">
                          <div className="col tieudebaiviet">
                            <Link to="hello">
                              <h6>tiêu đề bài viết</h6>
                            </Link>
                          </div>
                          <div className="col col13">
                            <span>thời gian đăng</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col baivietn mb-2">
                    <div className="row row-cols-2 ">
                      <div className="col col-lg-4 hinhbaivietn  ">
                        <Link to="hello">
                          <img
                            height="100%"
                            width="100%"
                            alt=""
                            src="https://cdn.tgdd.vn//News/Thumb/0/thuong-hieu-exeltis-cua-nuoc-nao-co-tot-khong-thumb-1200x628.jpg"
                          ></img>
                        </Link>
                      </div>
                      <div className="col col-lg-8 ">
                        <div className="row row-cols-1">
                          <div className="col tieudebaiviet">
                            <Link to="hello">
                              <h6>tiêu đề bài viết</h6>
                            </Link>
                          </div>
                          <div className="col col13">
                            <span>thời gian đăng</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col baivietn mb-2">
                    <div className="row row-cols-2 ">
                      <div className="col col-lg-4 hinhbaivietn  ">
                        <Link to="hello">
                          <img
                            height="100%"
                            width="100%"
                            alt=""
                            src="https://cdn.tgdd.vn//News/Thumb/0/thuong-hieu-exeltis-cua-nuoc-nao-co-tot-khong-thumb-1200x628.jpg"
                          ></img>
                        </Link>
                      </div>
                      <div className="col col-lg-8 ">
                        <div className="row row-cols-1">
                          <div className="col tieudebaiviet">
                            <Link to="hello">
                              <h6>tiêu đề bài viết</h6>
                            </Link>
                          </div>
                          <div className="col col13">
                            <span>thời gian đăng</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col baivietn mb-2">
                    <div className="row row-cols-2 ">
                      <div className="col col-lg-4 hinhbaivietn  ">
                        <Link to="hello">
                          <img
                            height="100%"
                            width="100%"
                            alt=""
                            src="https://cdn.tgdd.vn//News/Thumb/0/thuong-hieu-exeltis-cua-nuoc-nao-co-tot-khong-thumb-1200x628.jpg"
                          ></img>
                        </Link>
                      </div>
                      <div className="col col-lg-8">
                        <div className="row row-cols-1">
                          <div className="col tieudebaiviet">
                            <Link to="hello">
                              <h6>tiêu đề bài viết</h6>
                            </Link>
                          </div>

                          <div className="col col13">
                            <span>thời gian đăng</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default bodypage;
