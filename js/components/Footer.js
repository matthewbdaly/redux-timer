import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return (
      <footer>
        <div className="container footercontainer">
          <div className="col-md-12">
            <p className="copyright">Copyright &copy;.</p>
          </div>
        </div>
      </footer>
    );
  }
});
