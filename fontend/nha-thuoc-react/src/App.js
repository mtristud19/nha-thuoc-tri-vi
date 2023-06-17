import { Routes, Route } from "react-router-dom";

import Homepage from "./subpage/Homepage";
import Bangdieukien from "./page/bangdieukien";
import Quanlysanpham from "./page/Quanlysanpham";
import Baocaodanhthu from "./page/baocaodoanhthu";
import Addsanpham from "./page/addsanphampage";
import Pagelogin from "./page/pagelogin";
import Nhomsanpham from "./page/nhomsanpham";
import Themdanhmuc from "./page/themdanhmuc";
// import Pageforgot from "./forgot";
import ListLoaiSanPham from "./componentAdmin/ListLoaiSanPham";
import ListNhomSanPham from "./componentAdmin/ListNhomSanPham";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Pagelogin />} /> */}
          {/* <Route path="/forgot" element={<Pageforgot />} /> */}
          {/* <Route path="/" element={<Pagelogin />} /> */}
          <Route path="/login" element={<Pagelogin />} />
          <Route path="/" element={<Bangdieukien />} />
          <Route path="/admin/quanlysanpham" element={<Quanlysanpham />} />
          <Route path="/user" element={<Homepage />} />
          <Route path="/admin/doanhthu" element={<Baocaodanhthu />} />
          <Route path="/admin/quanlysanpham/addsanpham" element={<Addsanpham />} />
          <Route path="/admin/quanlynhomsanpham" element={<Nhomsanpham />} />
          <Route path="/admin/adddanhmuc" element={<Themdanhmuc />} />
          
          <Route path="/admin/nhom-san-pham" element={<ListNhomSanPham />} />
          <Route path="/admin/loai-san-pham" element={<ListLoaiSanPham />} />
          <Route path="/admin/san-pham" element={<ListNhomSanPham />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
