import "../css/MainDiagnostico.css"
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Accordion from "react-bootstrap/Accordion"
import CueroCabelludoSeco from "../assets/CueroCabelludoSeco.jpg"
import CueroCabelludoNormal from "../assets/CueroCabelludoNormal.png"
import CueroCabelludoGraso from "../assets/CueroCabelludoGraso.jpg"
import Seborrea from "../assets/seborrea.jpg"
import Deshidratado from "../assets/Deshidratado.jpg"
import PitiasisEsteroidea from "../assets/pitiasisesteroidea.png"
import PitiasisSimple from "../assets/PitiasisSimple.jpg"
import Efluvios from "../assets/Efluvios.png"
import Estres from "../assets/Estres.png"
import Alopecia from "../assets/Alopecia.png"
import Dermatitis from "../assets/Dermatitis.png"

const MainDiagnostico = () => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [secondStepCard, setSecondStepCard] = useState(null)
    const [optionalCards, setOptionalCards] = useState([])
    const [showError, setShowError] = useState(false)
    const [recommendation, setRecommendation] = useState("")

    const secondStepOption = {
        0: [0, 1],
        1: [0, 1],
        2: [2, 3]
    }

    const handleFirstSelection = (cardIndex) => {
        setSelectedCard(cardIndex)
        setSecondStepCard(null)
        setShowError(false)
        setRecommendation("")
    }

    const handleSecondSelection = (cardIndex) => {
        setSecondStepCard(cardIndex)
        setShowError(false)
        setRecommendation("")
    }

    const handleOptionalSelection = (cardIndex) => {
        if (optionalCards.includes(cardIndex)) {
            setOptionalCards(optionalCards.filter(index => index !== cardIndex))
        } else {
            setOptionalCards([...optionalCards, cardIndex])
        }
    }

    const generateRecommendation = () => {
        let rec = [

        ]
        if (selectedCard === 0) {
            rec.push (
                <div>
                    Se recomienda: <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/cabello-rizado.html" target="_blank">Línea CURLS</a>, 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/restauracion-del-cabello.html" target="_blank">OMNI RESTORE</a>, 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/hidratacion-del-cabello.html" target="_blank">MOISTURE</a>, 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/enriquecidos-con-aceites.html" target="_blank">NOURISHING OIL</a>, 
                    HIGIENE DIARIA.
                    
                </div>
                )
        }
        if (selectedCard === 1) {
                rec.push (
                    <div>
                    Se recomienda: <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/cabello-rizado.html" target="_blank">Línea CURLS</a>, 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/restauracion-del-cabello.html" target="_blank">OMNI RESTORE</a>, 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/hidratacion-del-cabello.html" target="_blank">MOISTURE</a>, 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/enriquecidos-con-aceites.html" target="_blank">NOURISHING OIL</a>, 
                    HIGIENE DIARIA.
                    
                </div>

                )
        }
        if (selectedCard === 2) {
                rec.push (
                    <div>    
                        Se recomienda: Limpieza, 
                        <a className="links" href="https://www.tecitaly.com/es/coloracion/uso-en-salon/shampoo-profondo.html" target="_blank">Shampoo PROFONDO</a>,
                        <a className="links" href="https://www.tecitaly.com/es/cuidado-del-cabello/cabello-saludable/tonico-shampoo.html" target="_blank">Shampoo TONICO</a>, 
                        <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/cuidado-del-color.html" target="_blank">LÍNEA COLOR CARE.</a>
                    </div>
                )
        }

        if (optionalCards.length > 0) {
            rec.push (" También considera los siguientes tratamientos opcionales: ")
            if (optionalCards.includes(0)) rec.push ("Utilizar productos suaves y evitar tratamientos agresivos. ")
            if (optionalCards.includes(1)) rec.push ("Masajes regulares y uso de productos que fortalezcan el cabello. ")
            if (optionalCards.includes(2)) rec.push ("Sugerir consulta médica (análisis clínicos). Favorecer la revitalización biológica capilar. ")
            if (optionalCards.includes(3)) rec.push ("Derivar a dermatólogo.")
        }
        setRecommendation(rec)
    }

    const handleFinish = () => {
        if (selectedCard === null || secondStepCard === null) {
            setShowError(true)
            return
        }
        setShowError(false)
        generateRecommendation()
    }

    return (
        <div className="DiagCap">
            <div>
                <h1 className="TITULO">Diagnóstico Capilar</h1>
            </div>

            <div className="Cards1">
                <Card className="opciones">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="Titulos">Seco</Accordion.Header>
                            <Accordion.Body>
                                * Falta de hidratación y aceites naturales. <br />
                                * Sensación de tirantez o picazón. <br />
                                * Descamación o aparición de pequeñas escamas blancas (a menudo confundidas con caspa). <br />
                                * Aspecto apagado y áspero. <br />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Card.Img
                        variant="top"
                        src={CueroCabelludoSeco}
                        className={`Img ${selectedCard === 0 ? "selected" : ""}`}
                        onClick={() => handleFirstSelection(0)}
                    />
                </Card>

                <Card className="opciones">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="Titulos">Normal</Accordion.Header>
                            <Accordion.Body>
                                * Equilibrio adecuado de humedad y sebo. <br />
                                * Aspecto saludable y libre de sequedad o exceso de grasa. <br />
                                * Generalmente no presenta picazón, irritación o descamación. <br />
                                * Cabello con brillo natural y sensación de frescura. <br />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Card.Img
                        variant="top"
                        src={CueroCabelludoNormal}
                        className={`Img ${selectedCard === 1 ? "selected" : ""}`}
                        onClick={() => handleFirstSelection(1)}
                    />
                </Card>

                <Card className="opciones">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="Titulos">Graso</Accordion.Header>
                            <Accordion.Body>
                                * Producción excesiva de sebo. <br />
                                * Sensación de pesadez, cuero cabelludo aceitoso al tacto. <br />
                                * Apariencia brillante en el cabello y tendencia a engrasarse rápidamente. <br />
                                * Propenso a la acumulación de residuos y a la caspa grasa. <br />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Card.Img
                        variant="top"
                        src={CueroCabelludoGraso}
                        className={`Img ${selectedCard === 2 ? "selected" : ""}`}
                        onClick={() => handleFirstSelection(2)}
                    />
                </Card>
            </div>

            {selectedCard !== null && (
                <div className="Card2">
                    <h3 className="Subtitulo">Segundas <br /> opciones</h3>
                    {secondStepOption[selectedCard].includes(3) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Seborrea</Accordion.Header>
                                    <Accordion.Body>
                                        * Exceso de producción de sebo, lo que genera un cuero cabelludo graso. <br />
                                        * Apariencia brillante y aceitosa del cuero cabelludo y cabello. <br />
                                        * Puede generar picazón e irritación. <br />
                                        * Predisposición a la caspa grasa o dermatitis seborreica. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={Seborrea}
                                className={`Img ${secondStepCard === 3 ? "selected" : ""}`}
                                onClick={() => handleSecondSelection(3)}
                            />
                        </Card>
                    )}

                    {secondStepOption[selectedCard].includes(0) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Deshidratado</Accordion.Header>
                                    <Accordion.Body>
                                        * Falta de hidratación, pero no necesariamente de grasa. <br />
                                        * Sensación de sequedad, tirantez y picazón. <br />
                                        * El cabello puede verse apagado y quebradizo. <br />
                                        * Puede haber enrojecimiento o irritación. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={Deshidratado}
                                className={`Img ${secondStepCard === 0 ? "selected" : ""}`}
                                onClick={() => handleSecondSelection(0)}
                            />
                        </Card>
                    )}

                    {secondStepOption[selectedCard].includes(1) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Pitiasis Simple</Accordion.Header>
                                    <Accordion.Body>
                                        * Descamación fina y seca del cuero cabelludo. <br />
                                        * Pequeñas escamas blancas que caen fácilmente sobre los hombros. <br />
                                        * Generalmente no hay inflamación ni enrojecimiento. <br />
                                        * Puede acompañarse de picazón leve. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={PitiasisSimple}
                                className={`Img ${secondStepCard === 1 ? "selected" : ""}`}
                                onClick={() => handleSecondSelection(1)}
                            />
                        </Card>
                    )}

                    {secondStepOption[selectedCard].includes(2) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Pitiasis Esteroidea</Accordion.Header>
                                    <Accordion.Body>
                                        * Descamación severa y en parches en el cuero cabelludo. <br />
                                        * Escamas más grandes y gruesas que las de la pitiasis simple. <br />
                                        * Puede acompañarse de enrojecimiento e inflamación. <br />
                                        * En casos severos, puede haber pérdida de cabello. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={PitiasisEsteroidea}
                                className={`Img ${secondStepCard === 2 ? "selected" : ""}`}
                                onClick={() => handleSecondSelection(2)}
                            />
                        </Card>
                    )}
                </div>
            )}

            {secondStepCard !== null && (
                <div className="Opcional">
                    <h3 className="Subtitulo">Seleccion <br /> Opcional</h3>
                    <Card className="opciones">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="Titulos">Efluvio</Accordion.Header>
                                <Accordion.Body>
                                    * Pérdida temporal de cabello debido a estrés o condiciones internas. <br />
                                    * Aumento de la caída del cabello que puede ser notorio durante el baño o el cepillado. <br />
                                    * Generalmente, se resuelve con la eliminación del factor desencadenante. <br />
                                    * Puede requerir tratamiento adicional para fortalecer el cabello. <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Card.Img
                            variant="top"
                            src={Efluvios}
                            className={`Img ${optionalCards.includes(0) ? "selected" : ""}`}
                            onClick={() => handleOptionalSelection(0)}
                        />
                    </Card>

                    <Card className="opciones">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="Titulos">Estres</Accordion.Header>
                                <Accordion.Body>
                                    * Impacto negativo del estrés en la salud capilar. <br />
                                    * Puede contribuir a la pérdida de cabello o al debilitamiento del mismo. <br />
                                    * Se recomienda manejo del estrés y técnicas de relajación. <br />
                                    * Tratamientos específicos pueden ser necesarios para controlar el impacto del estrés en el cabello. <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Card.Img
                            variant="top"
                            src={Estres}
                            className={`Img ${optionalCards.includes(1) ? "selected" : ""}`}
                            onClick={() => handleOptionalSelection(1)}
                        />
                    </Card>

                    <Card className="opciones">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="Titulos">Alopecia</Accordion.Header>
                                <Accordion.Body>
                                    * Pérdida de cabello que puede ser localizada o difusa. <br />
                                    * Puede ser causada por diversos factores, incluidos genéticos, hormonales o autoinmunes. <br />
                                    * Requiere diagnóstico y tratamiento especializado. <br />
                                    * Evaluación médica recomendada para determinar la causa y el tratamiento adecuado. <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Card.Img
                            variant="top"
                            src={Alopecia}
                            className={`Img ${optionalCards.includes(2) ? "selected" : ""}`}
                            onClick={() => handleOptionalSelection(2)}
                        />
                    </Card>

                    <Card className="opciones">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="Titulos">Dermatitis</Accordion.Header>
                                <Accordion.Body>
                                    * Inflamación crónica del cuero cabelludo. <br />
                                    * Puede presentar enrojecimiento, picazón y descamación. <br />
                                    * Generalmente requiere tratamiento dermatológico. <br />
                                    * Evitar el uso de productos irritantes y mantener el cuero cabelludo limpio. <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Card.Img
                            variant="top"
                            src={Dermatitis}
                            className={`Img ${optionalCards.includes(3) ? "selected" : ""}`}
                            onClick={() => handleOptionalSelection(3)}
                        />
                    </Card>
                </div>
            )}

            <button className="btn" onClick={handleFinish}>Finalizar</button>
            {showError && <p className="error">Debe seleccionar una opción de cada paso.</p>}
            {recommendation.length > 0 &&(
                <div className="Recommendation">
                    <h3>Recomendaciones:</h3>
                    <ul>
                        {recommendation.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
        </div>
        )}
    </div>
    )
}

export default MainDiagnostico