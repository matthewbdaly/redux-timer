import React from 'react/addons';
import ReactDOM from 'react-dom';
import Timer from '../js/components/Timer';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = React.addons.TestUtils;

describe('Timer', () => {
  it('renders as expected', () => {
    const timer = {
      title: 'My timer',
      count: 5
    };
    const component = renderIntoDocument(
      <Timer title={timer.title} count={timer.count}/>
    );
    const componentNode = ReactDOM.findDOMNode(component);

    // Verify content
    expect(componentNode.textContent).to.contain('My timer');
    expect(componentNode.textContent).to.contain('5');
  });
});
