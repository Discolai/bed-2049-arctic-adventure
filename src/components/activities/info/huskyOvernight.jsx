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
      <p>
        Enjoy a two day sledding experience with a refreshing overnight stay in the
        Norwegian winter wilderness.
      </p>
      <p>
        Before we set out, you will be given a full guide on dog sledding and how to manage
        "your" band of huskies. Then we will set out for about 6-8 hours of sledding with
        regular breaks before we set camp for the night.
      </p>
      <p>
        Upon return to our center you will be greeted with Finnbiff, a traditional Sami
        dish made from reindeer meat, but we offer vegetarian options upon request.
      </p>
    </ActivityInfo>
  )
}

export default HuskyOvernight
