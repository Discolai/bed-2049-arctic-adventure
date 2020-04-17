import React from 'react'
import PropTypes from 'prop-types'

import husky from '../../../img/husky.jpg';

import ActivityInfo from '../activityInfo';

const HuskyAdventure = (props) => {
  return (
    <ActivityInfo
      background={husky}
      caption="Husky full day adventure"
      title="Explore the mountains and valleys surrounding Tromsø in a dogsled"
      included="Transportation, dog sledding, lunch, dinner, and sledding equipment"
      duration="Sledding: 6 hours"
      departure="09:00-15:00"
      pricing="Adults: 2699 NOK, Children: 1599 NOK"
      bring="thermal underwear and socks, gloves/mittens and a hat"
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

export default HuskyAdventure
