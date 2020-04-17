import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class BookingItem extends React.Component {
  render () {
    const {background, title, href} = this.props;

    return (
      <div className="booking-container">
        <Link className="text-decoration-none text-capitalize text-white" to={href}>
          <img className="booking-image" src={background}>
          </img>
          <div className="booking-centered-text">
            <h4>
              {title}
            </h4>
          </div>
        </Link>
      </div>
    );
  }
}

export default BookingItem;
