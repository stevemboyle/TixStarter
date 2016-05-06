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

      <div id="success-text">
        <h2 text-align="center" className="home-title">Success!</h2>
        <h3 text-align="center" className="home-catchphrase">Congratulations, {this.state.ticket_purchase.user.first_name}!</h3>
        <h3 text-align="center" className="home-catchphrase">You're going to {this.state.ticket_purchase.event.title}!</h3>
        <br>

          <br></br>
          <p className="open-sans">You've just purchased a ticket to:</p>
          <br></br>
          <p className="open-sans">{this.state.ticket_purchase.event.title}</p>
          <p>on {this.state.ticket_purchase.showtime.date} at {this.state.ticket_purchase.showtime.time.slice(11, 19)}</p>


      <br></br>  </br>

        <p>What would you like to do now?</p>

          <div id="menubuttons">
            <ul className="index-item-menu-ul">
              <li className="home-splash-li"><a href="#home-events-index" text-align="center" className="scroll-a">Browse Events</a></li>
              <li className="home-splash-li"><a href="/#/mytickets" text-align="center" className="scroll-a">MyTickets</a></li>
            </ul>
          </div>

      </div>


      </div>
    );
  }
});
