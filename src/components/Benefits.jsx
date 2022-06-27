import React from "react";
import benefitsimg1 from "../assets/img/Webp/benefits-img-1.webp";
import benefitsimg2 from "../assets/img/Webp/benefits-img-2.webp";
import benefitsimg3 from "../assets/img/Webp/benefits-img-3.webp";
import benefitsimg4 from "../assets/img/Webp/benefits-img-4.webp";
import benefitsimg5 from "../assets/img/Webp/benefits-img-5.webp";
import benefitsimg6 from "../assets/img/Webp/benefits-img-6.webp";

const Benefits = () => {
  return (
    <>
      {/*---------------------------------- BENEFITS-SECTION --------------------------------------*/}
      <section className="bg_benefits p_relative py-4 py-md-5 py-xxl-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="sub_heading text-center pt-4 pb-sm-5 pb-3 ">
                Benefits of Joining
              </h2>
            </div>
          </div>
          <div className="row justify-content-center justify-content-lg-start">
            <div
              className="col-11 col-md-6 col-lg-4 py-3 py-lg-0"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="benefits_card">
                <div>
                  <img src={benefitsimg1} alt="benefits-img-1" />
                </div>
                <h3 className="fs_xl fw_semibold ff_raleway color_primary py-2 line_height26 line_sm_height19">
                  Dedicated Experience
                </h3>
                <p className="para line_sm_height18">
                  Borrow the experience of reliable, educated mentors for your
                  own. We are willing AND EXCITED to guide you through the
                  market and help you become a sharp, quick, and effective
                  investor! Most of these mentorships will be direct with the
                  owner of the company! He will show you everything that he
                  learned to achieve financial success in this industry.
                </p>
              </div>
            </div>

            <div className="col-11 col-md-6 col-lg-4 py-3 py-lg-0">
              <div
                className="benefits_card"
                data-aos="zoom-in-down"
                data-aos-duration="1500"
              >
                <div>
                  <img src={benefitsimg2} alt="benefits-img-2" />
                </div>
                <h3 className="fs_xl fw_semibold ff_raleway color_primary py-2  line_height26 line_sm_height19">
                  Weekly Chart Analysis
                </h3>
                <p className="para line_sm_height18">
                  Get DETAILED analysis with every trade. We go into A LOT of
                  information explaining the reasoning behind why we think x,y,
                  or z is a profitable trade. Our goal is to help you start to
                  understand the patterns and rationale behind choosing an
                  investment. It is the single most important bridge from going
                  from impulse/trend buying to becoming a seasoned and
                  profitable trader.
                </p>
              </div>
            </div>

            <div
              className="col-11 col-md-6 col-lg-4 py-3 py-lg-0"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="benefits_card">
                <div>
                  <img src={benefitsimg3} alt="benefits-img-3" />
                </div>
                <h3 className="fs_xl fw_semibold ff_raleway color_primary py-2  line_height26 line_sm_height19">
                  Get Immediate Access
                </h3>
                <p className="para line_sm_height18">
                  Can’t wait till our next Learn and Earn session? Cool! Jump
                  right in and start learning. Get access to all the recorded
                  webinars, community group boards, customer support, and
                  available chart analysis. There is a TON of quality
                  information that can help you become a better, more engaged
                  FOREX trader RIGHT AWAY!
                </p>
              </div>
            </div>

            <div className="col-11 col-md-6 col-lg-4 py-3 py-lg-4">
              <div
                className="benefits_card"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div>
                  <img src={benefitsimg6} alt="benefits-img-6" />
                </div>
                <h3 className="fs_xl fw_semibold ff_raleway color_primary py-2  line_height26 line_sm_height19">
                  Recorded Webinars
                </h3>
                <p className="para line_sm_height18">
                  When you join, you’ll be able to attend regular webinars where
                  we deep dive into a variety of concepts, but we will also have
                  recorded webinars you can refer back to. The point of these is
                  to help you become a more instinctual, well-educated investor.
                  Eventually, you will find that you are able to identify and
                  take advantage of opportunities “in the wild” and these
                  recorded webinars are an important step in that process.
                </p>
              </div>
            </div>

            <div className="col-11 col-md-6 col-lg-4 py-3 py-lg-4">
              <div
                className="benefits_card"
                data-aos="zoom-in-down"
                data-aos-duration="1500"
              >
                <div>
                  <img src={benefitsimg5} alt="benefits-img-5" />
                </div>
                <h3 className="fs_xl fw_semibold ff_raleway color_primary py-2  line_height26 line_sm_height19">
                  Community
                </h3>
                <p className="para line_sm_height18">
                  Leverage the mindset of an entire community of like-minded
                  learners. We have all different levels of experience here.
                  Interact, learn from, and grow with a massive group of people,
                  most of which have the same goals as you.
                </p>
              </div>
            </div>

            <div className="col-11 col-md-6 col-lg-4 py-3 py-lg-4">
              <div
                className="benefits_card"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div>
                  <img src={benefitsimg4} alt="benefits-img-4" />
                </div>
                <h3 className="fs_xl fw_semibold ff_raleway color_primary py-2  line_height26 line_sm_height19">
                  Customer Support
                </h3>
                <p className="para line_sm_height18">
                  Have a question? Send us an email! We are here 7 days a week
                  [change if needed] ready to jump on any question you may have.
                  Trying to understand a particularly difficult subject matter?
                  No problem! Having technical difficulties? We’ll get it
                  sorted!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
