import { NavLink } from "react-router-dom";

function menuadmin() {
  return (
    <>
      {/* <!-- Navbar--> */}
      <header className="app-header">
        {/* <!-- Navbar Right Menu--> */}
        <ul className="app-nav">
          {/* <!-- User Menu--> */}
          <li>
            <a className="app-nav__item" href="/">
              <i className="bx bx-log-out bx-rotate-180"></i>{" "}
            </a>
          </li>
        </ul>
      </header>
      {/* <!-- Sidebar menu--> */}
      <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside className="app-sidebar">
        <div className="app-sidebar__user">
          <div>
            <p className="app-sidebar__user-name">
              <b>Quản trị viên</b>
            </p>
            <p className="app-sidebar__user-designation">
              Chào mừng bạn trở lại
            </p>
          </div>
        </div>
        <hr />
        <ul className="app-menu">
          <li>
            <NavLink className="app-menu__item " to="/">
              <i className="app-menu__icon bx bx-tachometer"></i>
              <span className="app-menu__label">Bảng điều khiển</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="app-menu__item " to="/admin/nhom-san-pham">
              <i className="app-menu__icon bx bx-purchase-tag-alt"></i>
              <span className="app-menu__label">Quản lý nhóm sản phẩm</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="app-menu__item " to="/admin/loai-san-pham">
              <i className="app-menu__icon bx bx-purchase-tag-alt"></i>
              <span className="app-menu__label">Quản lý loại sản phẩm</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="app-menu__item " to="/admin/quanlysanpham">
              <i className="app-menu__icon bx bx-purchase-tag-alt"></i>
              <span className="app-menu__label">Quản lý sản phẩm</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="app-menu__item " to="/chuaco">
              <i className="app-menu__icon bx bx-user-voice"></i>
              <span className="app-menu__label">Quản lý khách hàng</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="app-menu__item " to="/chuaco">
              <i className="app-menu__icon bx bx-task"></i>
              <span className="app-menu__label">Quản lý đơn hàng</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="app-menu__item " to="/admin/doanhthu">
              <i className="app-menu__icon bx bx-pie-chart-alt-2"></i>
              <span className="app-menu__label">Báo cáo doanh thu</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="app-menu__item " to="/chuaco">
              <i className="app-menu__icon bx bx-cog"></i>
              <span className="app-menu__label">Cài đặt </span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default menuadmin;
