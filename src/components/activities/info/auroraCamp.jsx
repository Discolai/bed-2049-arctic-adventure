import React from 'react'
import PropTypes from 'prop-types'

import bonfire from '../../../img/bonfire.jpg';

import ActivityInfo from '../activityInfo';

const AuroraCamp = (props) => {
  return (
    <ActivityInfo
      background={bonfire}
      caption="Lavvo camp and dog sledding"
      title="For the ones who want more than a regular aurora tour"
      included="transportation, dog sledding, breakfast, all meals, and thermal suits"
      duration="Overnight stay in a lavvo-tent"
      departure="17:00-13:00 the next day"
      pricing="Adults: 2899 NOK, Children: 1399 NOK"
      bring="Thermal underwear, gloves/mittens, hat and additional camping equipment"
    >
      <p className="activity-info">
        We start the tour in our dog yard, where you get to meet and cuddle with our
        alaskan huskies. Afterwards we serve dinner made from local produce supplied
        by Eide Handel. The meals are primarily meat based, but we offer vegetarian
        options upon request.
      </p>
      <p className="activity-info">
        You can then spend the time before we go sledding around a bonfire.
        Our center is located away from the city lights in order to give you
        the best experience possible.
      </p>
      <p className="activity-info">
        We take you out sledding around 20:00, as this is the ideal time to observe
        the aurora surrounding our center.
      </p>
      <p>
        We bring you back around midnight, where you will be greeted by wonderfully
        reindeer skin furnished lavvos to spend the night.
      </p>
    </ActivityInfo>
  )
}

export default AuroraCamp
