import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../header';
import Footer from '../../footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import husky_puppies from '../../../img/husky_puppies.jpg';
import puppies_snow from '../../../img/puppies_snow.jpg';

const HuskyCafe = (props) => {
  return (
    <div className="bg-light" style={{height: "100%"}}>
      <div className="bg-white">
        <Header></Header>
      </div>
      <Container fluid="true">
        <div className="text-white cover-image" style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${husky_puppies})`,
          }}>
          <div className="d-flex align-items-center justify-content-center" style={{height: "50vh"}}>
            <div className="d-flex flex-column align-items-center">
              <h1 className="text-center text-wrap" style={{fontWeight: "800"}}>
                Husky puppy café
              </h1>
            </div>
          </div>
        </div>
        <Container  className="mb-4">
          <Row>
            <Col className="activity-container" sm={12} md={7}>
              <h2>Relax in our cafe while snuggling with husky puppies</h2>
              <div className="activity-info">
                <p>
                  Visit our husky pen and pet their puppies for free! They love
                  meeting people and cannot wait to make new friends.
                  We serve a wide range of pastry, coffe, waffles and sausages.
                </p>
              </div>
            </Col>
            <Col className="activity-container" sm={12} md={5}>
              <img src={puppies_snow}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default HuskyCafe
