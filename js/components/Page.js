import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from './Header';
import Footer from './Footer';
import TimerContainer from './TimerContainer';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return (
      <div>
        <Header />
        <TimerContainer timers={[]} />
        <Footer />
      </div>
    );
  }
});
