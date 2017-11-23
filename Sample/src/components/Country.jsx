'use strict';

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Menu from './Menu';


class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeCountry = this.onChangeCountry.bind(this);
    // debugger;
  }
  onChangeCountry(country){
    var self = this;
    // setTimeout(function(){
    //   self.setState({
    //     title: 'test1' + new Date
    //   });
    // }, 2000);
    console.log(country);
    // debugger;
  }
  componentWillReceiveProps(prevProps){
    var self = this;
    this.onChangeCountry(this.props.country);
  }
  componentDidMount(){
    var self = this;
    this.onChangeCountry(this.props.country);
  }
  componentDidUpdate(){
    var self = this;
  }
  render() {
    var self = this;
    return (
      <div className="countries-box">
        <div className="item-list">
          <h3 className="country-title">Country</h3>
          <div>
            <div className="country-item">{self.state.title} a {self.props.country.data}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Country;