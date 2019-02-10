import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
        <div>
          <Navbar className="nav" variant="light" style={{ backgroundColor: "#FB9985" }}>
            <Link className="link" to="/">
                intersectionalisee
            </Link>
            <Nav className="mr-auto">
                <Link className="link" to="/sexualassault">
                    sexual assault
                </Link>
                <Link className="link" to="/poverty">
                        poverty
                </Link>
                 <Link className="link" to="/unemployment">
                        unemployment
                </Link>
                <Link className="link" to="/incarceration">
                        incarceration
                </Link>
            </Nav>
          </Navbar>
        </div>
    );
  }
}

export default withRouter(NavBar);