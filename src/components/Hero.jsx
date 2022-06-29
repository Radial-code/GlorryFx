import React, { useState } from "react";
import logo from "../assets/img/Webp/navlogo.webp";
import insta from "../assets/img/Webp/instgram-icon.webp";
import twitter from "../assets/img/Webp/twitter-icon.webp";
import teligram from "../assets/img/Webp/teligram-icon.webp";
import cart from "../assets/img/Webp/cart-img.webp";
import { Link, withRouter } from "react-router-dom";
const Hero = () => {
  const [navOverlay, setNavOverlay] = useState(false);
  if (navOverlay) {
    document.body.classList.add("overflow-y-hidden");
  }
  return (
    <div>
      {" "}
      {navOverlay ? (
        <div className="nav-overlay-section  d-lg-none">
          <ul
            data-aos="fade-up"
            className="list_style_type_none h-100 d-flex flex-column justify-content-center align-items-center"
          >
            <li className="nav-item">
              <a
                onClick={() => setNavOverlay(false)}
                className="fs_sm ff_raleway color_primary fw_bold text_line"
                href="#About"
              >
                About
              </a>
            </li>
            <li className="nav-item my-5 py-5">
              <a
                onClick={() => setNavOverlay(false)}
                className="fs_sm ff_raleway color_primary fw_bold text_line"
                href="#Pricing"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => setNavOverlay(false)}
                className="fs_sm ff_raleway color_primary fw_bold text_line"
                href="#Testimonials"
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item my-5 py-5">
              <a
                onClick={() => setNavOverlay(false)}
                className="fs_sm ff_raleway color_primary fw_bold text_line"
                href="#FAQs"
              >
                FAQs
              </a>
            </li>
          </ul>
          <a onClick={() => setNavOverlay(false)} className="close"></a>
        </div>
      ) : null}{" "}
      {/* NAVBAR ========LG======== START */}
      <nav className="d-none d-lg-block p_relative nav_bg_color  py-3">
        <div className="container">
          <div className="row align-items-center justify-content-between ">
            <div className="col-6 col-md-5">
              <ul className="d-flex align-items-center text-start list_style_type_none">
                <li>
                  <a
                    className="fs_sm ff_raleway color_primary fw_bold text_line"
                    href="#About"
                  >
                    About
                  </a>
                </li>
                <li className="mx-4">
                  <a
                    className="fs_sm ff_raleway color_primary fw_bold text_line"
                    href="#Pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="fs_sm ff_raleway color_primary fw_bold text_line"
                    href="#Testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="ms-4">
                  <a
                    className="fs_sm ff_raleway color_primary fw_bold text_line"
                    href="#FAQs"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <Link to="/">
                <img className="w-100" src={logo} alt="navlogo" />
              </Link>
            </div>
            <div className="col-4 ">
              <div className="text-end">
                <a href="#">
                  <img className="icon_hover" src={cart} alt="cart" />
                </a>
                <a className="mx-4" href=" https://twitter.com/glorryfx/">
                  <img className="icon_hover" src={twitter} alt="twitter" />
                </a>
                <a href=" https://www.instagram.com/glorryfx/?hl=en">
                  <img className="icon_hover" src={insta} alt="insta" />
                </a>
                <a className="ms-4" href="https://t.me/GlorryFX">
                  <img className="icon_hover" src={teligram} alt="teligram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* NAVBAR =========SMALL========= SCREEN*/}
      <nav
        className="navbar navbar-expand-lg p_relative nav_bg_color {
              py-3 d-block d-lg-none"
      >
        <div className="container-fluid px-sm-4 px-2">
          <Link className="" to="/" href="#">
            <img className="w-100" src={logo} alt="navlogo" />
          </Link>
          <div className="d-flex align-items-center justify-content-between">
            <div className="text-end">
              <a href="#">
                <img className="icon_hover" src={cart} alt="cart" />
              </a>
              <a className="mx-3 mx-sm-4 " href="https://twitter.com/login">
                <img className="icon_hover" src={twitter} alt="twitter" />
              </a>
              <a href="https://www.instagram.com/accounts/login/">
                <img className="icon_hover" src={insta} alt="insta" />
              </a>
              <a className="ms-3 ms-sm-4" href="https://telegram.org/">
                <img className="icon_hover" src={teligram} alt="teligram" />
              </a>
              <button
                onClick={() => setNavOverlay(true)}
                className="btn navbar-toggler-icon mx-3"
              ></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Hero);
