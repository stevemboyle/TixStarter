var React = require('react');
var TicketStore = require('../../stores/ticket');
var ClientActions = require('../../actions/client_actions.js');
var TicketIndexItem = require('./indexItem.jsx');
var UserStore = require('../../stores/user');

module.exports = React.createClass({
  getInitialState: function () {
    console.log("getInitialState");
    return { tickets: TicketStore.all() };
  },

  _onChange: function () {
    console.log('_onChange');
    this.setState({ tickets: TicketStore.all() });
  },

  componentDidMount: function () {
    console.log('componentDidMount');
    this.ticketListener = TicketStore.addListener(this._onChange);
    ClientActions.fetchAllTickets();
  },

  compomentWillUnmount: function () {
    console.log('componentWillUnmount');
    this.ticketListener.remove();
  },

  myTickets: function(){
    var result = [];

    this.state.tickets.map(function(ticket){
      if (ticket.user_id === UserStore.user().id){
        result.push(ticket);
      }
    });
    return result;
  },

  render: function () {

    var test = "Nothing";
    if (this.state.tickets){
      test = this.state.tickets;
      console.log(this.state.tickets);
    }

    return(
      <div>

        <p>There's a lot still to do here.</p>
        <p>You'll want to change this.state.tickets to this.myTickets</p>
        <p>You'll want to make sure the action
          of clicking the ticket is different --</p>
        <p>You don't want to buy it all over again!</p>

        <ul>
          <h2>My Purchased Tickets:</h2>
          <br></br>
          {this.state.tickets.map(function (ticket) {

            return <TicketIndexItem key={ticket.id} ticket={ticket} />;
          })}
        </ul>
      </div>
    );
  }
});
