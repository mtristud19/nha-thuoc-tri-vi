import Footer from "../componentUser/Footer";
import Head from "../componentUser/Head";
import Header from "../componentUser/Header";
import Hero from "../componentUser/Hero";
import DetailSanPham from "../componentUser/UserSanPham/DetailSanPham";

import "../css/user/bootstrap.min.css";
import "../css/user/style.css";
import "../css/user/slicknav.min.css";
import "../css/user/nice-select.css";
import "../css/user/fontawesome.min.css";
import "../css/user/elegant-icons.css";
import "../css/user/jquery-ui.min.css";
import "../css/user/owl.carousel.min.css";

// import "../js/jquery-3.3.1.min.js";
// import "../js/bootstrap.min.js";
// import "../js/jquery.nice-select.min.js";
// import "../js/jquery-ui.min.js";
// import "../js/jquery.slicknav.js";
// import "../js/mixitup.min.js";
// import "../js/owl.carousel.min.js";
// import "../js/main.js";

const SanPhamDetailPage = () => {
  return (
    <>
      <Head />
      <Header />
      <Hero />
      <DetailSanPham />
      <Footer />

    </>
  );
};
export default SanPhamDetailPage