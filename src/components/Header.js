import React from 'react'
import { Navbar,Nav, Container } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar className="header"  variant="dark">
            <Container>
                <Navbar.Brand  href="#home"><h2>KAR<span>MA</span></h2></Navbar.Brand>
                <div>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#aboutus">ABOUT US</Nav.Link>
                    <Nav.Link href="#services">SERVICES</Nav.Link>
                    <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                    <Nav.Link href="#blog">BLOG</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
        </div>
    )
}

export default Header
