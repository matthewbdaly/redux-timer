import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Timer from './Timer';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    let timerNodes = this.props.timers.map(function (timer, index) {
      return (
        <Timer title={timer.title} count={timer.count} />
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-danger btn-lg btn-block">New Timer</button>
          </div>
          <hr />
          <div className="col-md-12">
            {timerNodes}
          </div>
        </div>
      </div>
    );
  }
});
