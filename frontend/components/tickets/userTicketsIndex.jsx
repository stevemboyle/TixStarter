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
        <ul>
          <h2>My Purchased Tickets:</h2>
          <br></br>
          {this.myTickets().map(function (ticket) {

            return <TicketIndexItem key={ticket.id} ticket={ticket} />;
          })}
        </ul>
      </div>
    );
  }
});
