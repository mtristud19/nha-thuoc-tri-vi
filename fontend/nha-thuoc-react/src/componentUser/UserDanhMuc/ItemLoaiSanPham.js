import { NavLink } from "react-router-dom";

const ItemLoaiSanPham = (props) => {
  return (
    <>
      <li>
      <NavLink to={'loai-san-pham/' + props.loaiSanPham.ma_loai}>{props.loaiSanPham.ten_loai}</NavLink>
      </li>
    </>
  );
};
export default ItemLoaiSanPham