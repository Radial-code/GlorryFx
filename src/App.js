import "./App.css";
import "./index.css";
import { Route, Switch } from "react-router-dom";

import Main from "./view/Main";
import TermsCondition from "./view/TermsCondition";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/terms-condition" exact component={TermsCondition} />
    </Switch>
  );
}

export default App;
