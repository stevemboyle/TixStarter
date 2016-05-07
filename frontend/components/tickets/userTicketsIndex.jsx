var React = require('react');
var TicketStore = require('../../stores/ticket');
var TicketPurchaseStore = require('../../stores/ticketPurchase');
// var ClientActions = require('../../actions/client_actions.js');
var TicketIndexItem = require('./indexItem.jsx');
var UserStore = require('../../stores/user');

module.exports = React.createClass({
  getInitialState: function () {
    console.log("getInitialState");
    return { tickets: TicketStore.all(),
              ticket_purchases: TicketPurchaseStore.all()};
  },

  _onChange: function () {
    // debugger;
    console.log('_onChange');
    this.setState({ tickets: TicketStore.all(),
                    ticket_purchases: TicketPurchaseStore.all()});
  },

  componentDidMount: function () {
    console.log('componentDidMount');
    this.ticketListener = TicketStore.addListener(this._onChange);
    this.ticketPurchaseListener = TicketPurchaseStore.addListener(this._onChange);
    // ClientActions.fetchAllTickets();
    // ClientActions.fetchAllTicketPurchases();
  },

  compomentWillUnmount: function () {
    console.log('componentWillUnmount');
    this.ticketListener.remove();
  },

  myTickets: function(){
    var result = [];

    // debugger;

    this.state.ticket_purchases.map(function(ticketPurchase){
      if (ticketPurchase.user_id === window.userId){
        var ticket = TicketStore.find(ticketPurchase.ticket_id);
        result.push(ticket);
      }
    });

    return result;
  },

  render: function () {

    // debugger;

    var test = "Nothing";
    if (this.state.tickets){
      test = this.state.tickets;
      console.log(this.state.tickets);
    }

    var content;

    if (this.state.ticket_purchases.length > 0 && this.state.tickets.length > 0){
      // debugger;
      content = (
        <div>
          <div className="tickets-divider">
              <h2 className="dashboard-title" font-size="15px">My Purchased Tickets:</h2>
          </div>

          <ul className="index-for-events">
            {this.myTickets().map(function (ticket) {

              return <TicketIndexItem ticket={ticket} />;
            })}
          </ul>
        </div>
      );
    }



    //


    return(
      <div>
        {content}
      </div>
    );
  }
});
