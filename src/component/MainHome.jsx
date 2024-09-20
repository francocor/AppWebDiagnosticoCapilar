import "../css/MainHome.css";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CSeco from "../assets/seco.jpg";
import CNormal from "../assets/normal.jpg";
import CGraso from "../assets/graso.jpg";
import CPitiasisEsteroidea from "../assets/pitiasisesteroidea.png"
import CPitiasisSimple from "../assets/pitiasissimple.png"
import CSeborrea from "../assets/seborrea.jpg"
import CDeshidratacion from "../assets/deshidratacion.png"
import TipoDeH from "../assets/TipoDeH.png"
import Teñido from "../assets/teñido.jpg"
import Decolorado from "../assets/decolorado.jpg"
import Alisado from "../assets/alisado.jpg"
import Permanente from "../assets/permanente.jpg"

const MainHome = () => {
  return (
    <div className="Home">

    <div className="carousel-container">
      <Carousel  className="carousel" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CSeco}
            alt="First slide"
            />
          <Carousel.Caption>
            <h5 className="Texto">Seco</h5>
            <p className="Texto"> Se caracteriza por una falta de hidratación y aceite, 
                lo que puede causar sequedad, picazón y descamación. Puede sentirse áspero y tirante.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CNormal}
            alt="Second slide"
            />
          <Carousel.Caption>
            <h5 className="Texto">Normal</h5>
            <p className="Texto"> Tiene un equilibrio saludable entre aceite y humedad. 
                No presenta excesiva sequedad ni grasa, y se siente cómodo y equilibrado.
            </p>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CGraso}
            alt="Third slide"
            />
          <Carousel.Caption>
            <h5 className="Texto">Graso</h5>
            <p className="Texto">
            Produce un exceso de sebo, lo que da un aspecto brillante y puede sentirse pesado y pegajoso.
             Puede presentar un exceso de grasa y un cabello que se ensucia rápidamente.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>

    <div className="CardsHome">

  <Card className="custom-card">
    <Card.Img variant="top" src={CPitiasisEsteroidea} />
    <Card.Body>
      <Card.Title>Pitiasis Esteroidea</Card.Title>
      <Card.Text>
        Las escamas son más espesas, oleosas, amarillentas y pegajosas, 
        suelen adherirse al cuero cabelludo y al cabello.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="custom-card">
    <Card.Img variant="top" src={CPitiasisSimple} />
    <Card.Body>
      <Card.Title>Pitiasis Simple</Card.Title>
      <Card.Text>
        Se manifiesta con una descamación de escamas blanquecinas, secas y finas,
        que se desprenden fácilmente y suelen formar capas solapadas.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="custom-card">
    <Card.Img variant="top" src={CSeborrea} />
    <Card.Body>
      <Card.Title>Seborrea</Card.Title>
      <Card.Text>
        Es un trastorno cuantitativo y cualitativo de la producción de sebo,
        causando espesamiento y obstrucción en la salida.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="custom-card">
    <Card.Img variant="top" src={CDeshidratacion} />
    <Card.Body>
      <Card.Title>Deshidratación</Card.Title>
      <Card.Text>
        La deshidratación ocurre cuando falta agua, causando sequedad y fragilidad en el cabello.
      </Card.Text>
    </Card.Body>
  </Card>

</div>

    <div className="THebraCapilar">
        <Card className="TipoDeH">
            <Card.Img variant="top" src={TipoDeH} />
        </Card>
    </div>
    

    <div className="carousel-container">
      <Carousel  className="carousel" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Teñido}
            alt="First slide"
            />
          <Carousel.Caption>
            <h5 className="Texto">Teñido</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Decolorado}
            alt="Second slide"
            />
          <Carousel.Caption>
            <h5 className="Texto">Decolorado</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Alisado}
            alt="Third slide"
            />
          <Carousel.Caption>
            <h5 className="Texto">Alisado</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Permanente}
            alt="Third slide"
            />
          <Carousel.Caption>
            <h5 className="Texto">Permanente</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>

    </div>
  );
}

export default MainHome;   Permanente