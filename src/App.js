import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BrowserHelp from "./components/pages/BrowserHelp";
import DyslexiaSimulator from "./components/pages/DyslexiaSimulator";
import Future from "./components/pages/Future";
import Home from "./components/pages/Home";
import PdfMaker from "./components/pages/PdfMaker";
import ScreenReader from "./components/pages/ScreenReader";
import FriendlyFont from "./components/pages/FriendlyFont";
import Books from "./components/pages/Books";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/books' exact component={Books} />
          <Route path='/BrowserHelp' exact component={BrowserHelp} />
          <Route path='/DyslexiaSimulator' exact component={DyslexiaSimulator} />
          <Route path='/FriendlyFont' exact component={FriendlyFont} />
          <Route path='/Future' exact component={Future} />
          <Route path='/PdfMaker' exact component={PdfMaker} />
          <Route path='/ScreenReader' exact component={ScreenReader} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
