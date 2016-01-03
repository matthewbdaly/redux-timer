import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return (
      <button className="timer btn btn-danger btn-lg btn-block">{ this.props.title } - { this.props.count }</button>
    );
  }
});
