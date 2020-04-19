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
      departure="09:00:00-10:00"
      pricing="Adults: 1399 NOK, Children: 699 NOK"
      bring="Gloves/mittens and a hat"
    >
      <p>
        Relax in your sled while one of our experienced mushers drive you
        across the beatiful winter landscape surrounding Tromsø. This is the ideal
        trip for taking gorgeous pictures, bringing your family or just relax comfortably.
      </p>
      <p>
        We provide you with thermal suits and boots before departure so you keep
        nice and warm. You are then assigned a guide who will take you for a 60 minute
        drive. Guest over 16 years old will be offered a chance to drive the sled.
      </p>
      <p>
        Upon return to our center, we will bring you to our dog yard where you can
        pet and snuggle with our alaskan huskies to your hearts desire.
      </p>
    </ActivityInfo>
  )
}

export default Sledding
