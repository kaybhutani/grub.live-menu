import React from 'react'

import './assets/scss/index.scss'


import Navigation from './components/Navigation'
import PreviewMenu from './components/PreviewMenu'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createBrowserHistory } from "history";

let history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Navigation />

      <Router history={history}>
        <Switch>
          <Route path='/:menuId'>
            <PreviewMenu />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
