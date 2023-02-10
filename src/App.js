import React from "react";
// import Nav from "react-bootstrap/Nav";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
// import { Link } from "react-router-dom";

import Cards from "./Cards react"
// import Cards from "./Cards react";

import Footer from "./footer";
// import Bootstrap from "./Bootstrap";
// import BootstrapNavbar from "./BootstrapNavbar";
// import Style1 from "./CSSMODULES/Style1";
// import Style2 from "./CSSMODULES/Style2";
// import ClassState from "./Hooks/ClassState";
// import {SpinnerInfinity}  from 'spinners-react';
// import UseState from "./Hooks/UseState";
// import USWithArray from "./Hooks/USWithArray";
// import USWithObjects from "./Hooks/USWithObjects";
// import Studdents from "./Listrendering/studdents";
// import Student from "./Listrendering/student";
// import Main from "./conditional rederinng/Main.js";
// import Parent from "./Passing Methods As Props in React/Parent";
// import {App} from "./App";
// import {App2} from "./App";
// import Destructuringprops from "./destructuringprops";
// import {Classdes} from "./destructuringprops";
// import Statedestructuring from "./statedestructuring"
// import App from './evetheadlling'
// import Mountingphase from './mountingphase'
import "./index.css";
// import Reactboostrap from "./Reactboostrap";
// import Avbar from "./navbar/Navbar";
// // import Title from "./Title";
import HomePage from "./Homepage"
import Avbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <Avbar />
      <HomePage />
      <Cards/>
      <Footer />
    </>
  );
}

export default App;
