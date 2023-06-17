import "../css/main.css";
function pagelogin() {
  return (
    <>
      <div className="rawlogin  ">
        <div className="bodylogin">
          <div className="textdangnhap">đăng nhập</div>
          <div className="formdanhnhap">
            <div>
              <div className="wrap-input100 validate-input py-1">
                <input
                  className="input100"
                  type="text"
                  placeholder="Tài khoản "
                  name="username"
                  id="username"
                />
                <span className="focus-input100"></span>
              </div>
              <div className="wrap-input100 validate-input py-1">
                <input
                  autocomplete="off"
                  className="input100"
                  type="password"
                  placeholder="Mật khẩu"
                  name="current-password"
                  id="password-field"
                />

                <span className="focus-input100"></span>
              </div>

              <div>
                <div className="mt-2">
                  <button className="btn btn-primary btndanhnhap">
                    ĐĂNG NHẬP
                  </button>
                </div>
              </div>

              <div className=" quenmatkhau mt-2">
                <a className="txt2" href="/forgot.html">
                  Quên Mật Khẩu
                </a>
                <a className="txt2" href="/forgot.html">
                  Đăng Ký
                </a>
              </div>
            </div>
            <div className="mt-3">
              <h5>Hoặc</h5>
            </div>
          </div>

          <div className="dangnhaapi12 mt-3">
            <div className="dangnhaapi">
              <div>
                <button className="btn-danger btn nutdanhnhap">
                  <i
                    style={{ color: "white" }}
                    className="fa-brands fa-google px-3"
                  ></i>
                  tài Khoản Gmail
                </button>
              </div>

              <div className="mt-3">
                <button className="btn btn-success nutdanhnhap">
                  <i
                    style={{ color: "white" }}
                    className="fa-sharp fa-solid fa-phone-volume px-3"
                  ></i>
                  Số Điện Thoại
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default pagelogin;
