import React from "react";
import Header from "../components/Header";
import Financial from "../components/Financial";
import Benefits from "../components/Benefits";
import Choose from "../components/Choose";
import Velittempor from "../components/Velittempor";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Financial />
      <Benefits />
      <Choose />
      <Velittempor />
      <Testimonials />
      <Faqs />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Main;
