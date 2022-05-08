import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../img/logo-2.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }
    return (
        <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height={50} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home">Home</Nav.Link>
              <Nav.Link href="home#aboutus">About Us</Nav.Link>
              <Nav.Link href="home#AskQuestion">Ask Question</Nav.Link>
              <Nav.Link as={Link} to="blog">Blog</Nav.Link>
            </Nav>
            <Nav>
              {
                user ?
                <>
                <Nav.Link as={Link} to="manage-inventories">Manage Inventories</Nav.Link>
                <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                <Nav.Link as={Link} to="my-items">My items</Nav.Link>
                <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none'>Logout</button>
                </>
                :
                <Nav.Link as={Link} to="login">Login</Nav.Link>
              }
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;