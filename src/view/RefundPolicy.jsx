import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import blueshadeimg from "../assets/img/Webp/termscondition-blueshade.webp";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <section className="position-relative pt-5 mt-xl-5 z_index1">
        <div className="position-absolute start-0 top-0 w-25 d-none d-md-block">
          <img className="w-100" src={blueshadeimg} alt="blueshadeimg" />
        </div>
        <div className="container">
          <div className="row justify-content-center z-100 position-relative">
            <div className="col-11 col-md-12">
              <h2 className="terms_heading pb-1 pb-md-3">Refund Policy</h2>
              <p className="terms_para ">
                Our refund policy forms part of our terms and conditions and
                privacy policy and should be read in conjunction with them. We
                reserve the right to change this refund policy at any time. Our
                refund policy does not affect your statutory rights.
              </p>
              <h3 className="text-white">1. REFUNDS</h3>
              <p className="terms_para">
                Due to the nature of our products and services (digital products
                and services) the purchase of our subscriptions is
                non-refundable. Please note that the purchase of all our
                subscriptions is final and non-refundable. Users may cancel
                subscriptions at any time and the subscription will be canceled
                for the next billing period but no refunds will be issued{" "}
                <span className="d-block mt-2">
                  Under no circumstances is GlorryFX LLC by any means liable for
                  forgotten subscriptions. It is the customer's sole
                  responsibility to manage, cancel, or pause subscriptions.
                  Should the customer need assistance with any subscription
                  modifications, GlorryFX LLC can assist with modifications by
                  emailing “contact@glorryfx.com”. Users are required to email
                  48 hours in advance prior to their last day in the billing
                  cycle to ensure timely subscription update processing(s).
                  Although GlorryFX LLC is able to assist with such
                  modifications, the customer understands and acknowledges that
                  modifications of payment methods have been made easily
                  accessible via Telegram Bot & www.glorryfx.com therefore, the
                  user has every sole right and responsibility to cancel before
                  the next billing period. Under no circumstances is GlorryFX
                  LLC by any means liable for forgotten subscriptions.
                </span>
              </p>{" "}
              <h3 className="text-white">2. CONTACT US</h3>
              <p className="terms_para mb-2">
                If you have questions about this refund policy, please contact
                us through our contact page or via the contact information
                below:
                <span className="d-block fw-bold mt-2">GlorryFX LLC.</span>
                <span className="d-block fw-bold mt-2">
                  www.glorryfx.com
                </span>{" "}
                <span className="d-block fw-bold mt-2">
                  (contact@glorryfx.com)
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
