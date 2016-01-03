import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    let activeClass = this.props.active ? 'btn-danger': 'btn-success';
    let classList = "timer btn btn-lg btn-block " + activeClass;
    return (
      <button className={ classList }>{ this.props.title } - { this.props.count }</button>
    );
  }
});
