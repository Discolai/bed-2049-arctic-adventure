import React from 'react'
import PropTypes from 'prop-types'

class BookingItem extends React.Component {
  render () {
    const {background, title, href} = this.props;

    return (
      <div className="booking-container">
        <a className="text-decoration-none text-capitalize text-white" href={href}>
          <img className="booking-image" src={background}>
          </img>
          <div className="booking-centered-text">
            <h5>
              <strong>{title}</strong>
            </h5>
          </div>
        </a>
      </div>
    );
  }
}

export default BookingItem;
