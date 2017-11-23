'use strict';

require('normalize.css/normalize.css');
require('styles/App.scss');
require('pubsub-js/lib/jquery-1.7.2.js');
require('pubsub-js/src/pubsub.js');

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import Country from './Country';
import PopularPackage from './PopularPackage';
import PopularCountry from './PopularCountry';


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var self = this;
    return (
      <div>
        <PopularPackage {...self.props} />
        <PopularCountry {...self.props} />
        <Country {...self.props} />
      </div>
    )
  }
}

export default Page;