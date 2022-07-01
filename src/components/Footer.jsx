import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import footerlogo from "../assets/img/Webp/footor-logo.webp";
import twitter from "../assets/img/Webp/footer-twitter-icon.webp";
import instagram from "../assets/img/Webp/footer-instagram-icon.webp";
import tilegram from "../assets/img/Webp/footer-tilegram-icon.webp";
import blueshade from "../assets/img/Webp/footer-right-blueshade.webp";

const Footer = () => {
  return (
    <div>
      <section className="mt-sm-5 pt-5 position-relative">
        <img
          className="position-absolute end-0 bottom-0 "
          src={blueshade}
          alt="footer-blueshade"
        />
        <div className="container ">
          <div className="row justify-content-between overflow-y ">
            <div className="col-6 col-lg-5">
              <img className="w-100" src={footerlogo} alt="footer-logo" />
              <p className="fs_3xs  fw_regular color_primary line_height_21 line_height15 ff_arial">
                Designed to help aspiring traders interpret the foreign exchange
                market through our Learn & Earn. Inside the group contains
                limitless educational content which we think will better aid
                your performance.
              </p>
              <p className="fs_3xs  fw_bold ff_arial color_info line_height21">
                Follow Us:
              </p>
              <div className="mb-4">
                <a href=" https://twitter.com/glorryfx/">
                  <img
                    className="icon_hover"
                    src={twitter}
                    alt="twitter-icon"
                  />
                </a>
                <a href="https://www.instagram.com/glorryfx/?hl=en">
                  <img
                    className="mx-3 icon_hover"
                    src={instagram}
                    alt="instagram-icon"
                  />
                </a>
                <a href=" https://t.me/GlorryFX ">
                  <img
                    className="icon_hover"
                    src={tilegram}
                    alt="tilegram-icon"
                  />
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-between  col-6 col-sm-5 col-md-4 col-lg-3 p_relative">
              <ul className="list_style_type_none me-3 me-sm-0">
                <li className="fs_xs fw_bold color_primary ff_arial line_height24 ">
                  Company
                </li>
                <li className="mt-2 hover_color opacity_07">
                  <a
                    className="fs_3xs color_primary fw_regular ff_inter line_height16 opacity_07"
                    href="#About"
                  >
                    About
                  </a>
                </li>
                <li className="mt-2 hover_color">
                  <a
                    className="fs_3xs color_primary fw_regular ff_inter line_height16 opacity_07"
                    href="#Pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mt-2 hover_color">
                  <a
                    className="fs_3xs color_primary fw_regular ff_inter line_height16 opacity_07"
                    href="#Testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="mt-2 hover_color">
                  <a
                    className="fs_3xs color_primary fw_regular ff_inter line_height16 opacity_07"
                    href="#FAQs"
                  >
                    FAQs
                  </a>
                </li>
              </ul>

              <ul className="list_style_type_none">
                <li className="fs_xs fw_bold color_primary ff_arial line_height24 fs_3xs color_primary fw_regular ff_inter ">
                  Support
                </li>
                <Link to="/terms-condition" className="mt-3 hover_color">
                  <p className="fs_3xs color_primary fw_regular  ff_inter line_height16 pt-3 opacity_07">
                    Term and Conditions
                  </p>
                </Link>{" "}
                <Link to="/privacy-policy" className="hover_color">
                  <p className="fs_3xs color_primary fw_regular ff_inter line_height16  opacity_07">
                    Privacy Policy
                  </p>
                </Link>
                <Link to="/refund-policy" className="hover_color">
                  <p className="fs_3xs color_primary fw_regular ff_inter line_height16  opacity_07">
                    Refund Policy
                  </p>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-top text-center">
          <p className="fs_3xs  fw_regular ff_arial color_primary py-3 line_height16">
            © 2022 GlorryFX. All Rights Reserved.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default withRouter(Footer);
