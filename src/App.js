import React from "react";
import "reactjs-popup/dist/index.css";

import "./assets/scss/index.scss";
import "../node_modules/eos-icons/dist/css/eos-icons.css";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import PreviewMenu from "./components/PreviewMenu";
import Footer from "./components/Footer";
import { Switch, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}

      <HashRouter>
        <Switch>
          <Route exact path="/" children={<Home />} />

          <Route exact path="/:menuId">
            <PreviewMenu />
          </Route>
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
