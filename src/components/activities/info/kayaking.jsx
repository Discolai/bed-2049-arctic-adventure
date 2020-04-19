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
      duration="6 hours"
      departure="20:00-02:00"
      pricing="Adults: 1399 NOK, Children: 699 NOK"
      bring="Warm clothes, sunglasses, sneakers, a dry change of clothes"
    >
      <p>
        Experience the unique midnight sun and the beatiful fjords surrounding
        Tromsø to the sound of nothing, but the slight splashes of the ocean and
        the circling sea birds.
      </p>
      <p>
        We serve dinner at our centre before we set out from our center.
        The meals are primarily meat based, but we offer vegetarian
        options upon request.
      </p>
      <p>
        We supply you with double kayaks, which are ideal for beginners. We offer single
        kayaks for the more experienced guests upon request.
      </p>
    </ActivityInfo>
  )
}

export default Kayaking
