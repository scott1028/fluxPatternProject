'use strict';

import React from 'react';  // must import
import {Component} from 'react';
import {Container} from 'flux/utils';
import MenuStore from '../stores/MenuStore';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    // setTimeout(function(){
    //   props.store.version += 10;
    // }, 2000);
  }
  render() {
    // var self = this;
    // debugger;
    return (
      <div>
        <div onClick={this.props.update}>321321</div>
        <div>{this.props.version}</div>
      </div>
    )
  }
}

class MenuContainer extends Component {
  static getStores() {
    return [MenuStore];
  }

  static calculateState(prevState) {
    return MenuStore.getState();
  }

  render() {
    // console.log(MenuStore);
    return (
      <Menu {...this.state}/>
    );
  }
}

export default Container.create(MenuContainer);