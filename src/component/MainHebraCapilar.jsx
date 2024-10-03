import { useState } from "react";
import "../css/MainHebraCapilar.css";
import Card from 'react-bootstrap/Card';
import Accordion from "react-bootstrap/Accordion";
import HebraCapilarFina from "../assets/hebrafina.png";
import HebraCapilarMedia from "../assets/hebramedia.png";
import HebraCapilarGruesa from "../assets/hebragruesa.png";
import Rulos from "../assets/rulos.png";
import CabelloTeñido from "../assets/teñido.jpg";
import CabelloDecolorado from "../assets/decolorado.jpg";
import CabelloAlisado from "../assets/alisado.jpg";
import Permanentes from "../assets/permanente.jpg";
import Quiebre from "../assets/Quiebre.png";
import Porosidad from "../assets/Porosidad.jpg";
import Deshidratacion from "../assets/deshidratacion.png";
import SinBrillo from "../assets/SinBrillo.png";
import SobreProcesado from "../assets/sobreprocesado.png";

const MainHebraCapilar = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [secondStepCard, setSecondStepCard] = useState([]);
    const [thirdStepCard, setThirdStepCard] = useState([]);
    const [showError, setShowError] = useState(false);
    const [recommendations, setRecommendations] = useState([]);
    
    const secondStepOption = {
        0: [4, 5, 6, 7],
        1: [4, 5, 6, 7],
        2: [4, 5, 6, 7],
        3: [4, 5, 7],
    };

    const thirdStepOption = {
        4: [8, 9, 10, 11],
        5: [8, 10, 12],
        6: [10],
        7: [10],
    };
    

    const handleFirstSelection = (cardIndex) => {
        setSelectedCard(cardIndex);
        setSecondStepCard([]);
        setThirdStepCard([]);
        setShowError(false);
        setRecommendations([]);
    };

    const handleSecondSelection = (cardIndex) => {
    
        if(secondStepCard.includes(cardIndex)){
            setSecondStepCard(secondStepCard.filter(index => index !== cardIndex))
        }else{
             setSecondStepCard([...secondStepCard, cardIndex])
        }
        
    };

    const handleThirdSelection = (cardIndex) => {
        if(thirdStepCard.includes(cardIndex)){
            setThirdStepCard(thirdStepCard.filter(index => index !== cardIndex))
        }else{
            setThirdStepCard([...thirdStepCard, cardIndex])
        }
    };

    const generateRecommendations = () => {
        const recs = [];
        if (selectedCard === 3) {
            recs.push("Recomendación: Línea Curls para rulos.");
        }
        if (thirdStepCard.includes(8)) {
            recs.push(
                <div>
                    Recomendación: Línea Repair para el quiebre.
                    <a href="https://www.tecitaly.com.ar/cuidado-del-cabello/cabello-rizado.html" target="_blank"></a>
                </div>
            );
        }
        if (thirdStepCard.includes(9)) {
            recs.push("Recomendación: Línea Omni Restore (Para todo tipo de cabello) o Línea Nourishing Oil (Para cabellos medio o grueso) para la porosidad.");
        }
        if (thirdStepCard.includes(10)) {
            recs.push("Recomendación: Línea Moisture para la deshidratación.");
        }
        if (thirdStepCard.includes(11)) {
            recs.push("Recomendación: Línea Omni Restore (Para todo tipo de cabello) o Línea Nourishing Oil (Para cabellos medio o grueso) para la falta de brillo.");
        }
        if (thirdStepCard.includes(12)) {
            recs.push("Recomendación: Línea Repair para el sobreprocesado.");
        }
        setRecommendations(recs);
    };

    const handleFinish = () => {
        if (selectedCard === null || secondStepCard.length === 0 || thirdStepCard.length === 0) {
            setShowError(true);
            return;
        }

        setShowError(false);
        generateRecommendations();
    };

    return (
        <div className="HebrCap">
            <h1 className="TITULO">Hebra Capilar</h1>

            <div className="Cards1">
                <Card className="opciones">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="Titulos">Hebra Capilar Fina</Accordion.Header>
                            <Accordion.Body>
                                * Diámetro pequeño y textura suave. <br />
                                * Tiende a ser más frágil y propensa a la rotura. <br />
                                * Menos volumen, suele apelmazarse fácilmente. <br />
                                * Es más difícil de peinar, y el peinado o rizos tienden a deshacerse rápido. <br />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Card.Img
                        variant="top"
                        src={HebraCapilarFina}
                        className={`Img ${selectedCard === 0 ? "selected" : ""}`}
                        onClick={() => handleFirstSelection(0)}
                    />
                </Card>

                <Card className="opciones">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="Titulos">Hebra Capilar Media</Accordion.Header>
                            <Accordion.Body>
                                * Diámetro intermedio, ni demasiado fino ni grueso. <br />
                                * Más resistente y fácil de manejar. <br />
                                * Mantiene el volumen y los peinados con mayor facilidad. <br />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Card.Img
                        variant="top"
                        src={HebraCapilarMedia}
                        className={`Img ${selectedCard === 1 ? "selected" : ""}`}
                        onClick={() => handleFirstSelection(1)}
                    />
                </Card>

                <Card className="opciones">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="Titulos">Hebra Capilar Gruesa</Accordion.Header>
                            <Accordion.Body>
                                * Diámetro grande y mayor grosor. <br />
                                * Es más fuerte y resistente a daños. <br />
                                * Tiende a tener más volumen natural y peso. <br />
                                * Más difícil de peinar o moldear, pero mantiene los estilos por más tiempo. <br />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Card.Img
                        variant="top"
                        src={HebraCapilarGruesa}
                        className={`Img ${selectedCard === 2 ? "selected" : ""}`}
                        onClick={() => handleFirstSelection(2)}
                    />
                </Card>

                <Card className="opciones">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="Titulos">Rulos</Accordion.Header>
                            <Accordion.Body>
                                * Estructura rizada o en espiral, con diferentes grados de grosor. <br />
                                * Puede ser desde rizos sueltos hasta apretados. <br />
                                * Tiende a ser más seca y frágil, ya que los aceites naturales no se distribuyen tan fácilmente. <br />
                                * Es más propensa al encrespamiento. <br />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Card.Img
                        variant="top"
                        src={Rulos}
                        className={`Img ${selectedCard === 3 ? "selected" : ""}`}
                        onClick={() => handleFirstSelection(3)}
                    />
                </Card>
            </div>

            {selectedCard !== null && (
                <div className="Card2">
                    <h3 className="subtitulo">Segundas <br /> opciones</h3>

                    {secondStepOption[selectedCard].includes(4) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Cabello Teñido</Accordion.Header>
                                    <Accordion.Body>
                                        * El color natural del cabello ha sido modificado por productos químicos. <br />
                                        * Puede volverse más seco debido a la alteración de la cutícula del cabello. <br />
                                        * Requiere hidratación y productos especiales para mantener el color y evitar la decoloración rápida. <br />
                                        * Suele ser más poroso y susceptible al daño por calor o exposición al sol. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={CabelloTeñido}
                                className={`Img ${secondStepCard === 4 ? "selected" : ""}`}
                                onClick={() => handleSecondSelection(4)}
                            />
                        </Card>
                    )}

                    {secondStepOption[selectedCard].includes(5) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Cabello Decolorado</Accordion.Header>
                                    <Accordion.Body>
                                        * El cabello ha sido sometido a un proceso de decoloración para aclarar el color. <br />
                                        * Puede resultar en mayor fragilidad y sequedad. <br />
                                        * Necesita productos reparadores y humectantes para mantener la salud del cabello. <br />
                                        * Es esencial usar protectores térmicos y evitar el uso excesivo de calor. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={CabelloDecolorado}
                                className={`Img ${secondStepCard === 5 ? "selected" : ""}`}
                                onClick={() => handleSecondSelection(5)}
                            />
                        </Card>
                    )}

                    {secondStepOption[selectedCard].includes(6) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Cabello Alisado</Accordion.Header>
                                    <Accordion.Body>
                                        * Ha sido sometido a tratamientos para alisar la textura natural del cabello. <br />
                                        * Puede ser más suave al tacto pero también más susceptible a daños y quiebre. <br />
                                        * Requiere productos que mantengan la hidratación y eviten el frizz. <br />
                                        * Es importante usar protectores térmicos si se utilizan herramientas de calor. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={CabelloAlisado}
                                className={`Img ${secondStepCard === 6 ? "selected" : ""}`}
                                onClick={() => handleSecondSelection(6)}
                            />
                        </Card>
                    )}

                    {secondStepOption[selectedCard].includes(7) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Permanentes</Accordion.Header>
                                    <Accordion.Body>
                                        * El cabello ha sido tratado para cambiar su forma de manera duradera. <br />
                                        * Puede causar daño estructural y sequedad si no se cuida adecuadamente. <br />
                                        * Requiere productos específicos para mantener la forma y evitar el frizz. <br />
                                        * Es importante mantener una buena hidratación y usar productos sin sulfatos. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={Permanentes}
                                className={`Img ${secondStepCard === 7 ? "selected" : ""}`}
                                onClick={() => handleSecondSelection(7)}
                            />
                        </Card>
                    )}
                </div>
            )}

            {/* {secondStepCard !== null && (
                <div className="Card3">
                    <h3 className="subtitulo">Terceras <br /> opciones</h3>

                    {thirdStepOption[secondStepCard].includes(8) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Quiebre</Accordion.Header>
                                    <Accordion.Body>
                                        * El cabello se rompe en diferentes secciones debido a daños mecánicos o químicos. <br />
                                        * Suele ocurrir en las puntas o a lo largo del cabello. <br />
                                        * Se debe a la falta de hidratación o uso excesivo de herramientas de calor. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={Quiebre}
                                className={`Img ${thirdStepCard === 8 ? "selected" : ""}`}
                                onClick={() => handleThirdSelection(8)}
                            />
                        </Card>
                    )}
                    
                    {thirdStepOption[secondStepCard].includes(9) && (                           
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Porosidad</Accordion.Header>
                                    <Accordion.Body>
                                        * El cabello tiene una alta capacidad de absorción y pérdida de humedad. <br />
                                        * Puede ser causado por tratamientos químicos o exposición al sol. <br />
                                        * Necesita productos hidratantes y tratamientos para sellar la cutícula. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={Porosidad}
                                className={`Img ${thirdStepCard === 9 ? "selected" : ""}`}
                                onClick={() => handleThirdSelection(9)}
                            />
                        </Card>
                    )}
                            
                    {thirdStepOption[secondStepCard].includes(10) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Deshidratación</Accordion.Header>
                                    <Accordion.Body>
                                        * El cabello carece de la hidratación adecuada, se siente seco y áspero. <br />
                                        * Puede ser causado por el uso excesivo de calor o productos que deshidratan. <br />
                                        * Requiere tratamientos intensivos de hidratación y productos humectantes. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={Deshidratacion}
                                className={`Img ${thirdStepCard === 10 ? "selected" : ""}`}
                                onClick={() => handleThirdSelection(10)}
                            />
                        </Card>
                    )}
                        
                    {thirdStepOption[secondStepCard].includes(11) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Sin Brillo</Accordion.Header>
                                    <Accordion.Body>
                                        * El cabello parece opaco y sin vida. <br />
                                        * Puede ser causado por la falta de hidratación o acumulación de productos. <br />
                                        * Necesita tratamientos que aporten brillo y luminosidad. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={SinBrillo}
                                className={`Img ${thirdStepCard === 11 ? "selected" : ""}`}
                                onClick={() => handleThirdSelection(11)}
                            />
                        </Card>
                    )}

                    {thirdStepOption[secondStepCard].includes(12) && (
                        <Card className="opciones">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="Titulos">Sobreprocesado</Accordion.Header>
                                    <Accordion.Body>
                                        * El cabello ha sido sometido a múltiples procesos químicos que lo han debilitado. <br />
                                        * Es frágil, quebradizo y puede tener una textura áspera. <br />
                                        * Requiere tratamientos restauradores y nutritivos. <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Card.Img
                                variant="top"
                                src={SobreProcesado}
                                className={`Img ${thirdStepCard === 12 ? "selected" : ""}`}                           
                                onClick={() => handleThirdSelection(12)}
                            />
                        </Card>
                    )}
                    </div>
                                    
                        
                )} */}
                
                <button className="btn" onClick={handleFinish}>Finalizar</button>
                
                {showError && <div className="error">Por favor, selecciona todas las opciones para recibir una recomendación.</div>}
                
                {recommendations.length > 0 && (
                    <div className="recommendations">
                        <h2>Recomendaciones:</h2>
                        <ul>
                            {recommendations.map((rec, index) => (
                                <li key={index}>{rec}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

export default MainHebraCapilar;