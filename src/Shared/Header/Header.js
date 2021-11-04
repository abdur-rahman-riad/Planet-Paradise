import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();
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

                    {user?.email ?
                        <NavDropdown className="fw-bold" title="Features" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/myBooking">My Bookings</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/manageBooking">Manage All Bookings</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addPackage">Add Tour Package</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        :
                        <Nav.Link as={Link} className="fw-bold text-primary" to="/login">Login</Nav.Link>
                    }

                    <Navbar.Text className="text-secondary">
                        {user?.displayName}
                    </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;