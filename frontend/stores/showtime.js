var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ShowtimeConstants = require('../constants/showtimeConstants.js');
// var ClientActions = require('../actions/client_actions');
// var ApiUtil = require('../util/apiUtil');

var ShowtimeStore = new Store(AppDispatcher);

var _showtimes = {};

var resetShowtimes = function (showtimes) {
  _showtimes = {};
  // debugger;
  showtimes.forEach(function (showtime) {
    _showtimes[showtime.id] = showtime;
  });
};

var resetShowtime = function (showtime) {
  // debugger;
  _showtimes[showtime.id] = showtime;
};

ShowtimeStore.all = function () {
  var showtimes = [];
  for (var id in _showtimes) {
    showtimes.push(_showtimes[id]);
  }
  return showtimes;
};


ShowtimeStore.allShowtimesForEvent = function(eventId){
  var result = [];

  for (var showtimeId in _showtimes){

    var currentShowtime = _showtimes[showtimeId];

    if (currentShowtime.event_id === eventId){
      result.push(currentShowtime);
    }

  }

  return result;
};

ShowtimeStore.find = function (id) {
  // ClientActions.fetchAllShowtimes();
  return _showtimes[id];
};

ShowtimeStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ShowtimeConstants.SHOWTIMES_RECEIVED:
      // console.log("SHOWTIMES_RECEIVED");
      resetShowtimes(payload.showtimes);
      ShowtimeStore.__emitChange();
      break;
    case ShowtimeConstants.SHOWTIME_RECEIVED:
      // debugger;
      resetShowtime(payload.showtime);
      ShowtimeStore.__emitChange();
      break;
  }
};

module.exports = ShowtimeStore;
