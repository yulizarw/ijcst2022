/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import Carousel from '../../views/index-sections/Carousel'
import {Link} from 'react-scroll'

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue" id='homepage' >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              // "url(" + require("assets/img/header.jpg").default + ")",
              `linear-gradient(to bottom, rgba(41, 128, 185, 0.85), rgba(109, 213, 250, 0.675), rgba(255, 255, 255, 1)),
              url("https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFrYXJ0YXxlbnwwfHwwfHw%3D&w=1000&q=80")`
          }}
          ref={pageHeader}
        ></div>
        <Container >
          <div style={{
            display: 'flex', flexDirection: 'column',
            
          }}>
            <div className="content-center brand"  >
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/logoIJCST.png").default}

              ></img>
              <h1 className="h1-seo" style={{ fontFamily: 'distant_galaxyregular', letterSpacing:'2px' }} >Welcome To</h1>
              <h2 style={{ fontWeight: 'bold', letterSpacing:'2px',  }}>IJCST 2022</h2>
              {/* <h6>"Science and Technology Innovation on Post Pandemic Through Society 5.0"</h6> */}
              <h5 style={{ fontWeight: 'bold', letterSpacing:'2px' }}>International Joint Conference on Science and Technology</h5>
              <div style={{ display: 'flex', flexShrink: '0', zIndex: 0,   justifyContent:'center'}}>
              
                <button className="mr-1 btn-round btn btn-info btn-lg" style={{
                  display: 'inline-block',
                  border: '0',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(30px)',
                  // color: 'rgba(241, 226, 15, 0.8)',
                  cursor: 'pointer',
                  fontSize:'14px',
                  fontWeight:'bolder',
                  // fontSize: '14px',
                  letterSpacing: '2px',
                  // textTransform: 'uppercase',
                  margin:'0',
                
                }} >
                  <i className="now-ui-icons ui-1_calendar-60"></i>
                  28 - 29 September 2022, Margo Hotel, Depok,  Jakarta-Indonesia
                </button>

              </div>
              <Carousel></Carousel>
            </div>
          </div>


          

        </Container>

      </div>
    </>
  );
}

export default IndexHeader;
