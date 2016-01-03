import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return (
      <header>
        <div className="container headercontainer">
          <div className="jumbotron">
            <h1><a href="/">Redux Timer</a></h1>
          </div>
        </div>
        <div className="container headercontainer">
          <nav className="navbar navbar-inverse navbar-static-top">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#header-nav">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse" id="header-nav">
                <ul className="nav navbar-nav">
                  <li><a href="/">Home</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
});
