var ApiUtil = require('../util/apiUtil.js');

module.exports = {

  // User Functions

  // Event Functions

  fetchAllEvents: function() {
    ApiUtil.fetchAllEvents();
  },

  createEvent: function(pokemon, callback) {
    ApiUtil.createEvent(pokemon, callback);
  },

  fetchSingleEvent: function(id) {
    ApiUtil.fetchSingleEvent(id);
  },

  // Showtime Functions

  fetchAllShowtimes: function() {
    ApiUtil.fetchAllShowtimes();
  },

  createShowtime: function(pokemon, callback) {
    ApiUtil.createShowtime(pokemon, callback);
  },

  fetchSingleShowtime: function(id) {
    ApiUtil.fetchSingleShowtime(id);
  },

  // Ticket Functions

  fetchAllTickets: function() {
    ApiUtil.fetchAllTickets();
  },

  createTicket: function(pokemon, callback) {
    ApiUtil.createTicket(pokemon, callback);
  },

  fetchSingleTicket: function(id) {
    ApiUtil.fetchSingleTicket(id);
  },


};
