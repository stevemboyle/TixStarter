var React = require('react');
var TicketPurchaseStore = require('../../stores/ticketPurchase');
var ClientActions = require('../../actions/client_actions');

module.exports = React.createClass({

  getInitialState: function(){
    var ticketPurchase = TicketPurchaseStore.find(this.props.params.ticket_purchaseId);
    return { ticket_purchase: ticketPurchase };
  },

  componentDidMount: function(){
    this.myListener = TicketPurchaseStore.addListener(this.handleChange);
    ClientActions.fetchSingleTicketPurchase(this.props.params.ticker_purchaseId);
  },

  componentWillUnmount: function(){
    this.myListener.remove();
  },

  render: function () {

    debugger;
        // <p>{this.state.ticket_purchase.id}</p>

    return(
      <div>
        <br></br>
          <br></br>
            <br></br>
              <br></br>
                <br></br>
                  <br></br>
                    <br></br>
                      <br></br>

        <p>Congratulations, {this.state.ticket_purchase.user.first_name}!</p>
                        <br></br>
        <p>You've just purchased a ticket to:</p>
                        <br></br>

        <p>{this.props.params.ticket_purchaseId}</p>
        <p>{this.state.ticket_purchase.id}</p>
        <p>{this.state.ticket_purchase.event.title}</p>
        <p>{this.state.ticket_purchase.showtime.date}</p>
        <br></br>
        <p>What would you like to do now?</p>
        <p>Buy More Tickets</p>
        <p>See My Tickets</p>
      </div>
    );
  }
});
