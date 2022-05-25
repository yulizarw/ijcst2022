import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: "https://serving.photos.photobox.com/82569885597dd2a25012b9b8b05b6864ebf6e8b45edef1254e9b517429c83a5ea99a06bc.jpg",
    altText: "InterContinental Pondok Indah",
    caption: "The Margo Hotel, Depok",
    height:'300px',
    width:'600px',
  },
  {
    src: "https://serving.photos.photobox.com/261957832336d2672c7992090f6f6bee06372ee49460fd2f9623006d7b76e5ce7da4f834.jpg",
    altText: "Multi Purpose Room",
    caption: "Meeting Room",
    height:'300px',
    width:'600px',
  },
  {
    src: "https://serving.photos.photobox.com/70899975a007f9b61f051076b76d1a27bc239ad229ff821ce940ba3baf5cc6e561e6075e.jpg",
    altText: "Breakout Room",
    caption: "Breakout Room",
    height:'300px',
    width:'600px',
  },
  {
    src: "https://serving.photos.photobox.com/38810894b7e10241416241d5d5999e17a71da0683e0c94a2ec8c24258c6b7df692c70327.jpg",
    altText: "Room",
    caption: "Multi Purpose Room",
    height:'300px',
    width:'600px',
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div  id="carousel">
        <Container>
        
          <Row className="justify-content-center mt-5">
            <Col lg="10" md="15" style={{backgroundColor:'rgba(0)'}}>
            
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} style={{width:'600px', height:'400px'}}/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>  
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
