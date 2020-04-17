import React from 'react'
import PropTypes from 'prop-types'

import puppy_training from '../../../img/puppy_training.jpg';

import ActivityInfo from '../activityInfo';

const HuskyPuppyTraining = (props) => {
  return (
    <ActivityInfo
      background={puppy_training}
      caption="husky puppy training"
      title="Visit our dog yard with over 300 huskies and train some puppies"
      included="Transportation, rain coats, rubber boots and lunch"
      duration="5 hours"
      departure="09:00-14:00"
      pricing="Adults: 999 NOK, Children: 499 NOK"
      bring=""
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

export default HuskyPuppyTraining
