const LateProduct = () => {
  return (
    <>
    <div className="sidebar__item">

      <div className="latest-product__text">
        <h4>Latest Products</h4>
        <div className="latest-product__slider owl-carousel">
          <div className="latest-prdouct__slider__item">
            <a href="#" className="latest-product__item">
              <div className="latest-product__item__pic">
                <img src="img/latest-product/lp-3.jpg" alt />
              </div>
              <div className="latest-product__item__text">
                <h6>Crab Pool Security</h6>
                <span>$30.00</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default LateProduct;
