import { useEffect, useState } from "react";
import FilterList from "./FilterList";
import axios from "axios";
import { URL_API_SP, URL_API_LSP } from "../constant";
import ItemListSanPham from "./UserSanPham/ItemListSanPham";
import LateProduct from "./LateProduct";
import ItemLoaiSanPham from "./UserDanhMuc/ItemLoaiSanPham";

const Content = () => {
  const [dataSanPham, setDataSanPham] = useState([]);
  const [dataLoaiSanPham, setDataLoaiSanPham] = useState([]);
  useEffect(() => {
    axios.get(URL_API_SP).then((res) => {
      setDataSanPham(res.data);
      // console.log(res.data);
      axios.get(URL_API_LSP).then((res) => {
        setDataLoaiSanPham(res.data);
      });
    });
  }, []);
  // useEffect(() => {
  //   axios.get(URL_API_LSP).then((res) => {
  //     setDataLoaiSanPham(res.data);
  //   });
  // }, []);
  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Danh mục</h4>
                  <ul>
                    {dataLoaiSanPham.map((item) => (
                      <ItemLoaiSanPham loaiSanPham={item} key={item.ma_loai} />
                      ))}
                  </ul>
                </div>
                <LateProduct />
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <FilterList />
              <div className="row">
                {dataSanPham.map((item) => (
                  <ItemListSanPham sanPham={item} key={item.ma_san_pham} />
                ))}
              </div>
              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Content;
