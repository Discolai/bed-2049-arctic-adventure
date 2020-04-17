import React from 'react'
import PropTypes from 'prop-types'

import aurora from '../../../img/aurora.jpg';

import ActivityInfo from '../activityInfo';

const Aurora = (props) => {
  return (
    <ActivityInfo
      background={aurora}
      caption="Chase the aurora"
      title="Combine dog sledding and the aurora in one great adventure"
      included="transportation, dog sledding, lunch and hot drinks"
      duration="9 hours for both tours"
      departure="Sledding: 09:00-13:00, aurora tour: 18:00-01:00"
      pricing="Adults: 1299 NOK, Children: 699 NOK"
      bring="Warm clothing, gloves/mittens and a hat"
    >
      <p className="activity-info">
        Experience the natural beauty of the Norwegian winter landscape from the comfort
        of a dog sled.
      </p>
      <p className="activity-info">
        We will bring you out and away from the city lights in our aurora bus.
        Where you will be accompanied by a professional northern light photographer
        who will teach you to take the best aurora photographs.
      </p>
    </ActivityInfo>
  )
}

export default Aurora
