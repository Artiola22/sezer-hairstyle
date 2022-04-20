import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
        Sezer HairStyle Salon
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">OUR TEAM</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              OUR STORY
            </NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="#pricing">WEDDINGS</Nav.Link>
          <NavDropdown title="OUR PRODUCTS" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">OUR PRODUCTS</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              EXTENSIONS
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HAIR COLOUR</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              PRODUCTS
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">FIND OUR LOCATION</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            CONTACT FORMS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header