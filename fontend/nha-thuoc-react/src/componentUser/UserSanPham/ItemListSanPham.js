import { Link } from "react-router-dom";

const ItemListSanPham = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="product__item">
          <Link to={props.sanPham.ma_san_pham}> 
          <div className="product__item__pic set-bg">
          <img src={props.sanPham.hinh_anh} />
            <ul className="product__item__pic__hover">
              <li>
                <a href="#">
                  <i className="fa fa-heart" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-retweet" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-shopping-cart" />
                </a>
              </li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6>
            {/* <Link /> */}
              {props.sanPham.ten_tieu_de}
            </h6>
            <h5>{props.sanPham.ma_san_pham}</h5>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ItemListSanPham;
