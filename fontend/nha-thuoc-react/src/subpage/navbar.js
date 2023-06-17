import { Link } from "react-router-dom";
import Style from "./Navbar.css";
import hinhlogo from "../LOGONHATHUOC1.png";
function navbar() {
  return (
    <>
      {console.log(Style)}
      {/* thanh navbar */}
      <nav className="navbar navbar-expand-lg bg-primary pt-3  ">
        <div className="container-fluid row justify-content-around   row-cols-md-2 row-cols-xl-4 row-cols-lg-4  row-cols-sm-1">
          {/* start logo */}
          <div className="navbar-brand col-2 col-md-2  col-md-2 col-10  ">
            <Link to="/">
              <img
                width="200px"
                height="50px"
                // src="https://cms-prod.s3-sgn09.fptcloud.com/logo_front_big_c58fec2dc9.svg"
                src={hinhlogo}
                alt=""
              />
            </Link>
          </div>
          {/* end logo */}

          {/* start search */}
          <div className="nav_search col-11 col-md-5 col-lg-4  col-xl-4  ">
            <ul className="navbar-nav  ">
              <li className="nav-item ">
                <input
                  size="69"
                  className="form-control nav_input "
                  type="text"
                  placeholder="Search"
                />
                <i
                  style={{ color: "black" }}
                  onClick={() => console.log("search_nav")}
                  id="nav_search "
                  className="fa-solid fa-magnifying-glass nav-item "
                ></i>
              </li>
            </ul>
          </div>

          <div className=" col col-xl-1 col-lg-1 btngiahang">
            <div className="dangnhap ">
              <Link to="/giohang">
                <i className="fa-solid fa-cart-shopping"></i>
                <button className="btn btn-info ">
                  giỏ hàng{" "}
                  <span className="badge bg-danger rounded-circle">8</span>
                </button>
              </Link>
            </div>
          </div>

          <div className=" col col-xl-1 col-lg-1 btndangnhap">
            <div className="dangnhap ">
              <Link to="danhnhap">
                <i className="fa-solid fa-user"></i>
                <button className="btn btn-info">đăng nhập</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className=" navbar navbar-expand-lg navbardanhmuc row ">
        {/* start btn menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* end btn menu */}

        {/* start menu */}
        <div
          className="collapse navbar-collapse  col"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navmenu  ">
            <li className="nav-item dropdown mx-2">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                THUỐC
              </Link>
              <ul className="dropdown-menu  ">
                <li>
                  <Link className="dropdown-item " href="#">
                    thuốc kháng dị ứng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc kháng viêm
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc ngừa thai
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc cảm lạnh
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc da liễu
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc mắt, tai, mũi, họng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    giảm đau, hạ sốt
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc tiêu hóa
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mx-2">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                THỰC PHẨM CHỨC NĂNG
              </Link>
              <ul className="dropdown-menu  ">
                <li>
                  <Link className="dropdown-item " href="#">
                    thuốc kháng dị ứng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc kháng viêm
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc ngừa thai
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc cảm lạnh
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc da liễu
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc mắt, tai, mũi, họng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    giảm đau, hạ sốt
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc tiêu hóa
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mx-2">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MỸ PHẨM
              </Link>
              <ul className="dropdown-menu  ">
                <li>
                  <Link className="dropdown-item " href="#">
                    thuốc kháng dị ứng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc kháng viêm
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc ngừa thai
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc cảm lạnh
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc da liễu
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc mắt, tai, mũi, họng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    giảm đau, hạ sốt
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc tiêu hóa
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mx-2">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                THIẾT BỊ, DỤNG CỤ Y TẾ
              </Link>
              <ul className="dropdown-menu  ">
                <li>
                  <Link className="dropdown-item " href="#">
                    thuốc kháng dị ứng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc kháng viêm
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc ngừa thai
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc cảm lạnh
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc da liễu
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc mắt, tai, mũi, họng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    giảm đau, hạ sốt
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    thuốc tiêu hóa
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/suckhoe">
                GÓC SỨC KHỎE
              </Link>
            </li>
          </ul>
        </div>
        {/* end menu */}
      </div>
    </>
  );
}

export default navbar;
