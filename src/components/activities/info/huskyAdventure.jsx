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
      <p>
        Experience the exciting life of a musher and explore the mountains surrounding
        Tromsø in a dog sled. Each guest <span className="text-danger">16 years or older</span>
        will be assigned their own sled and band of huskies. Children under the age of 16 can
        join an adult in their sled.
      </p>
      <p>
        The tour lasts around 6 hours and the route is assesed according to your skills
        and the weather conditions. We will take regular breaks during our trip to take
        pictures, eat and drink. Upon return to our center, we will serve dinner made
        from local produce supplied by Eide Handel. The meals are primarily meat based,
        but we offer vegetarian options upon request.
      </p>
    </ActivityInfo>
  )
}

export default HuskyAdventure
