import React from 'react'

import './assets/scss/index.scss'


import Navigation from './components/Navigation'
import PreviewMenu from './components/PreviewMenu'
import Footer from './components/Footer'
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom"


function App() {

  return (
    <div className="App">
      <Navigation />

      <HashRouter>
        <Switch>
          <Route path='/:menuId'>
            <PreviewMenu />
          </Route>
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
