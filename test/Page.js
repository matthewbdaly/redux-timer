import React from 'react/addons';
import ReactDOM from 'react-dom';
import Page from '../js/components/Page';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = React.addons.TestUtils;

describe('Page', () => {
  it('renders as expected', () => {
    const component = renderIntoDocument(
      <Page />
    );
    const componentNode = ReactDOM.findDOMNode(component);

    // Verify content
    expect(componentNode.textContent).to.contain('Redux Timer');
  });
});
