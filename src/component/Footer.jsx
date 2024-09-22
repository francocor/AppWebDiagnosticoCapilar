import "../css/MainFooter.css"
import TecItali from "../assets/tecitali.jpg"

const Footer = () => {
  return (
    <div>
        <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-copy">
          <img src={TecItali} alt="Logo" className="footer-logo" />
          <p>&copy; 2024 Tec Italy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer