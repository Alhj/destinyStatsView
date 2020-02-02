import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./compenents/header";
import StartSearch from "./compenents/startSearch";
import ShowAccountInfo from "./compenents/showAccountInfo";
import GetPlayerProfil from "./compenents/getPlayerProfil";
import NoCharacter from './compenents/noCharacterFound/';

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
        <Route
          path="/getProfil/:membershipType/:displayName"
          component={GetPlayerProfil}
        />
        <Route path='/noCharacter' component={NoCharacter}/>
      </Switch>
    </Router>
  );
};

export default App;
