import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import pjson from '../package.json';

import Home from './components/home';

import Activities from './components/activities/activities';
import Aurora from './components/activities/info/aurora';
import AuroraCamp from './components/activities/info/auroraCamp';
import Sledding from './components/activities/info/sledding';
import HuskyAdventure from './components/activities/info/huskyAdventure';
import HuskyOvernight from './components/activities/info/huskyOvernight';
import HuskyCafe from './components/activities/info/huskyCafe';
import Kayaking from './components/activities/info/kayaking';
import MidnightSunHike from './components/activities/info/midnightSunHike';
import HuskyPuppyTraining from './components/activities/info/huskyPuppyTraining';

import Blog from './components/blog/blog';
import TravelersGuideToTheAurora from './components/blog/travelersGuideToTheAurora';
import TheNorwegianWay from './components/blog/theNorwegianWay';

function App() {
  return (
    <Router basename={pjson.homepage}>
      <Switch>
        <Route exact path="/" component={Home} switch/>
        <Route exact path="/activities" component={Activities} switch/>
        <Route exact path="/activities/aurora" component={Aurora} switch/>
        <Route exact path="/activities/aurora_camp" component={AuroraCamp} switch/>
        <Route exact path="/activities/sledding" component={Sledding} switch/>
        <Route exact path="/activities/husky_adventure" component={HuskyAdventure} switch/>
        <Route exact path="/activities/husky_overnight" component={HuskyOvernight} switch/>
        <Route exact path="/activities/husky_cafe" component={HuskyCafe} switch/>
        <Route exact path="/activities/midnight_sun_hike" component={MidnightSunHike} switch/>
        <Route exact path="/activities/husky_puppy_training" component={HuskyPuppyTraining} switch/>

        <Route exact path="/blog" component={Blog} switch/>
        <Route exact path="/blog/travelers_guide_to_the_aurora" component={TravelersGuideToTheAurora} switch/>
        <Route exact path="/blog/the_norwegian_way" component={TheNorwegianWay} switch/>

      </Switch>
    </Router>
  );
}

export default App;
