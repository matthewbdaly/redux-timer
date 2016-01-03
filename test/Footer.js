import React from 'react/addons';
import ReactDOM from 'react-dom';
import Footer from '../js/components/Footer';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = React.addons.TestUtils;

describe('Footer', () => {
  it('renders as expected', () => {
    const component = renderIntoDocument(
      <Footer />
    );
    const componentNode = ReactDOM.findDOMNode(component);

    // Verify content
    expect(componentNode.textContent).to.contain('Copyright');
  });
});
