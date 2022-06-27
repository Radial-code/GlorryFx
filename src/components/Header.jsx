import React, { useState } from "react";
import logo from "../assets/img/Webp/navlogo.webp";
import insta from "../assets/img/Webp/instgram-icon.webp";
import twitter from "../assets/img/Webp/twitter-icon.webp";
import teligram from "../assets/img/Webp/teligram-icon.webp";
import cart from "../assets/img/Webp/cart-img.webp";
import heroimg from "../assets/img/Webp/hero-section-img.webp";
import lineimg from "../assets/img/Webp/hero-bg-img.webp";
import overlay from "../assets/img/Webp/hero-bottom-overlay.webp";
import linesimg from "../assets/img/Webp/lines-img.webp";
import linemdimg from "../assets/img/Webp/lines-md-img.webp";

const Header = () => {
  const [navOverlay, setNavOverlay] = useState(false);
  if (navOverlay) {
    document.body.classList.add("overflow-y-hidden");
  }
  return (
    <div>
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
      ) : null}

      <header className="header_section_bg_img position-relative">
        <div className="position-absolute z_index1 end-0 ">
          <img
            className="w-100 d-none d-xl-block"
            src={linesimg}
            alt="lg-lines"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={linemdimg}
            alt="lines-md"
          />
          <img className="w-100 d-sm-none" src={lineimg} alt="xs-lines" />
        </div>
        <div className="position-absolute start-0 end-0 bottom-0 ">
          <img className="w-100" src={overlay} alt="hero-bg-line-img" />
        </div>
        {/* NAVBAR ========LG======== START */}
        <nav className="d-none d-lg-block p_relative nav_bg_color  py-3">
          <div className="container">
            <div className="row align-items-center justify-content-between ">
              <div className="col-6 col-md-5">
                <ul className="d-flex align-items-center text-start list_style_type_none">
                  <li>
                    <a
                      className="fs_smgti ff_raleway color_primary fw_bold text_line"
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
                <a href="#logo">
                  <img className="w-100" src={logo} alt="navlogo" />
                </a>
              </div>
              <div className="col-4 ">
                <div className="text-end">
                  <a href="#">
                    <img className="icon_hover" src={cart} alt="cart" />
                  </a>
                  <a className="mx-4" href="#">
                    <img className="icon_hover" src={twitter} alt="twitter" />
                  </a>
                  <a href="#">
                    <img className="icon_hover" src={insta} alt="insta" />
                  </a>
                  <a className="ms-4" href="#">
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
            <a className="col-4" href="#">
              <img className="w-100" src={logo} alt="navlogo" />
            </a>
            <div className="d-flex align-items-center justify-content-between">
              <div className="text-end">
                <a href="#">
                  <img className="icon_hover" src={cart} alt="cart" />
                </a>
                <a className="mx-3 mx-sm-4 " href="#">
                  <img className="icon_hover" src={twitter} alt="twitter" />
                </a>
                <a href="#">
                  <img className="icon_hover" src={insta} alt="insta" />
                </a>
                <a className="ms-3 ms-sm-4" href="#">
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
        {/* HERO =========SECTION========= START */}
        <section className="hero-section-bg pt-4 py-md-5 py-lg-0" id="About">
          <div className="container">
            <div className="row align-items-lg-center justify-content-center  flex-column flex-lg-row">
              <div className="col-11 col-md-10 col-lg-6 mx-auto mx-lg-start">
                <div
                  className="text-center text-lg-start py-lg-5 "
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <h1 className="fs_4xl fw_semibold color_primary ff_raleway line_height66 line_sm_height35">
                    Learning Made Simple
                  </h1>
                  <p className="fw_regular fs_xs ff_arial color_primary line_height26 line_sm_height16 pt-1">
                    Imagine fully understanding the Foreign Exchange Market and
                    using it to create a different life for yourself... FOREX is
                    a POWERFUL platform to build wealth, but those who attempt
                    to “play around” inside the market, often end up losing a
                    lot of money. Following the latest trend or buying solely on
                    impulse can lead to a world of disappointment. We designed
                    the Learn and Earn as a means to TRULY learn the ins and
                    outs of this market and start building real wealth. We’ve
                    made this accessible EVERYONE within the click of a button.{" "}
                  </p>
                  <a
                    className="hero_btn fw_bold color_primary ff_raleway d-inline-block mt-md-4  "
                    href="#button"
                  >
                    Join Now
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-10 col-lg-6 mx-auto mx-lg-start mt-3 mt-lg-0">
                <div className=" w_lg_50  w_xxl_50 position_lg_absolute right_15 translate_middle_lg_y pb-sm-4 pb-xxl-5  pb-lg-0 mb-5 mb-lg-0">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w-100"
                    src={heroimg}
                    alt="hero-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
