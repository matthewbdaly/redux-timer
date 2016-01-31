import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../js/reducer';

describe('Reducer', () => {
  it('handles ADD_TIMER', () => {
    const initialState = List();
    const action = {
      type: 'ADD_TIMER',
      state: Map({
        name: 'My timer',
        active: false,
        count: 0
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS(
      [{name: 'My timer', active: false, count: 0}]
    ));

  });

  it('handles TOGGLE_TIMER', () => {
    const initialState = fromJS(
      [{name: 'My timer', active: false, count: 0}]
    );
    const action = {
      type: 'TOGGLE_TIMER',
      name: 'My timer'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS(
      [{name: 'My timer', active: true, count: 0}]
    ));

  });
});
