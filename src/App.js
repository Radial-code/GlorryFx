import "./App.css";
import "./index.css";
import { Route, Switch } from "react-router-dom";

import Main from "./view/Main";
import TermsCondition from "./view/TermsCondition";

function App() {
  return (
    <div>
      {" "}
      <Switch>
        {" "}
        <Route exact path="/" component={Main} />
        <Route exact path="/terms-condition" component={TermsCondition} />
      </Switch>
    </div>
  );
}

export default App;
