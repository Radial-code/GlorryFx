import React from "react";
import Newsletterimg from "../assets/img/Webp/Newsletter-img.webp";
import massageimg from "../assets/img/Webp/sms-icon.webp";
import teligramimg from "../assets/img/Webp/newsletter-teliegram-img.webp";
import blueshadowimg from "../assets/img/Webp/blueshadow.png";
import smallblueshade from "../assets/img/Webp/newsletter-blueshade-sm.webp";

const Newsletter = () => {
  return (
    <div className="position-relative">
      <span className=" blueshade position-absolute end-0 top-50 translate-middle-y d-none d-lg-block"></span>
      <div>
        <img
          className=" Newsletter_sm_blueshade position-absolute end-0 bottom-50 translate-middle-y d-block d-md-none"
          src={smallblueshade}
          alt="blueshade-sm"
        />
      </div>
      <div className=" d-none d-md-block d-lg-none">
        <img
          className="Newsletter_blueshade  position-absolute w-100 top-0 start-0 end-0 top-50 translate-middle-y "
          src={blueshadowimg}
          alt="blueshadow"
        />
      </div>
      <section className=" bg_glass position-relative  py-5">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row justify-content-between position-relative">
            <div className=" col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="mt-5 mt-lg-0"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <img
                  className="w-100"
                  src={Newsletterimg}
                  alt="Newsletter-img"
                />
              </div>
            </div>
            <div className=" col-11 col-md-8 col-lg-6 col-xl-5 z-100 position-relative">
              <div
                className="text-center z_index5 text-lg-start pe-xxl-5 me-xxl-5"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <h3 className="fs_3xl  fw_semibold ff_raleway color_primary">
                  Subscribe to Our Newsletter
                </h3>
                <p className="fs_xxs fw_regular color_primary line_height_25  ff_arial">
                  Dolor mattis quisque curabitur lacus, pharetra sem leo.
                  Elementum libero.
                </p>
                <div className=" d-flex align-items-center justify-content-between mt-4 input_box">
                  <div className="col-6">
                    <img className="px-2 " src={massageimg} alt="sms-icon" />
                    <input
                      className="fs_4xs fw_regular text-dark ff_arial"
                      type="text"
                      placeholder="Enter Your E-mail"
                    />
                  </div>
                  <button className="subscribe_btn">
                    <img className="pe-2" src={teligramimg} alt="teligramimg" />{" "}
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
