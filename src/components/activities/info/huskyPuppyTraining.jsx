import React from 'react'
import PropTypes from 'prop-types'

import puppy_training from '../../../img/puppy_training.jpg';

import ActivityInfo from '../activityInfo';

const HuskyPuppyTraining = (props) => {
  return (
    <ActivityInfo
      background={puppy_training}
      caption="husky puppy training"
      title="Visit center with over 300 huskies and train some puppies"
      included="Transportation, rain coats, rubber boots and lunch"
      duration="5 hours"
      departure="09:00-14:00"
      pricing="Adults: 999 NOK, Children: 499 NOK"
      bring=""
    >
      <p>
        We breed our own huskies, so we get multiple litters of puppies a year. Dog sledding
        requires extensive training, which you can be a part of.
      </p>
      <p>
        The main training session is a light hike where we teach our puppies to cooperate with
        each other and humans.
      </p>
      <p>
        Upon return to our center, we will serve dinner made from local produce supplied by Eide
        Handel. The meals are primarily meat based, but we offer vegetarian options upon request.
      </p>
    </ActivityInfo>
  )
}

export default HuskyPuppyTraining
