import React from 'react'
import PropTypes from 'prop-types'
import Header from './header';
import Footer from './footer';
import ReviewElement from './reviewElement';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


import background from '../img/home_background.jpg';
import homecooking from '../img/homecooking.jpg';
import weeds from '../img/weeds.jpg';


class Home extends React.Component {
  state = {
    reviews: [
      {
        message: "Dånt nåw inglish, men fikk ta med rulatoren på tur.",
        stars: 6,
        name: "Hulder",
        age: 82
      },
      {
        message: "Great adventures even for us with walking sticks",
        stars: 5,
        name: "Åse",
        age: 60
      },
      {
        message: "How dare you provide such nice value",
        stars: 4,
        name: "Gretha",
        age: 16
      },
    ]
  }

  render () {
    const slides = this.state.reviews.map(review => (
      <ReviewElement key={review.name} review={review}></ReviewElement>
    ));
    return (
      <div className="bg-light">
        <div className="bg-white">
          <Header></Header>
        </div>
        <Container fluid="true">
          <div className="text-white" style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              height: "70vh",
            }}>
            <div className="d-flex align-items-center justify-content-center" style={{height: "60vh"}}>
              <div className="d-flex flex-column">
                <h1 className="text-center mx-auto">Find your next adventure</h1>
                <a
                  className="mt-4 mx-auto btn btn-lg btn-secondary text-capitalize"
                  href="/booking"
                >
                  book now
                </a>
                <Carousel className="mt-4">
                  <Carousel.Item className="text-black">
                    <Carousel.Caption>
                      <i>"Dånt nåw inglish, men fikk ta med rulatoren på tur."</i>
                      <small className="text-white ">
                        Hulder (82)
                      </small>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item className="text-black">
                    <Carousel.Caption>
                      <i>"Great adventures even for us with walking sticks"</i>
                      <small className="text-white ">
                        Åse (60)
                      </small>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item className="text-black">
                    <Carousel.Caption>
                      <i>"How dare you provide such nice value"</i>
                      <small className="text-white ">
                        Gretha (16)
                      </small>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="d-flex">
              <div>
                <h2>Experience Tromsø – The local way</h2>
                <Row className="align-items-center">
                  <Col xs={12} sm={6} md={6} style={{maxWidth: "300px", maxHeight: "200px"}}>
                    <img src={homecooking} style={{maxWidth: "100%", maxHeight: "100%"}}></img>
                  </Col>
                  <Col xs={12} sm={6} md={6}>
                    <p>
                      A stay with us does not only include the marvelous outside. Experience the essence of
                      Norwegian hospitality with fireplaces and true home cooking with the people who knows it the most.
                    </p>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col xs={12} sm={6} md={6}>
                    <p>
                      No matter if you drop by in the summer months or
                      if you prefer the cold arctic freshness of the winter time
                    </p>
                  </Col>
                  <Col xs={12}  sm={6} md={6} style={{maxWidth: "300px", maxHeight: "200px"}}>
                    <iframe
                      type="text/html"
                      src="https://www.youtube.com/embed/-eXifjiAfZc?version=3&amp;rel=1&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent"
                      allowFullScreen={true}
                      style={{maxWidth: "100%", maxHeight: "100%"}}
                      >
                    </iframe>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}
// {
//   message: "Great adventures even for us with walking sticks",
//   stars: 5,
//   name: "Åse",
//   age: 60
// },
// {
//   message: "How dare you provide such nice value",
//   stars: 4,
//   name: "Gretha",
//   age: 16
// },
export default Home;
