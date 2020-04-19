import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';

import Container from 'react-bootstrap/Container';

import blog1_aurora from "../../img/blog1_aurora.jpg"
import blog1_campfire from "../../img/blog1_campfire.jpg"
import blog1_digitalbooker from "../../img/blog1_digitalbooker.png"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faClock} from '@fortawesome/free-solid-svg-icons'


const TheNorwegianWay = (props) => {
  return (
    <div className="bg-light">
      <div className="bg-white">
        <Header></Header>
      </div>
      <Container>
        <div className="d-flex flex-column">
          <div className="text-center">
            <h1>The Norwegian way</h1>
            <small><FontAwesomeIcon icon={faUser}/> Kevin Jensen</small>
            <small className="ml-2"><FontAwesomeIcon icon={faClock}/> March 11, 2020</small>
          </div>
          <img className="my-4" height="400px" src={blog1_aurora}></img>
          <div className="blog-text text-left">
            <p>
              The aurora dancing over the night sky is one of the most
              amazing things you can experience in Tromsø during the winter
              season. It can be experienced throughout most of Tromsø, but
              you get the best experience out in the wilderness where you
              are not disturbed by street lights etc. Combine this with dog
              sledding and you get the perfect arctic experience for the whole
              family. We also offer snowmobile rides to our favourite northern
              light observation locations for those who would prefer that over
              dog sledding.
            </p>

            <h3>Clothing is essential to have a pleasant experience</h3>

            <p>
              Remember that Tromsø can be quite cold during the winter season.
              We serve hot cocoa and hot coffee upon arrival, but it is also
              essential to bring warm clothes such as:
            </p>

            <ul>
              <li>a winter cap</li>
              <li>mittens or gloves</li>
              <li>winter shoes</li>
              <li>preferably a thermal suit</li>
            </ul>

            <p>
              In Norway we cherish nature, there is no doubt that the outsides
              in Tromsø is unique. Its unpredictable. The sun may peek through
              heavy rain, snowing from almost clear skies. There is no limit to
              the weirdness of the weather, but it is also an experience.
            </p>

            <img src={blog1_campfire}/>

            <h3>All countries have their signature coffee</h3>

            <p>
              You have probably dined out hundreds of times, but have you ever
              eaten outside? Northern lights, a bonfire and late dinner cooked
              on open flames. The black gold of any norwegian bonfire, bålkaffe
              which is coffee made in a kettle over open flames and coffee thrown
              straight in the pot, without filters, raw, bold flavors. Ask anyone,
              there is nothing like bålkaffe. Dishes cooked on a bonfire is just as
              special, you have to try it to believe it.
            </p>

            <p>
              Thousands of people every year are lucky enough to get to visit Tromsø.
              With an increasing demand for places to stay and things to do in our arctic
              town it is not necessarily so that all that want to visit get the chance
              in the busiest of times. We want to make a difference and give all of you
              a chance, not only to stay with us, but to give you the experience of a lifetime.
            </p>

            <p>
              Did you know that almost 80% of all norwegians have once in their lifetime have
              slept in a lavo or a tent outside, and spoiler alert, you can too. Here at Tromsø
              Arctic Adventures we will tailor your stay to accommodate your highest of expectations.
              You can read more about this below.
            </p>

            <h2>We have a surprise!</h2>

            <img src={blog1_digitalbooker}/>

            <p>
              Finding new places, experiencing different cultures and delving deeply into the
              stories of other humans is what makes an adventure. It connects people around the
              world, and brings us an understanding of how others have become what they are today.
            </p>

            <p>
              Because of this desire to find new, exciting, and different worlds of what we normally
              experience on a day to day basis it is crucial to have easy access to travel wide and far.
              We want to bring you an easy solution to make sure you get the experience you desire with
              only a few easy clicks.
            </p>

            <p>
              This is why the Arctic Adventure team are thrilled to present our <strong>newly made and easy to use
              booking system</strong>. Tromsø Arctic Adventure will guarantee you an easy and user friendly booking
              experience with our professionally custom made traveling guide. Wherever you are in the world,
              our system will make sure to get you the right flights from your position. Whether you are
              from Asia, North-America or Oceania, we want to make the experience to book flights from
              your country to Tromsø as easy as possible.
            </p>

            <p>
              With just a few clicks, you can now choose your location, and we can show you the
              easiest methods of transport to Tromsø.
            </p>

            <p>
              While in your hotell, based on what experience package you’ve chosen to do, there will always
              be some sort of transportation method available to get you to your desired location.
              If there are a lot of people going to the same excursion, there will be buses from the hotel.
              There will also be arranged personalized pick up if there are smaller groups, in or round Tromsø.
            </p>

            <div>
              <p>
                Check out our traveling guide below:
              </p>
              <button className="btn btn-secondary">Travelling guide</button>
            </div>

            <h2>Come closer to nature</h2>

            <p>
              We want to finish off with some tips on how you can bring yourself closer to nature in
              everyday situations
            </p>

            <p>
              Some say nature is where we belong, not the inner city where daily stress and obligations decide
              what our day will look like. In Arctic Adventures we agree, nature is the ultime home of human
              beings. Nature sets us free, nature heals us. For some people, it might seem like nature has
              become some long lost friend, or a foreign concept. Arctic Adventure are here to help you
              reconnect, we want you to get closer to nature by exploring it, by stepping outside of the
              box. Our experienced guides takes you to the most astounding of places in Tromsø, whether it
              be by snowmobile, dog sledding or just plain old mountain hiking.
            </p>

            <p>
              We all know that the experience of the outdoors can be hard to achieve in a busy day to day life.
              That’s why the Arctic Adventure team has put together a list of things you can do at even the busiest
              of times.
            </p>

            <h3>Bring nature to you</h3>

            <p>
              Even though nature might be a lifestyle for some and a dream for others, realizing that lifestyle
              changes starts of by doing the smaller things first, start with the doable. Have some plants in your
              living room, buy some roses, there are many ways to make your most usual environments feel like a
              stress free oasis. Feeling peace and serenity without having to be a kilometer over the sea level
              on a mountain top, is still peace and serenity.
            </p>

            <h3>Nurture curiosity</h3>

            <p>
              The most important quality of a person to enjoy an adventure, whether arctic or not, is without a
              doubt curiosity. Have you ever wondered what might be behind that mountain? inside that wooded area?
               Nurture that curiosity! Find an area you find aesthetically pleasing and explore it with a youthful
               state of mind, see what you find, what lives there. If exploring the area seems to be to much of a
               time consuming thing, go home put on some music and open a good wine. Imagine what being there could
               be like. Someday you might just find yourself too curious to not explore it.
            </p>

            <h3>Consider adopting a dog</h3>

            <p>
              Pets brings us joys in ways we cannot explain, and dogs are notorious for loving a good walk outside.
              Adopting a dog might help you reconnect with nature, just by the simple fact that the little furry friend
              will drag you outside everyday. Soon enough you will do long trips and adventures together.
            </p>

            <h3>Bring your loved ones!</h3>

            <p>
              Last tip, bring your family. Whenever you are planning to go outside, bring your loved ones. Nature is good,
              but even better when shared with the people that means the most. This will not only get you closer to nature,
              but it will more importantly get you closer to your loved ones by sharing the blissful feeling of the outdoors.
            </p>

            <div>
              <div>Next post</div>
              <Link className="text-secondary" to="/blog/travelers_guide_to_the_aurora"><h4 className="text-bold">Travelers guide to the aurora</h4 ></Link>
            </div>

          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default TheNorwegianWay
