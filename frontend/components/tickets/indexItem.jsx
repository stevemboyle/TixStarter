var React = require('react');
var Modal = require("react-modal");
var TicketsIndex = require('../tickets/indexItem.jsx');
var UserStore = require('../../stores/user');
var ClientActions = require('../../actions/client_actions.js');
var ShowtimeStore = require('../../stores/showtime');
var hashHistory = require("react-router").hashHistory;

var CUSTOM_STYLE = {
  content : {
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    // 'align-items' : 'center',
    // 'zIndex': '100000',
    'background-color' : 'dodgerblue',
    'text-align' : 'center',
    'margin': '100px auto',
    'border': '0px solid dodgerblue',
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    'width' : '600px',
    'height' : '350px',
    'padding': '100px',
    'box-shadow' : '0px 0px 15px grey'
    // 'background': 'grey'
    // 'background-image': 'url(http://www.defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg)'
  }
};

module.exports = React.createClass({
  //
  getInitialState: function(){
     return({ confirmationModalOpen: false});
   },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  openConfirmationModal: function(){
    this.setState({ confirmationModalOpen: true });
  },

  closeConfirmationModal: function(){
    this.setState({ confirmationModalOpen: false });
  },

  // goToConfirmationWindow: function(){
  //   var ticketPurchaseData = {
  //     ticket_id: this.props.ticket.id,
  //     user_id: String(UserStore.user().id)
  //   };
  //
  //
  // },

  purchaseTicket: function(){
    // debugger;
    var ticketPurchaseData = {
      ticket_id: this.props.ticket.id,
      user_id: String(UserStore.user().id)
    };

    ClientActions.createTicketPurchase(ticketPurchaseData);
  },


  render: function () {

    // debugger;

    // var attrs = ['name', 'happiness', 'price'].map(function (attr) {
    //   return <p key={attr}>{attr}: {this.props.showtime[attr]}</p>;
    // }.bind(this));

          // {attrs}
          // debugger;

    return(
      <div className="ticket-list-item">
        <div>
          <li onClick={this.openConfirmationModal} className="ticket-list-item">
            <p>{this.props.ticket.tier}</p>
            <p className="open-sans">{this.props.ticket.description}</p>
            <p>${this.props.ticket.price}</p>
            <br></br>
            <br></br>
          </li>
        </div>

          <Modal

             isOpen={this.state.confirmationModalOpen}
             onRequestClose={this.closeConfirmationModal}
             style={CUSTOM_STYLE}>

               <h1>Buy Ticket</h1>

               <h2>Are you sure?</h2>

                 <div id="menubuttons">
                   <ul className="index-item-menu-ul">
                     <li className="index-item-menu-li"  onClick={this.purchaseTicket}>Yes</li>
                     <li className="index-item-menu-li"  onClick={this.closeConfirmationModal}>No</li>
                   </ul>
                 </div>

           </Modal>

      </div>
    );
  }
});
