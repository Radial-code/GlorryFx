import React from "react";

import mobileimg from "../assets/img/Webp/mobile-application-img.gif";
import leftimg from "../assets/img/Webp/left-img.webp";
import flowerimg from "../assets/img/Webp/folwer-img.webp";

const financial = () => {
  return (
    <div>
      <section className="min_60vh position-relative my-lg-5">
        <div
          className="flower_right_img d-none d-lg-block d-inline-block"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <img className="w-75 " src={flowerimg} alt="rightimg" />
        </div>
        <div className="left_blueshade">
          <img className="w-75" src={leftimg} alt="leftimg" />
        </div>
        <span className="position-absolute d-lg-none min-height-100vh  financial_right_blueshade"></span>
        <div className="container">
          <div className="row align-items-center justify-content-center flex-column-reverse flex-lg-row  pt-4 py-xl-5">
            <div
              className="col-12 col-md-10 my-sm-5 my-lg-0 py-5 py-lg-0 col-lg-5 mx-auto mx-lg-start position-relative"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <img
                className="w-100"
                src={mobileimg}
                alt="mobile-applition-img"
              />
            </div>
            <div className="col-12  col-lg-6 p_relative">
              <div
                className="pb-4 pb-lg-0 pe-md-5 pe-lg-0 pe-xxl-5 me-5 me-lg-0"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h2 className=" fs_sm_29 fs_xxl fw_semibold color_primary ff_raleway pe-md-4 pe-lg-0  line_height52 line_md_height41 line_sm_height30">
                  Financial Freedom is Closer Than You Think…
                </h2>
                <p className="finacial_pg  ">
                  Fully understanding the market is the key to seeing financial
                  change. We are seeing hundreds of our students:
                </p>
                <ul className="ps-3 mb-3 finacial_pg line_height26 line_sm_height18">
                  <li className="finacial_pg">
                    Getting Out of an Uninspiring 9-5
                  </li>
                  <li className="finacial_pg">
                    Investing in Their Own Businesses
                  </li>
                  <li className="finacial_pg">
                    Enjoying a Reliable Second Stream of Income
                  </li>
                  <li className="finacial_pg">
                    Having Financial Freedom to do the things THEY want to do!
                  </li>
                  <li className="finacial_pg"> And so much more…</li>
                </ul>
                <p className="finacial_pg line_sm_height18">
                  Becoming financially free has meant the world to our students.
                  It is the very reason this Learn and Earn platform was
                  created. We get giddy every time we hear a success story.
                </p>
                <p className="finacial_pg line_sm_height18">
                  Ready to be our next?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default financial;
