import Menuadmin from "../subpage/menubaradmin";
function themdanhmuc() {
  return (
    <>
      <div onload="time()" class="app sidebar-mini rtl">
        {/* <!-- Sidebar menu--> */}
        <Menuadmin />

        <main class="app-content">
          <div class="app-title">
            <ul class="app-breadcrumb breadcrumb">
              <li class="breadcrumb-item">
                <a href="/admin/quanlynhomsanpham">Danh sách danh mục</a>
              </li>
              <li class="breadcrumb-item">thêm danh mục</li>
            </ul>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="tile">
                <h3 class="tile-title">Thêm Danh Mục</h3>
                <div class="tile-body">
                  <div>
                    <div class="form-group col-md-6">
                      <label class="control-label">Tên Danh Mục</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <button class="btn btn-save" type="button">
                  Lưu lại
                </button>
                <a class="btn btn-cancel ml-2" href="/admin/quanlynhomsanpham">
                  Hủy bỏ
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default themdanhmuc;
