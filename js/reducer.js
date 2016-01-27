import {List, Map} from 'immutable';

function addTimer(state, timer) {
  return state.push(timer);
}

export default function(state = List(), action) {
  switch (action.type) {
    case 'ADD_TIMER':
      return addTimer(state, action.state);
  }
  return state;
}
