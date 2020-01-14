import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./compenents/header/header";
import StartSearch from "./compenents/startSearch/startSearch";
import ShowAccountInfo from "./compenents/showAccountInfo/showAccountInfo";
import GetPlayerProfil from './compenents/getPlayerProfil/getPlayerProfil';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={StartSearch} />
        <Route
          path="/account/:platformNumber/:accountName/"
          component={ShowAccountInfo}
        />
        <Route path="/getProfil/:membershipType/:displayName" component={GetPlayerProfil} />
      </Switch>
    </Router>
  );
};

export default App;
