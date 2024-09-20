import "../css/MainHeader.css"
import { Navbar, Nav } from "react-bootstrap";
import TecItali from "../assets/tecitali.jpg"

const Header = () => {
  return (
    <div className="Header">

    <div>
        <div className="logo-container">
        <a href="/">
          <img
            src={TecItali} 
            alt="Diagnóstico Capilar Logo"
            className="logo"
          />
          </a>
      </div>

      
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto menu-options">
            <Nav.Link href="/DiagnosticoCapilar" className="nav-link-item">
              Diagnóstico Capilar
            </Nav.Link>
            <Nav.Link href="/HebraCapilar" className="nav-link-item">
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