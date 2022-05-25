import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div  id='conferenceInfo' className="section section-tabs" style={{ opacity: "0.7", backgroundImage: 'linear-gradient(to bottom,rgba(255, 255, 255, 0.55), rgba(41, 128, 185, 0.85), rgba(109, 213, 250, 0.675)),url(https://images.unsplash.com/photo-1579719558505-ad4a5fee0847?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=1600&h=500&q=60)' }} >
        <Container style={{ maxWidth: '80%' }} >
          <img
            alt="..."
            className="n-logo"
            src={require("assets/img/logoIJCST.png").default}
            style={{ marginLeft: '40%' }}
          ></img>
          {/* <p className="category" style={{ textAlign: 'center', color: 'white' }}>TOPICS:</p> */}
          <CardHeader style={{ fontWeight: 'bolder', textAlign: 'center' }}>
            <Nav className="justify-content-lg-center" role="tablist" tabs>
              <NavItem>
                <NavLink
                  className={iconPills === "1" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setIconPills("1");
                  }}
                  style={{ fontSize: '20px' }}
                >
                  {/* <i className="now-ui-icons ui-1_email-85"></i> */}
                  "Science and Technology Innovation on Post Pandemic Through Society 5.0"
                </NavLink>
              </NavItem>

            </Nav>
          </CardHeader>
          {/* <p className="category" style={{ textAlign: 'center', color: 'white' }}>"Science and Technology Innovation on Post Pandemic Through Society 5.0"</p> */}
          <Row>
            <Col className="ml-auto mr-auto flex" style={{ display: 'flex', flexDirection: 'row' }}>

              <Card style={{
                display: 'inline-block',
                border: '0',
                borderRadius: '15px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(30px)',
                // color: 'rgba(241, 226, 15, 0.8)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bolder',
                // fontSize: '14px',
                letterSpacing: '2px',
                // textTransform: 'uppercase',
                margin: '0',
              }}>
                <CardHeader>
                  <Nav className="justify-content-lg-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}

                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >


                        <i className="now-ui-icons ui-1_email-85"></i>


                        Abstract Submission
                      </NavLink>
                    </NavItem>

                  </Nav>
                </CardHeader>
                <CardBody>
                  <div class="card l-bg-green-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large mr-3"><i class="fas fa-file-alt"></i></div>
                      <div class="mb-4">
                        <h5 class="card-title mb-0">Open</h5>
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h5 class="d-flex align-items-center mb-0">
                            April - June 2022
                          </h5>
                        </div>
                        {/* <div class="col-4 text-right">
                          <span>10% <i class="fa fa-arrow-up"></i></span>
                        </div> */}
                      </div>

                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card style={{
                display: 'inline-block',
                border: '0',
                borderRadius: '15px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(30px)',
                // color: 'rgba(241, 226, 15, 0.8)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bolder',
                // fontSize: '14px',
                letterSpacing: '2px',
                // textTransform: 'uppercase',
                margin: '0',
              }}>
                <CardHeader>
                  <Nav className="justify-content-lg-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}

                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons ui-1_send"></i>
                        Full Paper Submission
                      </NavLink>
                    </NavItem>

                  </Nav>
                </CardHeader>
                <CardBody>
                  <div class="card l-bg-blue-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large mr-3"><i class="fas fa-users"></i></div>
                      <div class="mb-4">
                        <h5 class="card-title mb-0">Submission</h5>
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h5 class="d-flex align-items-center mb-4">
                            June 2022
                          </h5>

                        </div>
                        {/* <div class="col-4 text-right">
                          <span>9.23% <i class="fa fa-arrow-up"></i></span>
                        </div> */}
                      </div>

                    </div>
                  </div>
                  <div class="card l-bg-blue-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large mr-3"><i class="fas fa-bell"></i></div>
                      <div class="mb-4">
                        <h5 class="card-title mb-0">Acceptance Notification:</h5>
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h5 class="d-flex align-items-center mb-0">
                            September 2022
                          </h5>

                        </div>
                        {/* <div class="col-4 text-right">
                          <span>9.23% <i class="fa fa-arrow-up"></i></span>
                        </div> */}
                      </div>

                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card style={{
                display: 'inline-block',
                border: '0',
                borderRadius: '15px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(30px)',
                // color: 'rgba(241, 226, 15, 0.8)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bolder',
                // fontSize: '14px',
                letterSpacing: '2px',
                // textTransform: 'uppercase',
                margin: '0',
              }}>
                <CardHeader>
                  <Nav className="justify-content-lg-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}

                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons media-1_camera-compact"></i>
                        Camera Ready
                      </NavLink>
                    </NavItem>

                  </Nav>
                </CardHeader>
                <CardBody>

                  <div class="card l-bg-green-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large mr-3"><i class="fas fa-ticket-alt"></i></div>
                      <div class="mb-4">
                        <h5 class="card-title mb-0">Camera Ready</h5>
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h5 class="d-flex align-items-center mb-0">
                            September 2022
                          </h5>
                        </div>
                        {/* <div class="col-4 text-right">
                          <span>10% <i class="fa fa-arrow-up"></i></span>
                        </div> */}
                      </div>

                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card style={{
                display: 'inline-block',
                border: '0',
                borderRadius: '15px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(30px)',
                // color: 'rgba(241, 226, 15, 0.8)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bolder',
                // fontSize: '14px',
                letterSpacing: '2px',
                // textTransform: 'uppercase',
                margin: '0',
              }}>
                <CardHeader>
                  <Nav className="justify-content-lg-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}

                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons travel_istanbul"></i>
                        Conference Date
                      </NavLink>
                    </NavItem>

                  </Nav>
                </CardHeader>
                <CardBody>
                  <div class="card l-bg-cherry">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large mr-3"><i class="fas fa-hotel"></i></div>
                      <div class="mb-4">
                        <h5 class="card-title mb-0">Conference Date :</h5>
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-9">
                          <h5 class="d-flex align-items-center mb-0">
                            28 - 29 September, 2022
                          </h5>
                        </div>
                        {/* <div class="col-4 text-right">
                          <span>12.5% <i class="fa fa-arrow-up"></i></span>
                        </div> */}
                      </div>

                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>
          {/* cards */}


        </Container>

      </div>

    </>
  );
}

export default Tabs;
