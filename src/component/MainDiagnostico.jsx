import "../css/MainDiagnostico.css"
import Card from 'react-bootstrap/Card';
import CueroCabelludoSeco from "../assets/CueroCabelludoSeco.jpg"
import CueroCabelludoNormal from "../assets/CueroCabelludoNormal.png"
import CueroCabelludoGraso from "../assets/CueroCabelludoGraso.jpg"



const MainDiagnostico = () => {
  return (
    <div>
        <div>

            <h1 className="TITULO">Diagnóstico Capilar</h1> 
            <h3 className="TITULO">seleccione las opciones que vea correctas</h3>

        </div>

        <div className="Cards1">

        <Card className="opciones">
            <h1 className="Titulos">SECO</h1>
            <Card.Img variant="top" src={CueroCabelludoSeco} />
        </Card>

        <Card className="opciones">
            <h1 className="Titulos">NORMAL</h1>
            <Card.Img variant="top" src={CueroCabelludoNormal} />
        </Card>

        <Card className="opciones">
            <h1 className="Titulos">GRASO</h1>
            <Card.Img variant="top" src={CueroCabelludoGraso} />
        </Card>

        </div>
    </div>
  )
}

export default MainDiagnostico