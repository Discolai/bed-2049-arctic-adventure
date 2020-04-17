import React from 'react'
import PropTypes from 'prop-types'

import bonfire from '../../../img/bonfire.jpg';

import ActivityInfo from '../activityInfo';

const AuroraCamp = (props) => {
  return (
    <ActivityInfo
      background={bonfire}
      caption="Aurora camp and dog sledding"
      title="For the ones who want more than a regular aurora tour"
      included="transportation, dog sledding, breakfast, all meals, and thermal suits"
      duration="Overnight stay in a lavvo-tent"
      departure="17:00-13:00 the next day"
      pricing="Adults: 2899 NOK, Children: 1399 NOK"
      bring="Thermal underwear, gloves/mittens, hat and additional camping equipment"
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

export default AuroraCamp
