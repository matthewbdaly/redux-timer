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

function incrementTimer(state, name) {
  return state.update(
    state.findIndex(function (item) {
      return item.get('name') == name;
    }), function (item) {
      if (item.get('active') == true) {
        return item.set('count', item.get('count') + 1);
      } else {
        return item;
      }
    });
}

export default function(state = List(), action) {
  switch (action.type) {
    case 'ADD_TIMER':
      return addTimer(state, action.state);
    case 'TOGGLE_TIMER':
      return toggleTimer(state, action.name);
    case 'INCREMENT_TIMER':
      return incrementTimer(state, action.name);
  }
  return state;
}
