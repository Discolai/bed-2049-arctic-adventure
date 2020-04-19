import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ActivityItem from './activityItem';

import styled from 'styled-components';

// Winter
import aurora from '../../img/aurora.jpg';
import bonfire from '../../img/bonfire.jpg';
import husky from '../../img/husky.jpg';
import sledding from '../../img/sledding.jpg';
import tent from '../../img/tent.jpg';
import skiing from '../../img/skiing.jpg';

// Summer
import husky_puppies from '../../img/husky_puppies.jpg';
import kayak from '../../img/kayak.jpg';
import midnight_sun from '../../img/midnight_sun.jpg';
import puppy_training from '../../img/puppy_training.jpg';



class Activities extends React.Component {
  render () {
    return (
      <div className="bg-light" style={{height: "100%"}}>
        <div className="bg-white">
          <Header></Header>
        </div>
        <Container>
          <div className="d-flex flex-column">
            <h1 className="text-capitalize">winter activities</h1>
            <Row className="mt-4">
              <Col xs={12}  sm={6} md={6} lg={4}>
                <ActivityItem background={aurora} title="chase the aurora" href="/activities/aurora"></ActivityItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <ActivityItem background={bonfire} title="Lavvo camp and dog sledding" href="/activities/aurora_camp"></ActivityItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <ActivityItem background={sledding} title="Husky dog sledding" href="/activities/sledding"></ActivityItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <ActivityItem background={husky} title="husky full day adventure" href="/activities/husky_adventure"></ActivityItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <ActivityItem background={tent} title="husky overnight expedition" href="/activities/husky_overnight"></ActivityItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <ActivityItem background={husky_puppies} title="husky puppy Café" href="/activities/husky_cafe"></ActivityItem>
              </Col>
            </Row>
          </div>

          <div className="d-flex flex-column my-4">
            <h1 className="text-capitalize">Summer activities</h1>
            <Row className="mt-4">
              <Col xs={12}  sm={6} md={6} lg={4}>
                <ActivityItem background={kayak} title="sea kayaking" href="/activities/kayaking"></ActivityItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <ActivityItem background={midnight_sun} title="midnight sun husky hike" href="/activities/midnight_sun_hike"></ActivityItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <ActivityItem background={puppy_training} title="husky puppy training" href="/activities/husky_puppy_training"></ActivityItem>
              </Col>
              <Col xs={12}  sm={6} md={6} lg={4}>
                <ActivityItem background={husky_puppies} title="husky Puppy Café" href="/activities/husky_cafe"></ActivityItem>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default Activities;
