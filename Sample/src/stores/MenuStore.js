'use strict';

import React from 'react';  // must import
import {ReduceStore} from 'flux/utils';
import {Dispatcher} from 'flux';

const dispatcher = new Dispatcher();

class MenuStore extends ReduceStore<Object> {
  getInitialState(): Object {
    return {
        version: 1,
        update: function(){
            // 傳給 store 的 reduce 處理
            dispatcher.dispatch({
              type: 'add',
              val: Math.floor(Math.random() * 10),
            });
        }
    };
  }

  reduce(state: Object, action: Object): Object {
    switch (action.type) {
      case 'add':
        return Object.assign({}, state, {
          version: state.version + action.val
        });
      case 'square':
        return state * state;

      default:
        return state;
    }
    return state;
  }
}

export default new MenuStore(dispatcher);