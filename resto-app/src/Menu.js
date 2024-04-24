import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <div>
      <Navbar data-bs-theme="light">
        <Container className="bg-warning rounded-3 p-3">
          <Navbar.Brand href="/" className="h2 fw-bold ">
            EPIC FLAVOUR
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/" className="fw-bold px-md-4">
              Home
            </Nav.Link>
            <Nav.Link href="#services" className="fw-bold px-md-4">
              Services
            </Nav.Link>
            <Nav.Link href="#contact" className="fw-bold px-md-4">
              Contact
            </Nav.Link>
            <Nav.Link href="/login" className="fw-bold px-md-4">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
