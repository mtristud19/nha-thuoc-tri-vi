const LateProduct2 = () => {
  return (
    <>
    <section className="related-product">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title related__product__title">
          <h2>Related Product</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="product__item">
          <div className="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
            <ul className="product__item__pic__hover">
              <li><a href="#"><i className="fa fa-heart" /></a></li>
              <li><a href="#"><i className="fa fa-retweet" /></a></li>
              <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6><a href="#">Crab Pool Security</a></h6>
            <h5>$30.00</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};
export default LateProduct2;
