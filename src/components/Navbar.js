import React from "react";
import { connect } from "react-redux";

import { Navbar, Nav } from "react-bootstrap";
// import Logout from "../Logout/Logout.component";
import Button from "react-bootstrap/Button";

const NavHeader = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand style={{ color: "#218838" }} href="/">
        Hara
      </Navbar.Brand>
      <Nav.Link href="/users" className="ml-auto">
       
      </Nav.Link>
     
    </Navbar>
  );
};


export default connect()(NavHeader);