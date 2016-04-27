var ApiUtil = require('../util/apiUtil.js');

module.exports = {

  // User Functions

  // Event Functions

  fetchAllEvents: function() {
    ApiUtil.fetchAllEvents();
  },

  createEvent: function(data) {
    console.log("ClientActions CreateEvent called");
    console.log("data is " + data);
    ApiUtil.createEvent(data);
  },

  fetchSingleEvent: function(id) {
    ApiUtil.fetchSingleEvent(id);
  },

  // Showtime Functions

  fetchAllShowtimes: function() {
    ApiUtil.fetchAllShowtimes();
  },

  createShowtime: function(showtime, callback) {
    ApiUtil.createShowtime(showtime, callback);
  },

  fetchSingleShowtime: function(id) {
    ApiUtil.fetchSingleShowtime(id);
  },

  // Ticket Functions

  fetchAllTickets: function() {
    ApiUtil.fetchAllTickets();
  },

  createTicket: function(ticket, callback) {
    ApiUtil.createTicket(ticket, callback);
  },

  fetchSingleTicket: function(id) {
    ApiUtil.fetchSingleTicket(id);
  },


};
