import linesimage from "../assets/img/Webp/lines-image.webp";

const Velittempor = () => {
  return (
    <div>
      <section className="imdiate-section-bg-img position-relative d-none d-md-block">
        <div className="lines_image d-none d-md-block">
          <img className="w-100" src={linesimage} alt="lines-image" />
        </div>
        <div className="container z_index5 position-relative">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-6 ">
              <h1 className="fs_xxl ff_raleway fw_medium line_height61 line_sm_rg mb-0  color_primary">
                Immediate Updates
              </h1>
              <p className="para">
                No matter where you're are, we'll always update you in a timely
                manner. Never miss an update by turning on your notifications.
                Completely elevate your trading career NOW!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="imdiate_section_sm_bg_img d-md-none">
        <div className="container">
          <div className="row py-3">
            <div className="col-12">
              <h1 className="fs_xxl ff_raleway fw_medium line_height61 line_sm_rg  color_primary">
                Immediate Updates
              </h1>
              <p className="para ln_xs_20">
                No matter where you're are, we'll always update you in a timely
                manner. Never miss an update by turning on your notifications.
                Completely elevate your trading career NOW!
              </p>
            </div>
          </div>
        </div>
        <div className="phone-bg-small"></div>
      </section>
    </div>
  );
};

export default Velittempor;
