var ApiUtil = require('../util/apiUtil');
var UserApiUtil = require('../util/userApiUtil');

module.exports = {

  // User Functions

  fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser();
  },

  // Event Functions

  fetchAllEvents: function() {
    ApiUtil.fetchAllEvents();
  },

  createEvent: function(data) {
    ApiUtil.createEvent(data);
  },

  fetchSingleEvent: function(id) {
    ApiUtil.fetchSingleEvent(id);
  },

  editEvent: function(data) {
    ApiUtil.editEvent(data);
  },

  deleteEvent: function(id){
    ApiUtil.deleteEvent(id);
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

  // TicketPurchase Functions

  fetchAllTicketPurchases: function() {
    ApiUtil.fetchAllTicketPurchases();
  },

  createTicketPurchase: function(ticketPurchaseData) {
    ApiUtil.createTicketPurchase(ticketPurchaseData);
  },

  fetchSingleTicketPurchase: function(id) {
    ApiUtil.fetchSingleTicketPurchase(id);
  },


};
