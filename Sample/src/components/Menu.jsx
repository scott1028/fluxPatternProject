'use strict';

import React from 'react';
import {
  Link
} from 'react-router-dom';

import Store from './Store';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        'Europe',
        'America',
        'Asia',
        'Africa',
        'Oceania',
      ],
      Store: Store
    }
    this.changeCountry = this.changeCountry.bind(this);
  }
  changeCountry(item) {
    var self = this;
    return () => {
      self.props.updateA(1);
      self.state.Store.add();
      // Store;
      // console.log(Store.a);
      // debugger;
    }
  }
  render() {
    var self = this;
    // debugger;
    return (
      <div>
        {/*<div className="logo">789</div>*/}
        <ul className="country-bar">
        {
          this.state.data.map(function(row, index){
            return (
              <li key={index}><Link to={{
                pathname: `/country/${row}`,
              }}><span onClick={self.changeCountry(row)}>{row}</span></Link></li>
            )
          }, this)
        }
        <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu;