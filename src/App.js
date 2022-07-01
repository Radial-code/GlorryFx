import "./App.css";
import { useEffect } from "react";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./view/Main";
import TermsCondition from "./view/TermsCondition";
import BackToTop from "./components/BackToTop";
import PrivacyPolicy from "./view/PrivacyPolicy";
import RefundPolicy from "./view/RefundPolicy";
import Telegram from "./view/Telegram";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/terms-condition" component={TermsCondition} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/refund-policy" component={RefundPolicy} />
        <Route exact path="/payment" component={Telegram} />
      </Switch>
      <BackToTop />
    </>
  );
}

export default App;
