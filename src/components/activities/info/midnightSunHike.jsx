import React from 'react'
import PropTypes from 'prop-types'

import midnight_sun from '../../../img/midnight_sun.jpg';

import ActivityInfo from '../activityInfo';

const MidnightSunHike = (props) => {
  return (
    <ActivityInfo
      background={midnight_sun}
      caption="midnight sun husky hike"
      title="Explore the summer nights in Tromsø and go on a wonderful husky hike"
      included="Transportation, all meals and camping equipment"
      duration="17 hours"
      departure="21:00-14:00 the next day"
      pricing="Adults: 2199 NOK, Children: 899 NOK"
      bring="Hiking boots, fitting clothing and overnight stay equipment"
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

export default MidnightSunHike
