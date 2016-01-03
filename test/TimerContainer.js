import React from 'react/addons';
import ReactDOM from 'react-dom';
import TimerContainer from '../js/components/TimerContainer';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = React.addons.TestUtils;

describe('Timer container', () => {
  it('renders as expected', () => {
    const timer = {
      title: 'My timer',
      count: 5
    };
    const timers = [timer];
    const component = renderIntoDocument(
      <TimerContainer timers={timers} />
    );
    const componentNode = ReactDOM.findDOMNode(component);

    // Verify content
    expect(componentNode.textContent).to.contain('My timer');
    expect(componentNode.textContent).to.contain('5');
  });
});
