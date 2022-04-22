import React, { useEffect, useRef, useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'
function Header() {
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top' style={{ transition: '1s ease', backgroundColor: navBackground ? 'gray' : 'transparent' }}>
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
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto " >
            <NavDropdown title="ABOUT US" className='list-item' id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">OUR TEAM</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                OUR STORY
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" className='list-item'>WEDDINGS</Nav.Link>
            <NavDropdown title="OUR PRODUCTS" id="collasible-nav-dropdown" className='list-item'>
              <NavDropdown.Item href="#action/3.1">OUR PRODUCTS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                EXTENSIONS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HAIR COLOUR</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                PRODUCTS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                TRANFORMATION
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='list-item'>FIND OUR LOCATION</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='list-item'>
              CONTACT FORMS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header