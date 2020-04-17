import React from 'react'
import PropTypes from 'prop-types'

import tent from '../../../img/tent.jpg';

import ActivityInfo from '../activityInfo';

const HuskyOvernight = (props) => {
  return (
    <ActivityInfo
      background={tent}
      caption="Husky overnight expedition"
      title="A unique experience for true explorers"
      included="Transportation, dog sledding, all meals, and sledding equipment"
      duration="Overnight sledding expedition"
      departure="09:00-16:00 the next day"
      pricing="Adults: 5699 NOK, Children: 3499 NOK"
      bring="thermal underwear and socks, gloves/mittens, hat and additional camping equipment"
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

export default HuskyOvernight
