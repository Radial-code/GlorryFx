import React from "react";
import right from "../assets/img/Webp/choose-right-tick.webp";
import wrong from "../assets/img/Webp/choose-wrong-tick.webp";
import shadow1 from "../assets/img/Webp/choose-right-shadow.webp";
import shadow2 from "../assets/img/Webp/choose-left-shadow.webp";

const Choose = () => {
  return (
    <div>
      {/*---------------------------------- CHOOSE-SECTION --------------------------------------*/}
      <section
        className="bg_choose py-5 my-md-4 my-xxl-5 p_relative"
        id="Pricing"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-8">
              <h2 className="sub_heading text-center">
                GlorryFX Learn & Earn Prices
              </h2>
              <p className="para text-center ">
                Learn & Earn is Designed to Help You Create Financial FREEDOM,
                choose the best package that will allow you to obtain these
                goals.
              </p>
            </div>
          </div>
          <div>
            <img src={shadow1} alt="shadow" className="position_right_shadow" />
          </div>
          <div className="row justify-content-center p_relative pt-5">
            <div
              className="col-11 col-sm-10 col-md-4 col-lg-4"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="choose_card">
                <h4 className="fs_md fw_regular ff_arial color_primary line line_height21 line_sm_height12 ">
                  Monthly Analysis
                </h4>
                <p className="fs_xxs fw_regular ff_arial color_primary line_height24 line_md_height20">
                  After joining, gain immediate access to an unrivaled
                  community. Receive alerts, ensuring you’ll never miss an
                  opportunity again!
                </p>
                <h3 className="price_dollor mb-4">
                  $100.00
                  <span className="fs_md fw_regular ff_arial color_primary ">
                    /Month
                  </span>
                </h3>
                <div className="purchase_btn">
                  <a
                    href="https://buy.stripe.com/test_8wMaGZ0O7dNEa2IdQQ"
                    className="text-decoration-none text-white"
                  >
                    <span className="text-decoration-none ">Purchase Plan</span>
                  </a>
                </div>
                <ul className="fs_xs fs_sm_10 fw_regular ff_arial color_primary ps-0 mt-4 list_style_type_none line_height24 line_md_height20 opacity_07">
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />
                    Weekly Analysis Updates
                  </li>
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />
                    Access to Webinars or Live Trading
                  </li>
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />
                    Live Trade Management Videos
                  </li>
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />
                    Brief Strategy Explanation
                  </li>
                  <li>
                    <img src={wrong} alt="blue-cross" className="pe-2" />1 on 1
                    Mentorships excluded
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-11 col-sm-10 col-md-4 col-lg-4 py-4 py-md-0"
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="choose_card">
                <h4 className="fs_md fw_regular ff_arial color_primary line_height21 line_sm_height12">
                  Monthly Analysis (Bundle Package)
                </h4>
                <p className="fs_xxs fw_regular ff_arial color_primary line_height24  line_md_height20  ">
                  After joining, gain immediate access to an unrivaled
                  community. Receive alerts, ensuring you’ll never miss an
                  opportunity again!
                </p>
                <h3 className="price_dollor mb-4">
                  $180.00
                  <span className="fs_md fw_regular ff_arial color_primary ">
                    /2Month
                  </span>
                </h3>
                <div className="purchase_btn">
                  <a
                    href="https://buy.stripe.com/test_dR6aGZ7cvdNEcaQ4gh"
                    className="text-white"
                  >
                    <span className="text-decoration-none ">Purchase Plan</span>
                  </a>
                </div>
                <ul className="fs_xs fs_sm_10 fw_regular ff_arial color_primary ps-0 mt-4 list_style_type_none line_height24 line_md_height20   opacity_07">
                  <li className="">
                    <img src={right} alt="green-tick" className="pe-2" />
                    Weekly Analysis Updates
                  </li>
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />
                    Access to Webinars or Live Trading
                  </li>
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />
                    Live Trade Management Videos
                  </li>
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />
                    Brief Strategy Explanation
                  </li>
                  <li>
                    <img src={wrong} alt="blue-cross" className="pe-2" />1 on 1
                    Mentorships excluded
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-11 col-sm-10 col-md-4 col-lg-4 pt-md- 4 pt-lg-0"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <div className="choose_card">
                <h4 className="fs_md fw_regular ff_arial color_primary line_height21 line_sm_height12 line_md_height12">
                  Lifetime Mentorship
                </h4>
                <p className="fs_xxs fw_regular ff_arial color_primary">
                  Gain Immediate access to GlorryFX, as we go over multiple
                  criteria on and off the charts.{" "}
                  <span className="d-block">
                    Recieve weekly mentoring, ensuring you'll always have
                    exquisite knoweldge to prepare you as a trader. Contact us
                    for more details.
                  </span>
                </p>
                <h3 className="price_dollor mb-4">
                  $3,000
                  <span className="fs_md fw_regular ff_arial color_primary ps-2" />
                </h3>
                <div className="purchase_btn">
                  <a
                    href="https://buy.stripe.com/test_28ocP77cv8tk8YE7su"
                    className="text-white"
                  >
                    <span className="text-decoration-none ">Purchase Plan</span>
                  </a>
                </div>
                <ul className="fs_xs fs_sm_10 fw_regular ff_arial color_primary ps-0 mt-4 list_style_type_none line_height24 line_md_height20 opacity_07">
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />
                    Exclusive access via Cell with GlorryFX
                  </li>
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />1 on 1
                    coaching (strategy,psychology, & trade management)
                  </li>
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />2 Free
                    Months of Signals
                  </li>
                  <li>
                    <img src={right} alt="green-tick" className="pe-2" />
                    3DC (Zoom Recording Included)
                  </li>
                  {/* <li>
										<img src={wrong} alt="blue-cross" className="pe-2" />
										Nisl sed amet ultricies sollicitudin dui.
									</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          src={shadow2}
          alt="shadow"
          className="translate_shadow w-25"
        />
      </section>
    </div>
  );
};

export default Choose;
