import React from "react";
import { useHistory } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import { Link } from 'react-scroll'

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const history = useHistory()
  var redirectHome = (e) => {
    e.preventDefault();

  }

  const clickAbout = (e) => {
    e.preventDefault();
    // document
    //   .getElementById("download-section")
    //   .scrollIntoView();
    history.push('/about')
  }
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="white">
    
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              // target="_blank"
              id="navbar-brand"
              style={{ fontWeight: 'bold' }}
            >
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/logoIJCST.png").default}
                width="30%"
              ></img>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by Engineering Faculty UPN Veteran Jakarta
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink

                // onClick={{
                //  redirectHome
                // }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <Link to="homepage" style={{ fontWeight: 'bold' }} spy={true} smooth={true}>Home</Link>
                </NavLink>

              </NavItem>
              <NavItem>
                <NavLink

                // onClick={(e) => {
                //   clickAbout(e)

                // }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p style={{ fontWeight: 'bold' }}><Link to="aboutPage" spy={true} smooth={true}>About</Link></p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink

                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <Link to="conferenceInfo" spy={true} smooth={true} style={{ fontWeight: 'bold' }}>Conference</Link>
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink

                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("download-section")
                    .scrollIntoView();
                }}
              >
                {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                <Link to="conferenceDetail" spy={true} smooth={true} style={{ fontWeight: 'bold' }}>Call For Paper</Link>
              </NavLink>
              </NavItem>
              <NavLink
          
                // onClick={(e) => {
                //   e.preventDefault();
                //   document
                //     .getElementById("download-section")
                //     .scrollIntoView();
                // }}
              >
                {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                <Link to="consorsiumList" spy={true} smooth={true} style={{ fontWeight: 'bold' }}>Consorsium</Link>
              </NavLink>
              <NavItem>

                <NavLink
                  
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <Link to="contactInfo" spy={true} smooth={true} style={{ fontWeight: 'bold' }}>Contact Us</Link>
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Components</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-index-navbar"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Upgrade to PRO</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
