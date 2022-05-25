import logo from './logo.svg';
import './App.css';

import React from "react"
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/css/now-ui-kit.css"
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import 'leaflet/dist/leaflet.css'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Index from './views/Index'
import {AboutPage} from './views/index-sections/About'

function App() {
  return (
  
    <Router>
      <Switch>
        <Route exact
          path="/"
          
          component={Index}>

        </Route>

        <Route
          path="/about"
          component={AboutPage}
        ></Route>
      </Switch>
    </Router>
          
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
