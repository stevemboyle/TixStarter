var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var EventConstants = require('../constants/eventConstants.js');
var EventStore = new Store(AppDispatcher);

var _events = {};

var _eventSuccess = false;

var newEventId;

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
  console.log("reset Event!");
  _events[event.id] = event;
  debugger;
};

var removeEvent = function(event){
  console.log("eventstore removeEvent");
  delete _events[event.id];
};

EventStore.allEventsForUser = function(id){
  var result = [];

  for (var eventId in _events){

    var currentEvent = _events[eventId];

    if (currentEvent.user_id === userId){
      result.push(currentEvent);
    }

  }

  return result;
};

EventStore.findShowtimes = function(userId){
  var result = {};

  for (var eventId in _events){

    var currentEvent = _events[eventId];

    if (currentEvent.user_id === userId){
      result[currentEvent.id] = currentEvent.showtimes;
    }
  }

  return result;
};

EventStore.createSuccess = function(){
  return _eventSuccess;
};

EventStore.setNewEventId = function(id){
  newEventId = id;
};

EventStore.showNewEventId = function(){
  return newEventId;
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
      debugger;
      resetEvent(payload.event);
      // _eventSuccess = true;
      // EventStore.setNewEventId(payload.event.id);
      // debugger;
      EventStore.__emitChange();
      // setTimeout(function(){
      //   _eventSuccess = false;
      // }, 2000);
      break;
    case EventConstants.EVENT_REMOVED:
      debugger;
      console.log("event store case EVENT_REMOVED");
      removeEvent(payload.event);
      EventStore.__emitChange();
      break;
  }
};

// TODO: Remove when done
window.EventStore = EventStore;

module.exports = EventStore;
