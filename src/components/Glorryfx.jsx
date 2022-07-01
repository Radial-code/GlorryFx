import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import blueshade from "../assets/img/Webp/ta-blueshade.webp";

const Glorryfx = () => {
  return (
    <>
      <Hero />
      <section className="position-relative">
        <div className="position-absolute start-0 top-0">
          <img className="w-100" src={blueshade} alt="blueshade" />
        </div>
        <div className="container">
          <div className="row justify-content-center my-xxl-5 py-5">
            <div className="col-10">
              <div className="Telegram_Access_bg">
                <div className="text-center px-5 mx-4 pb-5">
                  <h3 className="sub_heading pt-5 pb-4 mb-1">
                    GlorryFX (Telegram Access)
                  </h3>
                  <p className="fs_md fw_regular ff_arial color_primary line_height30">
                    After successful payment, the user is able to gain immediate
                    access via Telegram by clicking <a href="#">here</a>.
                    *telegram account is required*
                  </p>
                  <p className="fs_md fw_regular ff_arial color_primary line_height30 pt-4">
                    Upon reaching the bot- user should hit or type “/start”.
                  </p>
                  <p className="fs_md fw_regular ff_arial color_primary line_height30 pt-3">
                    → Plans
                  </p>
                  <p className="fs_md fw_regular ff_arial color_primary line_height30">
                    → “ I already have a plan”
                  </p>
                  <p className="fs_md fw_regular ff_arial color_primary line_height30">
                    → Insert the Email Used to Purchase!
                  </p>
                  <h5 className="Enjoy_ACCESS_heading pt-5">ENJOY ACCESS</h5>
                  <p className="fs_md fw_regular ff_arial color_primary line_height30 pt-4  pt-xxl-5 mt-xxl-4">
                    For any reason should these steps not work for you please
                    contact support immediately at{" "}
                    <a href="#">contact@glorryfx.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Glorryfx;
