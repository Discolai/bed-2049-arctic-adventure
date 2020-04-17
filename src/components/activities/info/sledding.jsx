import React from 'react'
import PropTypes from 'prop-types'

import sledding from '../../../img/sledding.jpg';

import ActivityInfo from '../activityInfo';

const Sledding = (props) => {
  return (
    <ActivityInfo
      background={sledding}
      caption="Husky dog sledding"
      title="Enjoy your ride across the beatiful winter landscape"
      included="Transportation, dog sledding, lunch, and thermal suits"
      duration="Sledding: 60 minutes, Dog yard: 30 minutes"
      departure="17:00-13:00 the next day"
      pricing="Adults: 1399 NOK, Children: 699 NOK"
      bring="Gloves/mittens and a hat"
    >
      <p className="activity-info">
        Please
      </p>
      <p className="activity-info">
        fill
      </p>
      <p className="activity-info">
        me
      </p>
    </ActivityInfo>
  )
}

export default Sledding
