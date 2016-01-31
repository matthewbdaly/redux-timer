import {List, Map} from 'immutable';

function addTimer(state, timer) {
  return state.push(timer);
}

function toggleTimer(state, name) {
  return state.update(
    state.findIndex(function (item) {
      return item.get('name') == name;
    }), function (item) {
      return item.set('active', !item.get('active'));
    });
}

export default function(state = List(), action) {
  switch (action.type) {
    case 'ADD_TIMER':
      return addTimer(state, action.state);
    case 'TOGGLE_TIMER':
      return toggleTimer(state, action.name);
  }
  return state;
}
