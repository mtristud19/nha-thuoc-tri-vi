import axios from "axios";
import { useState, useEffect } from "react";
import { URL_API_NSP } from "../constant";

const ItemListNhomSanPham = (props) => {
  const ma_nhom = props.loaiSanPham.nhom
  const [nhom_san_pham, setNhomSP] = useState([])
  useEffect(() => {
    axios.get(URL_API_NSP + '/' + ma_nhom).then((res) => {
      setNhomSP(res.data)
      // console.log(res.data)
      // console.log(nhomSP.ten_nhom)
    })
  }, []);
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" name="check1" value="1" />
        </td>
        <td>{props.loaiSanPham.ma_loai}</td>
        <td>{props.loaiSanPham.ten_loai}</td>
        <td>{nhom_san_pham.ten_nhom}</td>
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
    </>
  );
};
export default ItemListNhomSanPham;
