const ItemListNhomSanPham = (props) => {
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" name="check1" value="1" />
        </td>
        <td>{props.nhomSanPham.ma_nhom}</td>
        <td>{props.nhomSanPham.ten_nhom}</td>
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
