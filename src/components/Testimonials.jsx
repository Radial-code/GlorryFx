import React from "react";
import mainimg from "../assets/img/Webp/testimonials-main-img.webp";
import comma1 from "../assets/img/Webp/testimonials-comma-1.webp";
import comma2 from "../assets/img/Webp/testimonials-comma-2.webp";

const Testimonials = () => {
  return (
    <div>
      <section
        className="bg_testimonials py_extra_testimonials"
        id="Testimonials"
      >
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-11 col-lg-6 ">
              <div
                id="carouselExampleFade"
                className="carousel slide pe-xl-5 carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner mb-5">
                  <div className="carousel-item mt-sm-4 mt-5   pe-lg-5 active">
                    <div
                      className="testimonial_card  my-3 my-lg-0"
                      data-aos="zoom-in-down"
                      data-aos-duration="1500"
                    >
                      <div className="position_comma1">
                        <img src={comma1} alt="comma" />
                      </div>
                      <div className="position_main_img">
                        <img src={mainimg} alt="view-test-img" />
                      </div>
                      <p className="doller_pg">
                        Dolor mattis quisque curabitur lacus, pharetra sem leo.
                        Elementum fames vel erat volutpat varius placerat
                        libero. Consectetur quis quisque nulla lectus quis.
                      </p>
                      <h3 className="fs_xl fs_sm_20 fw_regular ff_raleway color_primary">
                        Esther Howard
                      </h3>
                      <h6 className="fs_xxs fs_sm_10 fw_regular ff_arial color_linear">
                        UX - Designer
                      </h6>

                      <div className="position_comma2">
                        <img src={comma2} alt="comma" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item mt-sm-4 mt-5 pe-lg-5">
                    <div
                      className="testimonial_card position-relative my-3 my-lg-0"
                      data-aos="zoom-in-down"
                      data-aos-duration="1500"
                    >
                      <div className="position_comma1">
                        <img src={comma1} alt="comma" />
                      </div>
                      <div className="position_main_img">
                        <img src={mainimg} alt="view-test-img" />
                      </div>
                      <p className="doller_pg">
                        Dolor mattis quisque curabitur lacus, pharetra sem leo.
                        Elementum fames vel erat volutpat varius placerat
                        libero. Consectetur quis quisque nulla lectus quis.
                      </p>
                      <h3 className="fs_xl fs_sm_20 fw_regular ff_raleway color_primary">
                        Esther Howard
                      </h3>
                      <h6 className="fs_xxs fs_sm_10 fw_regular ff_arial color_linear">
                        UI - Designer
                      </h6>

                      <div className="position_comma2">
                        <img src={comma2} alt="comma" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item mt-sm-4 mt-5 pe-lg-5">
                    <div
                      className="testimonial_card position-relative my-3 my-lg-0"
                      data-aos="zoom-in-down"
                      data-aos-duration="1000"
                    >
                      <div className="position_comma1">
                        <img src={comma1} alt="comma" />
                      </div>
                      <div className="position_main_img">
                        <img src={mainimg} alt="view-test-img" />
                      </div>
                      <p className="doller_pg">
                        Dolor mattis quisque curabitur lacus, pharetra sem leo.
                        Elementum fames vel erat volutpat varius placerat
                        libero. Consectetur quis quisque nulla lectus quis.
                      </p>
                      <h3 className="fs_xl fs_sm_20 fw_regular ff_raleway color_primary line_height30">
                        Esther Howard
                      </h3>
                      <h6 className="fs_xxs fs_sm_10 fw_regular ff_arial color_linear line_height_15  ">
                        UI - Designer
                      </h6>

                      <div className="position_comma2">
                        <img src={comma2} alt="comma" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-11 col-lg-6 text-center text-lg-start mb-sm-4 mb-2 mb-lg-0"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <h3 className="fs_xl fw_bold ff_arial color_linear">
                Testimonials
              </h3>
              <h2 className="fs_xxl  fw_medium ff_raleway color_primary line_height52 line_sm_height30">
                What People Are Saying About the Learn and Learn
              </h2>
              <p className="para">
                We live for the love letters saying our students are now
                financially free, are able to buy a house, or simply are set for
                the future thanks to what they’ve learned on this amazing
                platform. We are truly honored to have helped so many understand
                FOREX!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
