'use strict';

require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import Menu from './Menu';
import Page from './Page';
import About from './About';
import MainContainer from './MainContainer';


function storeMass(fd){
  return {
    country: {
      data: []
    },
    updateA: function(country){
      var self = this;
      var obj = Object.assign({}, self);  // create new state obj
      obj.country.data.push(country);
      fd.setState(obj);
    }
  };
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = storeMass(this);
  }
  render(){
    var store = this.state;
    return (
      <Router>
        <div>
          <div className="topbar">
            <Menu {...store}/>
          </div>
          <div className="page">
            <Route path="/country/:country" render={(props) => (
              <div>
                <MainContainer />
                <Page {...store} />
              </div>
            )} />
            <Route path="/about" render={(props) => (
              <About {...store} />
            )} />
            <Route exact path="/" render={(props) => (
              <Redirect from="/" to="/country/Asia" />
            )}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default AppComponent;