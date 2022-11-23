import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={require("../assets/images/TrollFace.png")}
            alt=""
            className="me-2"
          />
          Meme Generator
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
