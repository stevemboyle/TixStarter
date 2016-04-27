var Dispatcher = require('../dispatcher/dispatcher.js');
var EventConstants = require('../constants/eventConstants.js');
var UserConstants = require('../constants/userConstants.js');
var ShowtimeConstants = require('../constants/showtimeConstants.js');

module.exports = {

  // User Functions:

  // Events Functions:

  receiveAllEvents: function (events) {
    console.log("receiveAllEvent called");
    Dispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    });
  },

  receiveSingleEvent: function (event) {
    console.log("receiveSingleEvent called");
    Dispatcher.dispatch({
      actionType: EventConstants.EVENT_RECEIVED,
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
  }

};
