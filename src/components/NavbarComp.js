import React, {Component} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';

export default class NavbarComp extends Component {
    render() {
        return (
          <Router>
            <div>
                <>
                <Navbar bg="dark" variant="dark">
                  <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to="/home">Home</Nav.Link>
                      <Nav.Link as={Link} to="/features">Features</Nav.Link>
                      <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                    </Nav>
                  </Container>
                </Navbar>
              </>
              <Router>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/features">
            <Features/>
          </Route>
          <Route path="/pricing">
            <Pricing/>
          </Route>
      </Router>
            </div>
            </Router>
        );

    }
    
}