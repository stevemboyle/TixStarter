var Dispatcher = require('../dispatcher/dispatcher.js');
var EventConstants = require('../constants/eventConstants.js');
var UserConstants = require('../constants/userConstants.js');
var ShowtimeConstants = require('../constants/showtimeConstants.js');
var TicketPurchaseConstants = require('../constants/ticketPurchaseConstants.js');

module.exports = {

  // User Functions:

  // Events Functions:

  receiveAllEvents: function (events) {
    Dispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    });
  },

  receiveSingleEvent: function (event) {
    Dispatcher.dispatch({
      actionType: EventConstants.EVENT_RECEIVED,
      event: event
    });
  },

  removeEvent: function(event){
    Dispatcher.dispatch({
      actionType: EventConstants.EVENT_REMOVED,
      event: event
    });
  },

  // Showtimes Functions:

  receiveAllShowtimes: function (showtimes) {
    console.log("receiveAllShowtime called");
    Dispatcher.dispatch({
      actionType: ShowtimeConstants.SHOWTIMES_RECEIVED,
      showtimes: showtimes
    });
  },

  receiveSingleShowtime: function (showtime) {
    console.log("receiveSingleShowtime called");
    Dispatcher.dispatch({
      actionType: ShowtimeConstants.SHOWTIME_RECEIVED,
      showtime: showtime
    });
  },


    // Events Functions:

    receiveAllTicketPurchases: function (ticketPurchases) {
      Dispatcher.dispatch({
        actionType: TicketPurchaseConstants.TICKET_PURCHASE_RECEIVED,
        ticketPurchases: ticketPurchases
      });
    },

    receiveSingleTicketPurchase: function (ticketPurchase) {
      Dispatcher.dispatch({
        actionType: TicketPurchaseConstants.TICKET_PURCHASE_RECEIVED,
        ticketPurchase: ticketPurchase
      });
    },

};
