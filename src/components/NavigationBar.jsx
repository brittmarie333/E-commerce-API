import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';  // Import components from react-bootstrap

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Plain text (no link) for the brand */}
        <Navbar.Brand className="font-weight-bold text-white">
          E-Commerce Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Align navigation links to the left */}
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/" className="px-3">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/products" className="px-3">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/customerpage" className="px-3">Customers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/orderpage" className="px-3">Orders</Nav.Link>
            </Nav.Item>
          </Nav>
          {/* Align buttons to the right */}
          <Nav>
            <Nav.Item>
              <Button as="a" href="/addorderpage" variant="outline-light" className="mx-2">
                New Order?
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button as="a" href="/addcustomerpage" variant="outline-success">
                New Customer?
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
