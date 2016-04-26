var Dispatcher = require('../dispatcher/dispatcher.js');
var EventConstants = require('../constants/eventConstants.js');

module.exports = {
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
  }
};
