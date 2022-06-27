import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Financial from "./components/Financial";
import Benefits from "./components/Benefits";
import Choose from "./components/Choose";
import Velittempor from "./components/Velittempor";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Financial />
      <Benefits />
      <Choose />
      <Velittempor />
      <Testimonials />
      <Faqs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
