import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header';
import Footer from '../footer';
import ActivitySidebar from './activitySidebar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import aurora from '../../img/aurora.jpg';

class Aurora extends React.Component {
  render () {
    return (
      <div className="bg-light" style={{height: "100%"}}>
        <div className="bg-white">
          <Header></Header>
        </div>
        <Container fluid="true">
          <div className="text-white cover-image" style={{
              backgroundImage: `url(${aurora})`,
            }}>
            <div className="d-flex align-items-center justify-content-center" style={{height: "50vh"}}>
              <div className="d-flex flex-column align-items-center">
                <h1 className="text-center text-wrap" style={{fontWeight: "500"}}>
                  Chase the aurora
                </h1>
              </div>
            </div>
          </div>
          <Container  className="mb-4">
            <Row>
              <Col sm={12} md={8}>
                <h2>
                  Combine dog sledding and the
                  aurora in one great adventure
                </h2>
                <p className="activity-info">
                  Experience the natural beauty of the Norwegian winter landscape from the comfort
                  of a dog sled.
                </p>
                <p className="activity-info">
                  We will bring you out and away from the city lights in our aurora bus.
                  Where you will be accompanied by a professional northern light photographer
                  who will teach you to take the best aurora photographs.
                </p>
              </Col>
              <Col sm={12} md={4}>
                <ActivitySidebar
                  included="transportation, dog sledding, lunch and hot drinks"
                  duration="9 hours for both tours"
                  departure="Sledding: 09:00-13:00, aurora tour: 18:00-01:00"
                  pricing="Adults: 1299 NOK, Children: 699 NOK"
                  bring="Warm clothing, gloves/mittens and a hat"
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default Aurora;
