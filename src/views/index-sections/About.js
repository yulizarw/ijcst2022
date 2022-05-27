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
  Button
} from "reactstrap";

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const AboutPage = () => {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");

  const position = [-6.2655536717185205, 106.78289622854182]
  return (

    <>
      {/* <div className="section section-basic" id="basic-elements" style={{ opacity: "0.7", backgroundColor:'#C9C6C6', backgroundImage:'linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)'}}> */}
      <div className="section section-basic" id="basic-elements" style={{
        opacity: "0.7"
      }} id='aboutPage'>
        <Container  >
          <div style={{ display: 'flex', flexDirection: 'row' }} >
            {/* <img src={require("assets/img/IJCST12022.png").default} style={{ maxWidth: '32%' }}></img> */}
            <p className="blockquote blockquote-primary" style={{
              color: 'black', textAlign: 'justify', fontWeight: 'normal', alignItems: 'center', maxWidth: '100%', display: 'inline-block',
              border: '0',
              borderRadius: '15px',
              backgroundColor: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(30px)',
              // color: 'rgba(241, 226, 15, 1)',
              cursor: 'pointer',
              fontSize: '17px',
              // fontWeight: 'bolder',
              // fontSize: '14px',
              letterSpacing: '2px',
              textAlign: 'justify',
              // textTransform: 'uppercase',
              margin: '0',
              // fontFamily:'distant_galaxyregular'

            }}>
              IJCST (International Joint Conference on Science and Technology) is an annual international conference initiated by 14 universities in Indonesia. This conference accepts all topics related to science-technology and social science. This year, the Faculty of Engineering Universitas Pembangunan Nasional Veteran Jakarta will be the hosting for the 6th IJCST 2022. This event will be held on September 28-29 in Jakarta with the theme “Science and Technology Innovation on Post Pandemic Through Society 5.0”. Over the last five years, IJCST has published more than 1000 open access papers. These papers have been published in Atlantis Publisher, IOP: Conference Proceedings, E3S Web of Science (the most prestigious scientific databases: Web of Science & SCOPUS-indexed). Various conferences have been held under the IJCST, particularly ICST (International Conference on Science and Technology) and ICSS (International Conference on Social Science).{" "}
              <br></br>
              <small>- Committee Chair</small>
            </p>


          </div>
        </Container>
      </div>
      <Container id='conferenceDetail' className="section section-basic" style={{ maxWidth: '100%', padding: '0px' }}>
        <Nav className="justify-content-lg-center mt-2" role="tablist" tabs >
          <NavItem>
            <NavLink
              className={iconPills === "1" ? "active" : ""}

              onClick={(e) => {
                e.preventDefault();
                setIconPills("1");
              }}
            >


              <h5 style={{
                border: '0',
                borderRadius: '15px',
                // backgroundColor: 'rgba(255,255,255,0.1)',
                // border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(30px)',
                // color: 'rgba(241, 226, 15, 0.8)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bolder',
                // fontSize: '14px',
                letterSpacing: '2px',
                // textTransform: 'uppercase',
                margin: '0',
              }}  >Conferences will be conducted by IJCST, which consist : </h5>

            </NavLink>
          </NavItem>
        </Nav>

      </Container>
      <Col className="flex mb-5 " style={{ display: 'flex', flexDirection: 'row', marginTop: '0', maxWidth: '100%', justifyContent: 'center', margin: 'auto' }}>
        <div class="card mb-3">
          <a href="https://icst.upnvj.ac.id">
            <img
              alt="..."
              className="img-raised"
              style={{width:'50%', marginLeft:'25%'}}
              src={require("assets/img/icstVR.jpg").default}
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ fontFamily: 'distant_galaxyregular', textAlign: 'center', fontWeight: 'bolder', fontSize: '50px' }}>ICST</h5>
              <h6 style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '0' }}> International Conference on Science and Technology</h6>
              <p class="card-text" style={{ textAlign: 'justify', marginLeft: '10px' }}>
                The 6th International Conference on Science and Technology (ICST 2022) is an annual conference series that discusses the topics related to technological developments and the latest research in the exact science.
                <br /><br />
                Scope:
                <li>

                  Science and Engineering Physics
                </li>
                <li>

                  Applied Mathematics & Statistics
                </li>
                <li>

                  Computer Science
                </li>
                <li>

                  Electricity and Electronics
                </li>
                <li>
                  Disruptive Technologies in the 4th Industrial Revolution (IIoT, Artificial Intelligent, Big Data, AR & VR, Sensors, 3D Printing Robots, Machine Learning)

                </li>
                <li>

                  Geographic Information System & Remote Sensing
                </li>
                <li>

                  Biological & Environmental Science
                </li>
                <li>

                  Biomedics & Biometrics
                </li>
                <li>

                  Geophysics, Geology, & Mining
                </li>
                <li>

                  Mechanical Engineering
                </li>
                <li>

                  Industrial Engineering
                </li>
                <li>

                  Civil Engineering
                </li>
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </a>
        </div>
        <div class="card mb-3 ml-5">
          <a href="https://icss.upnvj.ac.id">
            <img
              alt="..."
              className="img-raised"
              style={{width:'50%', marginLeft:'25%'}}
              src='https://media.istockphoto.com/photos/concept-picture-id889289290?b=1&k=20&m=889289290&s=170667a&w=0&h=zuXdgwnlt-2AuZY84ECuS-cwwoD600g7PN8dp36MhSw='

            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ fontFamily: 'distant_galaxyregular', textAlign: 'center', fontWeight: 'bolder', fontSize: '50px' }}>ICSS</h5>
              <h6 style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '0' }}>International Conference on Social Sciences</h6>
              <p class="card-text" style={{ textAlign: 'justify', marginLeft: '10px' }}>
                The 6th International Conference on Social Sciences (ICSS 2022) is an annual conference series that discusses the topics related to social sciences, humanities, and education.
                <br></br><br></br>
                Scope:
                <li>
                  Law
                </li>
                <li>
                  Education
                </li>
                <li>
                  Cultural and Communication Studies
                </li>
                <li>
                  Economic
                </li>
                <li>
                  Social Sciences
                </li>
                <li>
                  Human Literacy
                </li>

              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </a>
        </div>

      </Col>


    </>
  )
}