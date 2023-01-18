import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'
function Avbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to='/App' className="nav-link">The Avit's Room</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/Python' className="nav-link">My Projects</Link></Nav.Link>
              <Nav.Link><Link to='/Java' className="nav-link">My Resume</Link></Nav.Link>
              
             
              {/* <Nav.Link><Link to='/Jsx' className="nav-link">JS</Link></Nav.Link> */}
              {/* <Nav.Link><Link to='/Eact ' className="nav-link">React</Link></Nav.Link> */}
               
              {/* <Nav.Link >
                  <Link to='/Addon ' className="nav-link">Add on</Link>
              </Nav.Link> */}
              
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <Link to='/Contact' className="nav-link">Contact Me</Link>
              </Nav.Link>
              <Nav.Link eventKey={2} >
                <Link to='/About' className="nav-link">About Me</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Avbar;
