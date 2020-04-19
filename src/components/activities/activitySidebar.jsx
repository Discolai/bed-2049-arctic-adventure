import React from 'react'
import PropTypes from 'prop-types'

class ActivitySidebar extends React.Component {
  render () {
    const {included, duration, departure, pricing, bring} = this.props;
    return (
      <div>
        {
          included ? (
            <p>
              <strong>Included: </strong>{included}
            </p>
          ) : null
        }
        {
          duration ? (
            <p>
              <strong>Duration: </strong>{duration}
            </p>
          ) : null
        }
        {
          departure ? (
            <p>
              <strong>Departure and return: </strong>{departure}
            </p>
          ) : null
        }
        {
          pricing ? (
            <p>
              <strong>Pricing: </strong>{pricing}
            </p>
          ) : null
        }
        {
          bring ? (
            <p>
              <strong>Please bring: </strong>{bring}
            </p>
          ) : null
        }
        <button className="btn btn-secondary">Book now</button>
      </div>

    );
  }
}

export default ActivitySidebar;
