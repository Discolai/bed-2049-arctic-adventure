import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube, faTripadvisor} from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render () {
    return (
      <div className="footer d-flex justify-content-around">
        <div className="d-flex flex-column align-items-center">
          <h4 className="mb-2 ">Contact us</h4>
          <div>Imaginary Road 19</div>
          <div>4567 Somewhere</div>
          <div>City, Country</div>
          <div>Phone: <u>+47 999 99 999</u></div>
          <div>Email: <u>mail@arcticadventure.com</u></div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h4 className="mb-2 ">Social</h4>
          <a className="text-decoration-none" href="#"><FontAwesomeIcon size="lg" icon={faTripadvisor}></FontAwesomeIcon></a>
          <a className="text-decoration-none" href="#"><FontAwesomeIcon size="lg" icon={faFacebook}></FontAwesomeIcon></a>
          <a className="text-decoration-none" href="#"><FontAwesomeIcon size="lg" icon={faInstagram}></FontAwesomeIcon></a>
          <a className="text-decoration-none" href="#"><FontAwesomeIcon size="lg" icon={faYoutube}></FontAwesomeIcon></a>
        </div>
      </div>
    );
  }
}

export default Footer;
