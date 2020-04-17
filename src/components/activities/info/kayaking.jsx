import React from 'react'
import PropTypes from 'prop-types'

import kayak from '../../../img/kayak.jpg';

import ActivityInfo from '../activityInfo';

const Kayaking = (props) => {
  return (
    <ActivityInfo
      background={kayak}
      caption="Sea kayaking"
      title="Explore the fjords surrounding Tromsø under the midnight sun"
      included="Transportation, dinner, kayaking equipment"
      duration="5 hours"
      departure="21:00-02:00"
      pricing="Adults: 1399 NOK, Children: 699 NOK"
      bring="Warm clothes, sunglasses, sneakers, a dry change of clothes"
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

export default Kayaking
