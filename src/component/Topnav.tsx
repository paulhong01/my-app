import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

export const Topnav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Topnav;
