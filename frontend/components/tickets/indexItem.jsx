var React = require('react');
var Modal = require("react-modal");
var TicketsIndex = require('../tickets/indexItem.jsx');
var UserStore = require('../../stores/user');
var ClientActions = require('../../actions/client_actions.js');
var ShowtimeStore = require('../../stores/showtime');

module.exports = React.createClass({
  //
  // getInitialState: function(){
  //   debugger;
  // },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  purchaseTicket: function(){
    // debugger;
    var ticketPurchaseData = {
      ticket_id: this.props.ticket.id,
      user_id: String(UserStore.user().id)
    };

    ClientActions.createTicketPurchase(ticketPurchaseData);
  },


  render: function () {

    // var attrs = ['name', 'happiness', 'price'].map(function (attr) {
    //   return <p key={attr}>{attr}: {this.props.showtime[attr]}</p>;
    // }.bind(this));

          // {attrs}
          debugger;

    return(
      <div>
        <div>
          <p>Hey!</p>
          <li onClick={this.purchaseTicket} className="showtime-list-item">
            <p>{this.props.ticket.tier}</p>
            <p>${this.props.ticket.price}</p>
            <br></br>
            <p><em>for</em></p>
            <br></br>
          </li>
        </div>
      </div>
    );
  }
});
