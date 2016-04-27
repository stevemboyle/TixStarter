var React = require('react');
var Modal = require("react-modal");
var TicketsIndex = require('../tickets/indexItem.jsx');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function () {
    var attrs = ['name', 'happiness', 'price'].map(function (attr) {
      return <p key={attr}>{attr}: {this.props.showtime[attr]}</p>;
    }.bind(this));

    return(
      <div>
        <div>
          <p>Hey!</p>
          <li className="showtime-list-item">
            <p>Hey! Hey!</p>
            {attrs}
          </li>
        </div>
      </div>
    );
  }
});
