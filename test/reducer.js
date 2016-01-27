import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../js/reducer';

describe('reducer', () => {
  it('handles ADD_TIMER', () => {
    const initialState = List();
    const action = {
      type: 'ADD_TIMER',
      state: Map({
        name: 'My timer',
        count: 0
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS(
      [{name: 'My timer', count: 0}]
    ));

  });
});
