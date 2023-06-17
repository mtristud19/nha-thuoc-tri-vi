import { Routes, Route } from "react-router-dom";

import ListLoaiSanPham from "./componentAdmin/ListLoaiSanPham";
import ListNhomSanPham from "./componentAdmin/ListNhomSanPham";
import NotFound from "./PageUser/NotFound";
import SanPhamListPage from "./PageUser/SanPhamListPage";
import SanPhamDetailPage from "./PageUser/SanPhamDetailPage";

function AppUser() {
  return (
    <>
      <div className="App">          
        <Routes>
          {/* <Route path="/" element={<SanPhamListPage />} /> */}
          <Route path="/san-pham" element={<SanPhamListPage />} />
          <Route path="/san-pham/:ma_san_pham" element={<SanPhamDetailPage />} />
          
          <Route path="/admin/nhom-san-pham" element={<ListNhomSanPham />} />
          <Route path="/admin/loai-san-pham" element={<ListLoaiSanPham />} />
          <Route path="/admin/san-pham" element={<ListNhomSanPham />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default AppUser;