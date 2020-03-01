import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp , faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Header from "./compenents/header";
import StartSearch from "./compenents/startSearch";
import ShowAccountInfo from "./compenents/showAccountInfo";
import GetPlayerProfil from "./compenents/getPlayerProfil";
import NoCharacter from './compenents/noCharacterFound';
import Footer from './compenents/footer';
import Medels from './compenents/medels';


library.add(fab, faArrowUp, faArrowDown);

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
        <Route path='/medels' component={Medels}/>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
