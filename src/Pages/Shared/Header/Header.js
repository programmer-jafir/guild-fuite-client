import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {/* <img src={logo} height={30} alt="" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home">Home</Nav.Link>
              <Nav.Link as={Link} to="items">Items</Nav.Link>
              <Nav.Link href="home#about">About</Nav.Link>
              <Nav.Link href="home#contact">Contact us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="blog">Blog</Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;