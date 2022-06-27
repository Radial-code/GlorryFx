import "./App.css";
import "./index.css";
import { Route, Switch } from "react-router-dom";

import Main from "./view/Main";
import TermsCondition from "./view/TermsCondition";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/terms-condition" component={TermsCondition} />
      </Switch>
      <BackToTop />
    </>
  );
}

export default App;
