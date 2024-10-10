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
    const [availableThirdOptions, setAvailableThirdOptions] = useState([]);

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
        setAvailableThirdOptions([]);
        setShowError(false);
        setRecommendations([]);
    };

    const handleSecondSelection = (cardIndex) => {
        const newSecondStepCard = secondStepCard.includes(cardIndex)
            ? secondStepCard.filter(index => index !== cardIndex) 
            : [...secondStepCard, cardIndex];

        setSecondStepCard(newSecondStepCard);

        
        if (newSecondStepCard.length === 0) {
            setAvailableThirdOptions([]);
            setThirdStepCard([]);
        } else {
            
            const allThirdOptions = [];
            Object.values(thirdStepOption).forEach(option => {
                allThirdOptions.push(...option);
            });
            setAvailableThirdOptions([...new Set(allThirdOptions)]);
            setThirdStepCard([]); 
        }
    };

    const handleThirdSelection = (cardIndex) => {
        const newThirdStepCard = thirdStepCard.includes(cardIndex)
            ? thirdStepCard.filter(index => index !== cardIndex) 
            : [...thirdStepCard, cardIndex];

        setThirdStepCard(newThirdStepCard);
    };

    const generateRecommendations = () => {
        const recs = [];
        if (selectedCard === 3) {
            recs.push(
                <div>
                    Se recomienda: 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/cabello-rizado.html" target="_blank">Línea Curls </a>
                    para Cabello ondulado
                </div>
            );
        }
        if (thirdStepCard.includes(8)) {
            recs.push(
                <div>
                    Se recomienda: 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/reparacion-del-cabello.html" target="_blank" rel="noopener noreferrer">Línea Repair </a>
                    para el quiebre.
                </div>
            );
        }
        if (thirdStepCard.includes(9)) {
            recs.push(
                <div>
                    Se recomienda: 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/restauracion-del-cabello.html" target="_blank">Línea Omni Restore (Para todo tipo de cabello) </a>
                     o 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/enriquecidos-con-aceites.html" target="_blank"> Línea Nourishing Oil (Para cabellos medio o grueso) </a>  
                     para la porosidad.
                </div>
            );
        }
        if (thirdStepCard.includes(10)) {
            recs.push(
                <div>
                    Se recomienda: 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/hidratacion-del-cabello.html" target="_blank">Línea Moisture </a> 
                    para la deshidratación.
                </div>
            );
        }
        if (thirdStepCard.includes(11)) {
            recs.push(
                <div>
                    Se recomienda:
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/restauracion-del-cabello.html" target="_blank">Línea Omni Restore (Para todo tipo de cabello) </a> 
                     o 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/enriquecidos-con-aceites.html" target="_blank"> Línea Nourishing Oil (Para cabellos medio o grueso) </a>
                     para la falta de brillo.
                </div>
            );
        }
        if (thirdStepCard.includes(12)) {
            recs.push(
                <div>
                    Se recomienda: 
                    <a className="links" href="https://www.tecitaly.com.ar/cuidado-del-cabello/reparacion-del-cabello.html" target="_blank">Línea Repair </a>
                    para el sobreprocesado.
                    
                </div>
            );
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
                {['Fina', 'Media', 'Gruesa', 'Rulos'].map((type, index) => (
                    <Card className="opciones" key={index}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="Titulos">Hebra Capilar {type}</Accordion.Header>
                                <Accordion.Body>
                                    <p>* Diámetro {type === 'Fina' ? 'pequeño y textura suave.' : type === 'Media' ? 'intermedio, ni demasiado fino ni grueso.' : type === 'Gruesa' ? 'grande y mayor grosor.' : 'rizada o en espiral, con diferentes grados de grosor.'}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Card.Img
                            variant="top"
                            src={type === 'Fina' ? HebraCapilarFina : type === 'Media' ? HebraCapilarMedia : type === 'Gruesa' ? HebraCapilarGruesa : Rulos}
                            className={`Img ${selectedCard === index ? "selected" : ""}`}
                            onClick={() => handleFirstSelection(index)}
                        />
                    </Card>
                ))}
            </div>

            {selectedCard !== null && (
                <div className="Card2">
                    <h3 className="subtitulo">Segundas <br /> opciones</h3>

                    {secondStepOption[selectedCard].map((optionIndex) => {
                        const optionData = [
                            { src: CabelloTeñido, title: 'Cabello Teñido', body: '* El color natural del cabello ha sido modificado por productos químicos...' },
                            { src: CabelloDecolorado, title: 'Cabello Decolorado', body: '* El cabello ha sido sometido a un proceso de decoloración...' },
                            { src: CabelloAlisado, title: 'Cabello Alisado', body: '* Ha sido sometido a tratamientos para alisar la textura natural...' },
                            { src: Permanentes, title: 'Permanentes', body: '* El cabello ha sido tratado para cambiar su forma...' },
                        ];
                        
                        return (
                            <Card className="opciones" key={optionIndex}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="Titulos">{optionData[optionIndex - 4].title}</Accordion.Header>
                                        <Accordion.Body>{optionData[optionIndex - 4].body}</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Card.Img
                                    variant="top"
                                    src={optionData[optionIndex - 4].src}
                                    className={`Img ${secondStepCard.includes(optionIndex) ? "selected" : ""}`}
                                    onClick={() => handleSecondSelection(optionIndex)}
                                />
                            </Card>
                        );
                    })}
                </div>
            )}

            {availableThirdOptions.length > 0 && (
                <div className="Card3">
                    <h3 className="subtitulo">Terceras <br /> opciones</h3>

                    {availableThirdOptions.map((thirdIndex) => {
                        const thirdData = [
                            { src: Quiebre, title: 'Quiebre', body: '* El cabello se rompe en diferentes secciones...' },
                            { src: Porosidad, title: 'Porosidad', body: '* El cabello tiene una alta capacidad de absorción...' },
                            { src: Deshidratacion, title: 'Deshidratación', body: '* El cabello carece de la hidratación adecuada...' },
                            { src: SinBrillo, title: 'Sin Brillo', body: '* El cabello se ve opaco y sin vida...' },
                            { src: SobreProcesado, title: 'Sobreprocesado', body: '* El cabello ha sido tratado excesivamente...' },
                        ];

                        return (
                            <Card className="opciones" key={thirdIndex}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="Titulos">{thirdData[thirdIndex - 8].title}</Accordion.Header>
                                        <Accordion.Body>{thirdData[thirdIndex - 8].body}</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Card.Img
                                    variant="top"
                                    src={thirdData[thirdIndex - 8].src}
                                    className={`Img ${thirdStepCard.includes(thirdIndex) ? "selected" : ""}`}
                                    onClick={() => handleThirdSelection(thirdIndex)}
                                />
                            </Card>
                        );
                    })}
                </div>
            )}

            <div className="button-container">
                <button className="btn " onClick={handleFinish}>Finalizar</button>
            </div>

            {showError && (
                <div className="error-message">Por favor, selecciona una opción de cada etapa.</div>
            )}

            {recommendations.length > 0 && (
                <div className="recommendations">
                    <h3>Recomendaciones:</h3>
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