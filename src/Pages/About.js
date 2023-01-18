import React from "react";
import Footer from "../footer";
import Avbar from "../navbar/Navbar";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'
import '../ss.css'
function About() {
  
  return (
    
    <>
      <Avbar/>
      <h1 className="text-center">
       You are at perfecrt place <h2>I'm Avit, A programer ,<br /> Tech Enthusiast <br /> Passionate Engineer</h2>
       <p>Wants To Connect..</p>              
       <Nav.Link><Link to='/Contact' className="nav-link"><button className="btn btn-danger">Let's Connect</button></Link></Nav.Link>

       
       </h1><Footer />
  

    </>
  );
}

export default About;
