import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';

import Container from 'react-bootstrap/Container';

import blog2_aurora from "../../img/blog2_aurora.jpg"
import blog2_aperture from "../../img/blog2_aperture.jpg"
import blog2_aperture_example from "../../img/blog2_aperture_example.jpg"
import blog2_iso from "../../img/blog2_iso.jpg"
import blog2_shutter from "../../img/blog2_shutter.jpg"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faClock} from '@fortawesome/free-solid-svg-icons'

const TravelersGuideToTheAurora = (props) => {
  return (
    <div className="bg-light">
      <div className="bg-white">
        <Header></Header>
      </div>
      <Container>
        <div className="d-flex flex-column">
          <div className="text-center">
            <h1>Travelers guide to the aurora</h1>
            <small><FontAwesomeIcon icon={faUser}/> Kevin Jensen</small>
            <small className="ml-2"><FontAwesomeIcon icon={faClock}/> March 20, 2020</small>
          </div>
          <img className="my-4" src={blog2_aurora}></img>
          <div className="blog-text text-left">
            <h2>What are polar lights?</h2>
            <p>
              This green sometimes purple glow that trails over the skies,
              it almost looks like magic. It is actually the sun that is
              behind this lightshow. Every time a solar flair occurs it
              slingshot charged particles out in space around it with
              almost the speed of light.
            </p>

            <p>
              When this flair is directed towards earth the particles
              will at some time reach us, when they hit earths magnetic
              field they are directed towards the poles where they collide
              with millions of molecules in earths upper atmosphere.
              When this happens they will emit light with different color
              based on which molecule it hits.
            </p>

            <p>
              This process is very similar to how neon signs work,
              the tubes in neon signs are filled with gasses that get
              bombarded with charged particles from the power outlets
              to produce light.
            </p>

            <p>
              If you want to learn more in detail how this and many
              other weather phenomenons that can occur when visiting
              you can download our e-book below:
            </p>

            <div>
              <a className="text-secondary mr-2">
                Arctic phenomenons
              </a>
              <button className="btn btn-secondary" type="button">Download</button>
            </div>

            <h2>Photographing the northern lights</h2>

            <p>
              Taking extraordinary northern light images can be tricky,
              but with a little trial and error you too can take stunning pictures.
            </p>

            <p>
              You don’t need the most expensive camera in order to take good pictures,
              but a full frame sensor is recommended. Before we do a deep dive into
              the optimal settings for your camera we will do a crash course of the
              four aspects of a camera which is shutter speed, aperture, ISO and focus.
            </p>

            <h3>Shutter speed</h3>

            <p>
              The shutter speed of a camera determine determines how long a camera
              should collect light, the reason this is called shutter is because of
              the mechanism that is present on a Single-lens Reflex Cameras (SLR)
              and its digital counterpart DSLR
            </p>


            <img src={blog2_shutter}/>

            <p>
              The shutter in essence is a mirror that redirect light into the viewfinder,
              and when the shutter button is pressed the mirror lifts and the light hits
              the sensor and collect photons for a limited amount of time and produces a
              picture. The longer the shutter stays open the brighter the image gets and
              vice versa. When longer shutter speeds are used it is recommended to use a
              tripod to reduce shaking that becomes very visible with longer shutter speeds.
            </p>

            <h3>Aperture</h3>

            <p>
              Aperture is how big the opening is for light and is located in the lens itself.
              The aperture essentially determines how much light hits the sensor and the depth
              of field in the image. This value is called an f-stop and a big value means little
              light and a deep depth of field, and a small value gives a shallow depth of field
              and more light.
            </p>

            <img src={blog2_aperture}/>

            <p>
              For portraits we usually have lenses that have a low f-stop value as this can create
              portraits that have a blurred background. A low f-stop is also preferred for night
              time photos as we want to collect as much light as possible in the shortest amount
              of time.
            </p>

            <p>
              Below we have an example of what could be a portrait lens. The sunflower on the
              left has a blurry background because of the big aperture and the one on the right
              captures more details from the background due to the small aperture. Fun fact is
              that this is the same way our pupils work in bright and low light conditions
            </p>

            <img src={blog2_aperture_example}/>

            <p>
              What needs to be considered here is that we need to tweak shutter speed as well.
              In the sunflower example we would need a faster shutter speed on the blurred image
              than the one on the right in order to get the same light level in the two images.
            </p>

            <h3>ISO</h3>

            <p>
              ISO is a digital setting of how sensitive the  light sensor chip in the camera
              should be. In dark environments we would like to turn up the ISO in order to brighten
              an image. Its sounds tempting to crank this up when photographing at night to take nice
              and bright images of the northern lights for example.
            </p>

            <p>
              ISO has a price, and the cost depends on the camera. In general, higher end cameras handle
              higher ISO values better. When turning up this value we get a brighter image, but we get
               more noise as well, and this is proportional. If you look at the example below we both get
               more noise on the higher values, but as a consequence we also loose details. Here we also
               have to mix and match the different aspects to get the desired result.
            </p>

            <img src={blog2_iso}/>

            <h3>Focus</h3>

            <p>
              Most people that have held a camera knows how to focus, but system cameras usually have a
              manual focus setting, this is ideal especially in the dark. When photographing the northern
              light or any other celestial scenes at night the ideal setting is infinity if your lens supports
              it. This will give the sharpest images as the camera continues to focus throughout the exposure,
              and it can be left on this setting since it might be hard to focus in the pitch black night.
              If the lens supports infinity the zoom usually have an infinity symbol somewhere.
            </p>

            <h2>The ultimate guide</h2>

            <p>
              The sad truth is that there is no exact answer on which settings for which camera, here it is
              some trial and error, but the general recipe is simple.
            </p>

            <p>
              We would like to have a long shutter speed, a couple of seconds is nice. This depends on
              how bright the northern light is and how much details you want. Shorter shutter speed gives
              less light but a lot of details, and longer gives brighter northern light, but might have less
              details. A great place to start is 2-8 seconds to see what suits your camera and lens.
            </p>

            <p>
              We want a wide aperture (low f-stop number) so we get most light in the shortest amount of
              time. But a lens is usually sharpest a few f-stops from the lowest it can go, but for good
              northern light images you should aim for a lens that has a lowest f-stop value of f/2.8 this
              gives a good balance of depth of field and the amount of light it takes in. If you do not have
              a good enough lens that goes so far down, most kit-lenses have f/3.5 as the lowest value,
              this is ok, but the shutter speed need to be slower and iso might be set a little higher.
            </p>

            <p>
              And finally the ISO, This is probably the setting that highly depends on the camera, but
              somewhere from 800 and up is a good place to start, a more expensive camera or a full
              frame one would be able to go as high as ISO 12800 before any significant amount of noise starts to appear.
            </p>

            <p>
              So to sum it up, begin with shutter speed 2-8 seconds, aperture as wide as the lens goes, and ISO 800 to begin.
            </p>

            <div>
              <div>Help us get better by answering these short questions</div>
              <strong>How good is your current camera knowledge?</strong>

              <form className="form">
                <div className="form-check">
                  <input className="form-check-input" id="very_good" type="radio"/>
                  <label className="form-check-label" for="very_good">Very good</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" id="good" type="radio"/>
                  <label className="form-check-label" for="good">Good</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" id="average" type="radio"/>
                  <label className="form-check-label" for="average">Average</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" id="bad" type="radio"/>
                  <label className="form-check-label" for="bad">Bad</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" id="very_bad" type="radio"/>
                  <label className="form-check-label" for="very_bad">Very bad</label>
                </div>

                <div className="mt-2">
                  <label for="camera"><strong>Which camera are you using today?</strong></label>
                  <input className="form-control"></input>
                </div>

                <div className="mt-2">
                  <label for="rating"><strong>Did you find this quick guide useful?</strong></label>
                    <div className="form-check">
                      <input className="form-check-input" id="yes" type="radio"/>
                      <label className="form-check-label" for="yes">Yes</label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" id="no" type="radio"/>
                      <label className="form-check-label" for="no">No</label>
                    </div>
                </div>

                <button className="mt-2 btn btn-secondary">Submit</button>
              </form>
            </div>

            <div>
              <div>Previous post</div>
              <Link className="text-secondary" to="/blog/the_norwegian_way"><h4 className="text-bold">The Norwegian way</h4 ></Link>
            </div>
          </div>

        </div>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default TravelersGuideToTheAurora
