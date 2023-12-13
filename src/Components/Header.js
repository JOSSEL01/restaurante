// components/Header.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt='logo' width={80}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#/promociones">Promociones</Nav.Link>
            <Nav.Link href="#/menuPage">Menu</Nav.Link>
            <Nav.Link href="#/tradicionales">Platos Tradicionales</Nav.Link>
            <Nav.Link href="#/extranjeros">Platos Extranjeros</Nav.Link>
            <Nav.Link href="#/videos">Videos</Nav.Link>
            <Nav.Link href="#/registro">Registro</Nav.Link>
            <Nav.Link href="#/pedidos">Pedidos</Nav.Link>
            <Nav.Link href="#/perfil">Perfil</Nav.Link>
            <Nav.Link href="#/contactos">Contactos</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
