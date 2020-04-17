import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BookingItem from './bookingItem';

import styled from 'styled-components';

import aurora from '../../img/aurora.jpg';
import bonfire from '../../img/bonfire.jpg';
import husky from '../../img/husky.jpg';
import sledding from '../../img/sledding.jpg';
import tent from '../../img/tent.jpg';
import skiing from '../../img/skiing.jpg';

class Booking extends React.Component {
  render () {
    return (
      <div className="bg-light" style={{height: "100vh"}}>
        <div className="bg-white">
          <Header></Header>
        </div>
        <Container className="p-4" fluid="true">
          <div className="d-flex flex-column">
            <h1 className="text-capitalize">winter activities</h1>
            <Row className="mt-4">
              <Col xs={12}  sm={6} md={6} lg={4}>
                <BookingItem background={aurora} title="aurora chasing" href="#"></BookingItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <BookingItem background={bonfire} title="Aurora campfire and dog sledding" href="#"></BookingItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <BookingItem background={sledding} title="afternoon dog sledding" href="#"></BookingItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <BookingItem background={husky} title="husky full day adventure" href="#"></BookingItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <BookingItem background={tent} title="husky overnight expedition" href="#"></BookingItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <BookingItem background={skiing} title="Alpine ski trip" href="#"></BookingItem>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default Booking;
