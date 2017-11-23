'use strict';

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Menu from './Menu';
import Store from './Store';


class PopularCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      packages: [],
      countries: [],
      Store: Store,
    }
  }
  componentDidMount(){
    var self = this;
    // VSF.do();
    // addEventListener('onChangeCountry', function(e){
    //   console.log(e, 1);
    //   self.setState({
    //     title: e.detail
    //   });
    // });
  }
  clickCountry(item){
    var self = this;
    return function(idx){
      // this.state.Store.push(idx);
      self.state.Store.add();
      self.state.Store.add();
      self.state.Store.add();
      self.state.Store.add();
      // debugger;
    }
  }
  render() {
    var self = this;
    return (
      <div className="countries-box" ref={(div) => { this.dom = div }}>
        <div className="item-list">
          <h3 className="country-title">Popular</h3>
          <div className="popular-item" onClick={self.clickCountry()}>{self.state.title}</div>
          <div className="popular-item" onClick={self.clickCountry()}>3</div>
          <div className="popular-item" onClick={self.clickCountry()}>4</div>
          <div className="popular-item" onClick={self.clickCountry()}>5</div>
          <div className="popular-item" onClick={self.clickCountry()}>6</div>
          <div style={{clear: 'both'}}></div>
        </div>
      </div>
    )
  }
}

export default PopularCountry;