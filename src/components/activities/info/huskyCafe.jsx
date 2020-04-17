import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../header';
import Footer from '../../footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import husky_puppies from '../../../img/husky_puppies.jpg';

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
          <h2>Relax in our cafe with some coffee or cake</h2>
          <p className="activity-info">
            Please
          </p>
          <p className="activity-info">
            fill
          </p>
          <p className="activity-info">
            me
          </p>
        </Container>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default HuskyCafe
