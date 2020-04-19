import React from 'react'
import PropTypes from 'prop-types'

import midnight_sun from '../../../img/midnight_sun.jpg';

import ActivityInfo from '../activityInfo';

const MidnightSunHike = (props) => {
  return (
    <ActivityInfo
      background={midnight_sun}
      caption="midnight sun camping and husky hike"
      title="Explore the summer nights in Tromsø and go on a wonderful husky hike"
      included="Transportation, all meals and camping equipment"
      duration="17 hours"
      departure="21:00-14:00 the next day"
      pricing="Adults: 2199 NOK, Children: 899 NOK"
      bring="Hiking boots, fitting clothing and overnight stay equipment"
    >
      <p>
        We meet up at our centre where we will distribute camping equipment and assign dogs.
        Then we are off to one of the surrounding mountains. We set up camp at the top in order
        to get the best view of the midnight sun.
      </p>
      <p>
        After setting up camp fire up a campfire to keep ourselves warm while relax with
        the dogs in the midnight sun.
      </p>
    </ActivityInfo>
  )
}

export default MidnightSunHike
