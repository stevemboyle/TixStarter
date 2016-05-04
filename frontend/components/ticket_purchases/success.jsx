var React = require('react');
var TicketPurchaseStore = require('../../stores/ticketPurchase');
var ClientActions = require('../../actions/client_actions');

module.exports = React.createClass({

  getInitialState: function(){
    var ticketPurchase = TicketPurchaseStore.find(this.props.params.ticket_purchaseId);
    return { ticket_purchase: ticketPurchase };
  },

  componentDidMount: function(){
    window.scrollTo(0, 0);
    this.myListener = TicketPurchaseStore.addListener(this.handleChange);
    ClientActions.fetchSingleTicketPurchase(this.props.params.ticker_purchaseId);
  },

  componentWillUnmount: function(){
    this.myListener.remove();
  },
//
  render: function () {

    // debugger;
        // <p>{this.state.ticket_purchase.id}</p>

    return(
      <div id="success-page">
        <br></br>
          <br></br>
            <br></br>
              <br></br>
                <br></br>
                  <br></br>
                    <br></br>
                      <br></br>

      <div id="home-splash-text">
        <h2 text-align="center" className="home-title">Success!</h2>
        <h3 text-align="center" className="cody-font">Forward Fund Events with Ticket Sales</h3>
        <br>
          <div id="menubuttons">
            <ul className="index-item-menu-ul">
              <li className="home-splash-li"><a href="#home-events-index" text-align="center" className="scroll-a">Browse Events</a></li>
              <li className="home-splash-li"><a href="#home-marketing" text-align="center" className="scroll-a">Learn More</a></li>
            </ul>
          </div>
          <p>Congratulations, {this.state.ticket_purchase.user.first_name}!</p>
          <p>You've just purchased a ticket to:</p>
          <br></br>
          <p>{this.state.ticket_purchase.event.title}</p>
          <p>{this.state.ticket_purchase.showtime.date}</p>
          <br></br>
          <p>{this.state.ticket_purchase.event.title} is now {this.state.ticket_purchase.event.revenue_status / this.state.ticket_purchase.event.revenue_goal}% funded.</p>

      <br></br>  </br>



        <p>What would you like to do now?</p>
        <p>Buy More Tickets</p>
        <p>See My Tickets</p>

      </div>


      </div>
    );
  }
});
