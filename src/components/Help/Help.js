import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import config from '../../config';
import help_img_1 from "./img/help_img_1.png";
import help_img_2 from "./img/help_img_2.png";
import help_img_3 from "./img/help_img_3.png";
import help_img_4 from "./img/help_img_4.png";
import help_img_5 from "./img/help_img_5.png";
import help_img_6 from "./img/help_img_6.png";
import help_img_7 from "./img/help_img_7.png";
import help_img_8 from "./img/help_img_8.png";
import help_img_9 from "./img/help_img_9.png";
import help_img_10 from "./img/help_img_10.png";
import help_img_11 from "./img/help_img_11.png";
import authHeader from "../../services/AuthHeader";
import "./Help.css";

function Help() {
    const [role, setRole] = useState('');

    useEffect(() => {
        axios({
            method: "GET",
            url: config.API_URL + "/users/role",
            headers: authHeader()
        })
        .then(response => response)
        .then(result => setRole(result.data.role))
        .catch(error => console.log(error));
    })

    return (
        <div>
            <Container>
                <Row className="text-center help_title">
                    <Col><h1 className="secondary-text">Abi</h1></Col>
                </Row>
                <Row className="text-center">
                    <Col className="help_text">
                        <p>Töölaua vaates on näha kõik sellel aastal teie õppekaval intervjueeritavad. 
                            Vaate ülemises ääres asuva otsinguriba kaudu on võimalik nimekirjast sorteerida 
                            kandidaate nime järgi. Kandidaadi detailvaatesse saab navigeerida kui vajutada 
                            kandidaadi rea peale. <i>Kui ühtegi kandidaati ei ole töölaual näha, palun võta ühendust 
                            Mihkliga (mihkel.pulst@tlu.ee).</i>
                        </p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col><h2 className="secondary-text">Intervjuu</h2></Col>
                </Row>
                <Row className="text-center">
                    <Col className="help_text">
                        <p>Intervjuule kulunud aja jälgimiseks kui ka kohaloleku märkimiseks kasutada kandidaadi 
                            detailvaates "Alusta" nuppu, mille järel algab selle kõrval taimeril aeg jooksma. Ajalist 
                            limiiti intervjuu läbiviimiseks rakenduses sätestatud ei ole.</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Figure.Image
                                src={help_img_2}
                                width="1000"
                                className="center"
                                alt="User help" 
                        />
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col className="help_text">
                        <p>Kandidaadi testitulemused ning ka informatsioon on õppekavati erinev, kuid on nähtav detailvaates. 
                            "Admin märkmed" on informatsioon, mille on ülikooli admin pannud koos SAIS'ist tuleva kandidaadi taustainformatsiooniga 
                            kaasa.</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Figure.Image
                            src={help_img_11}
                            width="1000"
                            className="center"
                            alt="User help" 
                        />
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col className="help_text">
                        <p>Intervjuu hindamise alal olevate kategooriate nimetusi, punktiskaalat, silte kui ka lõpliku punktisumma jaoks 
                            kasutatavat valemit saab paluda vajaduse korral muuta Mihklil. Kandidaadi punktide sisestamine on kõikidele vastuvõtukomisjonis 
                            individuaalne, sama kehtib ka siltidele ja kommentaarie. Kui intervjuu on lõpetatud, palun vajuta "Salvesta" nuppu. 
                            Kui oled kogemata avanud vale kandidaadi, saad väljuda hindamises ilma salvestamata "Katkesta" nupu kaudu.</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Figure.Image
                            src={help_img_3}
                            width="1000"
                            className="center"
                            alt="User help" 
                        />
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col className="help_text">
                        <p>Kui intervjuu on lõpetatud, palun vajuta "Salvesta" nuppu. 
                            Kui oled kogemata avanud vale kandidaadi, saad väljuda hindamises ilma salvestamata "Katkesta" nupu kaudu.</p>
                    </Col>
                </Row>
                <Row className="text-center"> 
                    <Col>
                        <Figure.Image
                            src={help_img_1}
                            width="300"
                            className="center"
                            alt="User help" 
                        />
                    </Col>
                </Row>
                {role === "Admin" &&
                    <div>
                        <Row className="text-center">
                            <Col><h2 className="secondary-text">Nimekirjad</h2></Col>
                        </Row>
                        <Row className="text-center">
                            <Col className="help_text"><p>Nimekirjade vaates on nähtaval kõik eelnevalt üles laetud erinevate õppekavade tudengikandidaatide nimekirjad.</p></Col>
                        </Row>
                        <Row className="text-center">
                            <Col><h3 className="secondary-text">Nimekirja üleslaadimine</h3></Col>
                        </Row>
                        <Row className="text-center">
                            <Col className="help_text">
                                <p>1. Vajuta nimekirjade vaates "import"</p>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Figure.Image
                                    src={help_img_4}
                                    width="1000"
                                    className="center"
                                    alt="User help" 
                                />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col className="help_text">
                                    <p>2. Valik õppekava ja aasta, mille sisseastumiste nimekirjaga on tegu; vali fail enda seadmest ja seejärel vajuta import.
                                    PS! Üleslaetav tabel siin on ülikooli Adminilt saadav SAIS'i andmetega tabel. </p>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Figure.Image
                                    src={help_img_5}
                                    width="500"
                                    className="center"
                                    alt="User help" 
                                />
                            </Col>
                        </Row>
                        <Row className="text-center">
                        <Col className="help_text">
                              <p> 3. Lae üles ka nimekirja juurde testitulemused klikates selle kõrval "Lisa tulemused" nupule.</p>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Figure.Image
                                    src={help_img_6}
                                    width="500"
                                    className="center"
                                    alt="User help" 
                                />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col className="help_text"><p>Nimekirja kõrval olevatest nuppudest saab hallata hetkel kasutajatele nähaolevaid 
                                tabeleid Disable/Enable nupu kaudu. Vajutades Enable muutub nimekiri töölauavaates kasutajatele nähtavaks. 
                                Disable seevastu eemaldab kasutajatelt õiguse antud nimekirjas olevate kandidaatide infot vaadata. 
                                Ekspordi kaudu saab alla laadida nimekirja tabeli koos lõplike test + intervjuu tulemustega.</p>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col><h3 className="secondary-text">Seaded</h3></Col>
                        </Row>
                        <Row className="text-center">
                            <Col className="help_text"><p>Seadete all on võimalik lisada/muuta/eemaldada kasutajaid (st. intervjueerijaid) ning muuta 
                                tudengikandidaadi detailvaates nähtavaid silte.</p></Col>
                        </Row>
                        <Row className="text-center">
                            <Col className="help_text"><p>Uue kasutaja lisamine:</p>
                                    <p>1. Vajuta seadete all "Kasutajad" lehel "Lisa" nuppu</p>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Figure.Image
                                    src={help_img_7}
                                    width="1000"
                                    className="center"
                                    alt="User help" 
                                />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col className="help_text">
                                    <p>
                                    2. Täida ära eesnimi, perekonnanimi, kasutaja email mida saab sisselogimiseks 
                                    kasutada ning lisa ka parool. Kindlasti tuleb ka lisada vastav õppekava, mille nimekirja 
                                    on kasutajal õigus töölaual vaadata.</p>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Figure.Image
                                    src={help_img_8}
                                    width="200"
                                    className="center"
                                    alt="User help" 
                                />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col className="help_text"><p>Siltide lisamine/muutmine:</p>
                                    <p>1. Navigeeri "Sildid" lehele seadete all ja vajuta "Lisa"
                                    </p>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Figure.Image
                                    src={help_img_10}
                                    width="1000"
                                    className="center"
                                    alt="User help" 
                                />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col className="help_text"><p>
                                    3. Lisa sildile nimetus kui ka õppekava, mille kandidaatidele peaks seda võimalik olla panna ja vajuta seejärel "Lisa".
                                    </p>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Figure.Image
                                    src={help_img_9}
                                    width="300"
                                    className="center"
                                    alt="User help" 
                                />
                            </Col>
                        </Row>
                    </div>
                }
            </Container>
        </div>
    )
}

export default Help
