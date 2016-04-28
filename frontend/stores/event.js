var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var EventConstants = require('../constants/eventConstants.js');
var EventStore = new Store(AppDispatcher);

var _events = {};

var resetEvents = function (events) {
  console.log('resetEvents');
  console.log(["events", events]);
  _events = {};
  events.forEach(function (event) {
    _events[event.id] = event;
  });
  console.log(["_events", _events]);
};

var resetEvent = function (event) {
  _events[event.id] = event;
};

var removeEvent = function(event){
  console.log("eventstore removeEvent");
  delete _events[event.id];
};

EventStore.all = function () {
  var events = [];
  for (var id in _events) {
    events.push(_events[id]);
  }
  return events;
};

EventStore.find = function (id) {
  return _events[id];
};

EventStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case EventConstants.EVENTS_RECEIVED:
      resetEvents(payload.events);
      EventStore.__emitChange();
      break;
    case EventConstants.EVENT_RECEIVED:
      resetEvent(payload.event);
      EventStore.__emitChange();
      break;
    case EventConstants.EVENT_REMOVED:
      console.log("event store case EVENT_REMOVED");
      removeEvent(payload.event);
      break;
  }
};

module.exports = EventStore;
