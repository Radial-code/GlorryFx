import React from "react";
import faqshadow from "../assets/img/Webp/faq-right-shadow.webp";

const Faqs = () => {
  return (
    <div>
      <section className="bg_faqs py-sm-5 position-relative" id="FAQs">
        <div
          className="position_faq_shadow"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <img src={faqshadow} alt="shadow" className="w-100" />
        </div>
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2
                className="fs_3xl fw_semibold ff_raleway color_primary text-center pb-sm-5 pb-2 line_height61"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              >
                FAQS
              </h2>
              <div
                className="accordion z-100 position-relative "
                id="accordionExample"
              >
                <div
                  className="accordion-item my-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h6 className="fs_sm fw_bold ff_arial color_primary line_height27">
                        Do We Meet in Person?
                      </h6>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="para">
                        No, the entire learning experience is online. We wanted
                        to provide this quality material to everyone and didn’t
                        want to limit it based on location and time
                        restrictions.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item my-3"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h6 className="fs_sm fw_bold ff_arial color_primary line_height27">
                        What if I Don’t Understand Something?
                      </h6>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="para">
                        No, the entire learning experience is online. We wanted
                        to provide this quality material to everyone and didn’t
                        want to limit it based on location and time
                        restrictions.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item my-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <h6 className="fs_sm fw_bold ff_arial color_primary line_height27">
                        What if I need to cancel?
                      </h6>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="para">
                        No, the entire learning experience is online. We wanted
                        to provide this quality material to everyone and didn’t
                        want to limit it based on location and time
                        restrictions.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item my-3"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <h2 className="accordion-header" id="headingfour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapsefour"
                    >
                      <h6 className="fs_sm fw_bold ff_arial color_primary line_height27">
                        How can I get a hold of you?
                      </h6>
                    </button>
                  </h2>
                  <div
                    id="collapsefour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingfour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="para">
                        No, the entire learning experience is online. We wanted
                        to provide this quality material to everyone and didn’t
                        want to limit it based on location and time
                        restrictions.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item my-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <h2 className="accordion-header" id="headingfive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefive"
                      aria-expanded="false"
                      aria-controls="collapsefive"
                    >
                      <h6 className="fs_sm fw_bold ff_arial color_primary line_height27">
                        What results should I expect?
                      </h6>
                    </button>
                  </h2>
                  <div
                    id="collapsefive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingfive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="para">
                        No, the entire learning experience is online. We wanted
                        to provide this quality material to everyone and didn’t
                        want to limit it based on location and time
                        restrictions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
