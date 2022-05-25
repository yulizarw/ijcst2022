import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// import markerIconPng from "leaflet/dist/images/marker-icon.png"
import markerIconPng from '../../assets/img/IJCSTlogo.png'
import { Icon } from 'leaflet'


// core components

function Contacts() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);

    const position = [-6.371767257468497, 106.83346735538485]

    const [clickedCount, setClickedCount] = useState(0)
    const eventHandlers = useMemo(
        () => ({
            click() {
                setClickedCount((count) => count + 1)
            },
        }),
        [],
    )
    const clickedText =
        clickedCount === 0
            ? 'Click this Circle to change the Tooltip text'
            : `Circle click: ${clickedCount}`

    return (
        <>
            <div
                className="section section-signup"
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/bg11.jpg").default + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    minHeight: "700px",
                }}
                id='contactInfo'
            >

                <Container  style={{ display: 'flex', flexDirection:'row', maxHeight: '100%' }}>
                    <MapContainer style={{ width: "100%"}} center={position} zoom={17} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={new Icon({ iconUrl: markerIconPng, iconSize: [70, 50], iconAnchor: [30, 60] })}
                        >
                            <Popup >
                                <img src="https://serving.photos.photobox.com/38810894b7e10241416241d5d5999e17a71da0683e0c94a2ec8c24258c6b7df692c70327.jpg"></img>
                                <h3 style={{ fontWeight: "bolder" }}>Margo Hotel, Depok, Jakarta</h3>Jl. Margonda Raya No.358, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16424
                            </Popup>
                        </Marker>
                        <Tooltip>{clickedText}</Tooltip>
                    </MapContainer>

                    <Card className="card-signup mb-0" data-background-color="blue" style={{ maxWidth: '100%', padding: '10px', display: 'flex', flexDirection: 'row' }}>
                        {/* <Form action="" className="form" method=""> */}
                        <CardHeader>
                            <CardTitle className="title-up text-center" tag="h1" style={{ fontFamily: 'distant_galaxyregular' }}>
                                Contact Information
                            </CardTitle>
                            <div style={{flexDirection:'row', display:'flex',}}>
                                <div style={{ display: 'flex', marginLeft: '2%' }}>
                                    <Button
                                        className="btn-neutral btn-icon btn-round"
                                        color="twitter"
                                        //   href="#pablo"
                                        //   onClick={(e) => e.preventDefault()}
                                        size="lg"
                                    >
                                        <i className="fab fa-whatsapp"></i>
                                    </Button>
                                    <div style={{ maxWidth: '100%', marginLeft: '0.9%' }}>
                                        <h4 style={{ marginTop: '5%', marginBottom: '0', fontWeight: 'bolder' }}>Armansyah</h4>
                                        <h5>+62-812-1824-2592</h5>
                                    </div>
                                </div>

                                <div>
                                    <div style={{ display: 'flex', marginLeft: '2%', marginRight: '2%' }}>
                                        <Button
                                            className="btn-neutral btn-icon btn-round"
                                            color="twitter"
                                            //   href="#pablo"
                                            //   onClick={(e) => e.preventDefault()}
                                            size="lg"
                                        >
                                            <i className="fab fa-whatsapp"></i>
                                        </Button>
                                        <div style={{ maxWidth: '100%', marginLeft: '0.9%' }}>
                                            <h4 style={{ marginTop: '5%', marginBottom: '0', fontWeight: 'bolder' }}>Silvia</h4>
                                            <h5>+62-812-8805-3790</h5>
                                        </div>
                                    </div>

                                </div>


                            </div>

                           
                            
                            <div style={{flexDirection:'row', display:'flex',}}>
                                <div style={{ display: 'flex', marginLeft: '2%', marginRight: '2%' }}>
                                    <Button
                                        className="btn-neutral btn-icon btn-round"
                                        color="twitter"
                                        //   href="#pablo"
                                        //   onClick={(e) => e.preventDefault()}
                                        size="lg"
                                    >
                                        <i className="fab fa-whatsapp"></i>
                                    </Button>
                                    <div style={{ maxWidth: '100%', marginLeft: '0.9%' }}>
                                        <h4 style={{ marginTop: '5%', marginBottom: '0', fontWeight: 'bolder' }}>Damora</h4>
                                        <h5>+62-878-7863-6688</h5>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginLeft: '2%', marginRight: '2%' }}>
                                    <Button
                                        className="btn-neutral btn-icon btn-round"
                                        color="twitter"
                                        //   href="#pablo"
                                        //   onClick={(e) => e.preventDefault()}
                                        size="lg"
                                    >
                                        <i className="fab fa-whatsapp"></i>
                                    </Button>
                                    <div style={{ maxWidth: '100%', marginLeft: '0.9%' }}>
                                        <h4 style={{ marginTop: '5%', marginBottom: '0', fontWeight: 'bolder' }}>Yulizar</h4>
                                        <h5>+62-812-1836-2823</h5>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', marginLeft: '2%', marginRight: '2%' }}>
                                <Button
                                    className="btn-neutral btn-icon btn-round"
                                    color="twitter"
                                    //   href="#pablo"
                                    //   onClick={(e) => e.preventDefault()}
                                    size="lg"
                                >
                                    <i className="fab fa-google"></i>
                                </Button>
                                <div style={{ maxWidth: '100%', marginLeft: '0.9%', marginTop: '1%' }}>
                                    <h4 style={{ marginTop: '5%', marginBottom: '0', fontWeight: 'bolder' }}>ijcst2022@upnvj.ac.id</h4>
                                </div>
                            </div>


                        </CardHeader>
                    

                    </Card>

                </Container>
            </div>
            <div id='consorsiumList' className="section section-nucleo-icons" style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
                <Container >
                    {/* <Row> */}
                    <Col lg="7" md="12">
                        {/* <h2 className="title" style={{ fontFamily: 'distant_galaxyregular' }}>Consortium</h2> */}
                        <h5 className="description" style={{ fontWeight: 'bold' }}>
                            The IJCST Consortium consists of the following 14 Universities:
                        </h5>
                    </Col>

                    {/* </Row> */}

                    <Col lg="20" md="32" >
                        <div class="badges">
                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '65%', zIndex: '20' }} src={require("assets/logo/fix/done9.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '65%', zIndex: '20' }} src={require("assets/logo/fix/done3.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '65%', zIndex: '20' }} src={require("assets/logo/fix/done2.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '65%', zIndex: '20' }} src={require("assets/logo/fix/done4.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '65%', zIndex: '20' }} src={require("assets/logo/fix/done5.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '75%', zIndex: '20' }} src={require("assets/logo/fix/done6.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '65%', zIndex: '20' }} src={require("assets/logo/fix/done.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '73%', zIndex: '20' }} src={require("assets/logo/fix/done7.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '69%', zIndex: '20' }} src={require("assets/logo/fix/done8.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '69%', zIndex: '20' }} src={require("assets/logo/fix/done10.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '75%', zIndex: '20' }} src={require("assets/logo/fix/done11.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '75%', zIndex: '20' }} src={require("assets/logo/fix/done12.png").default}></img>
                            </div>

                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '75%', zIndex: '20' }} src={require("assets/logo/fix/done13.png").default}></img>
                            </div>
                            <div class="animated_badge animated_badge_1 hide">
                                <div class="animated_stars">
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut yellow"></div>
                                    <div class="animated_star plus"></div>
                                    <div class="animated_star donut"></div>
                                    <div class="animated_star plus yellow"></div>
                                </div>
                                <img style={{ maxWidth: '75%', zIndex: '20' }} src={require("assets/logo/fix/done14.png").default}></img>
                            </div>
                        </div>

                    </Col>



                </Container>
            </div>

        </>
    );
}
//armansyah, silvia, damora, yulizar (icss)


export default Contacts;
