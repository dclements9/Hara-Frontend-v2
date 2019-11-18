import React from "react";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
      <img
        src="./logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="TKD logo"></img>
      </Navbar.Brand>
      <Navbar.Brand style={{ color: "#5299d3" }} href="/"> Hara </Navbar.Brand>
      <Navbar.Brand style={{ color: "#5299d3" }} href="/users"> Users </Navbar.Brand>
      <Navbar.Brand style={{ color: "#5299d3" }} href="/lessons"> Lessons </Navbar.Brand>
      <Navbar.Brand style={{ color: "#5299d3" }} href="/challenges"> Challenges </Navbar.Brand>    
    </Navbar>
  );
};


export default connect()(NavBar);