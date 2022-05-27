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
import { Link } from 'react-scroll'

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
      <div className="page-header clear-filter" id='homepage' >
        <div
          className="page-header-image"

          ref={pageHeader}
        ></div>
        <div>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" >
            <div style={{
              display: 'flex', flexDirection: 'column'
            }}>
              <div class="carousel-item active">
                <img class="d-block" style={{ width: '100%', height: '1110px' }} src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFrYXJ0YXxlbnwwfHwwfHw%3D&w=1980&q=1110" alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block" style={{ width: '100%', height: '1110px' }} src="https://hotelsbydrone.com/wp-content/uploads/2020/02/The-Margo-Hotel-by-Drone.jpg" alt="Second slide" />
              </div>
            </div>


          </div>
        </div>

        <div
          className="content-center brand" >
          <div  style={{
            display: 'inline-block',
            border: '0',
            padding: '20px',
            borderRadius: '15px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(30px)',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bolder',
            width:'100%',
            height:'100%',
            letterSpacing: '2px',
          }} >
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logoIJCST.png").default}
            ></img>

            <h1 className="h1-seo" style={{ fontFamily: 'distant_galaxyregular', letterSpacing: '2px' }} >Welcome To</h1>
            <h2 style={{ fontWeight: 'bold', letterSpacing: '2px', }}>IJCST 2022</h2>
            {/* <h6>"Science and Technology Innovation on Post Pandemic Through Society 5.0"</h6> */}
            <h5 style={{ fontWeight: 'bold', letterSpacing: '2px' }}>International Joint Conference on Science and Technology</h5>
            <div style={{ display: 'flex', flexShrink: '0', zIndex: 0, justifyContent: 'center' }}>

              <button className="mr-1 btn-round btn btn-info btn-lg" style={{
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

              }} >
                <i className="now-ui-icons ui-1_calendar-60"></i>
                28 - 29 September 2022, Margo Hotel, Depok,  Jakarta-Indonesia
              </button>

            </div>
          </div>
          <div style={{ marginTop: '15rem' }}>
          <button className="mr-1 btn-round btn btn-info btn-lg" style={{
                display: 'inline-block',
                border: '0',
                borderRadius: '15px',
                backgroundColor: 'rgba(0,0,0,0.6)',
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

              }} >
                
                All accepted paper will be published in :
              </button> <br></br>
            <img style={{ width: '30%', height: '30%' }} src="https://tse1.mm.bing.net/th?id=OIP.QQLcASPpKIonA6HZ2nXXqwHaCq&pid=Api&P=0&w=536&h=193" />
            <img style={{ width: '17.2%', height: '17%' }} src="https://tse3.mm.bing.net/th?id=OIP.XhekUvRogD2XX7l9XCjvpAHaEo&pid=Api&P=0&w=249&h=155" />
            <img style={{ width: '30%', height: '17%' }} src="https://tse1.mm.bing.net/th?id=OIP.LoVrhQ0B5c8OeTi-szWWRQAAAA&pid=Api&P=0&w=426&h=152" />
          </div>
        </div>

      </div>

    </>
  );
}

export default IndexHeader;
