import "../css/MainHeader.css"
import { Navbar, Nav } from "react-bootstrap";
import LogoApp from "../assets/LogoApp.png"

const Header = () => {
  return (
    <div className="Header">

    <div>
        <div className="logo-container">
        <img
          src={LogoApp} 
          alt="Diagnóstico Capilar Logo"
          className="logo"
          />
      </div>

      
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto menu-options">
            <Nav.Link href="#diagnostico-capilar" className="nav-link-item">
              Diagnóstico Capilar
            </Nav.Link>
            <Nav.Link href="#hebra-capilar" className="nav-link-item">
              Hebra Capilar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </div>
  )
}

export default Header