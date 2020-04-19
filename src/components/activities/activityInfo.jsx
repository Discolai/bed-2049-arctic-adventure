import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header';
import Footer from '../footer';
import ActivitySidebar from './activitySidebar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ActivityInfo extends React.Component {
  render () {
    const {
      background,
      caption,
      title,
      children,
      included,
      duration,
      departure,
      pricing,
      bring
    } = this.props;

    return (
      <div className="bg-light" style={{height: "100%"}}>
        <div className="bg-white">
          <Header></Header>
        </div>
        <Container fluid="true">
          <div className="text-white cover-image" style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`
            }}>
            <div className="d-flex align-items-center justify-content-center" style={{height: "50vh"}}>
                <div className="d-flex flex-column align-items-center">
                <h1 className="text-capitalize cover-image-top text-center text-wrap" style={{fontWeight: "800"}}>
                  {caption}
                </h1>
                <button className="mt-4 btn btn-lg btn-secondary">Book now</button>
              </div>
            </div>
          </div>
          <Container className="mb-4">
            <Row>
              <Col className="activity-container" sm={12} md={8}>
                <h2>{title}</h2>
                <div className="activity-info">
                  {children}
                </div>
              </Col>
              <Col sm={12} md={4}>
                <ActivitySidebar
                  included={included}
                  duration={duration}
                  departure={departure}
                  pricing={pricing}
                  bring={bring}
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

export default ActivityInfo;
