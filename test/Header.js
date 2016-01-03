import React from 'react/addons';
import ReactDOM from 'react-dom';
import Header from '../js/components/Header';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = React.addons.TestUtils;

describe('Header', () => {
  it('renders as expected', () => {
    const component = renderIntoDocument(
      <Header />
    );
    const componentNode = ReactDOM.findDOMNode(component);

    // Verify content
    expect(componentNode.textContent).to.contain('Redux Timer');
  });
});
