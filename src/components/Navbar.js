import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

const Navheader = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand style={{ color: "#218838" }} href="/">
        Hara
      </Navbar.Brand>
      <Navbar.Brand style={{ color: "#218838" }} href="/users">
        Users
      </Navbar.Brand>
      <Navbar.Brand style={{ color: "#218838" }} href="/lessons">
        Lessons
      </Navbar.Brand>
      <Navbar.Brand style={{ color: "#218838" }} href="/challenges">
        Challenges
      </Navbar.Brand>
      {/* {/* <Nav.Link href="/users" className="ml-auto"> */}
      <Nav.Link href="/lessons" className="ml-auto">
      </Nav.Link>
      <Nav.Link href="/challenges" className="ml-auto"> */}
      </Nav.Link>
     
    </Navbar>
  );
};


export default connect()(Navheader);