import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <Navbar sticky="top" className="shadow-sm" variant="light" bg="white" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className="d-flex align-items-center">
                    <img src={logo}
                        width="85"
                        height="70"
                        alt="Site Logo"
                    />
                    <h3 className="fw-bold mt-2 text-success">Planet Paradise</h3>
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} className="fw-bold text-primary" to="/home">Home</Nav.Link>

                    {/* <Nav.Link as={Link} className="fw-bold text-dark" to="/login">Login</Nav.Link> */}

                    <NavDropdown className="fw-bold" title="Features" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/myOrders">My Orders</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/manageOrders">Manage All Orders</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/addOrders">Add Orders</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>

                    <Navbar.Text className="text-secondary">
                        Riad Rahman
                    </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;