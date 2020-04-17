import React from 'react'
import PropTypes from 'prop-types'

const InfoElement = (props) => {
  const {left, right} = props;
  return (
    <div>
      <span className="sel-left">&nbsp;{left}&nbsp;</span>
      <span className="sel-right">{right}</span>
    </div>
  )
}

export default InfoElement
