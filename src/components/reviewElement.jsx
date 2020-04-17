import React from 'react'
import PropTypes from 'prop-types'

import Carousel from 'react-bootstrap/Carousel'

class ReviewElement extends React.Component {
  render () {
    const {message, stars, name, age} = this.props.review;

    return (
      <Carousel.Item className="text-white">
        <Carousel.Caption>
          <h1>njaa</h1>
          <small className="text-muted">
            boi (eyy)
          </small>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}
// <Carousel.Item className="text-white">
//   <Carousel.Caption>
//     <h1>"{message}"</h1>
//     <small className="text-muted">
//       {name} ({age})
//     </small>
//   </Carousel.Caption>
// </Carousel.Item>

export default ReviewElement;
