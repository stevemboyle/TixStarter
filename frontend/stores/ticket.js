var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var TicketConstants = require('../constants/ticketConstants.js');
var TicketStore = new Store(AppDispatcher);

var _tickets = {};

var resetTickets = function (tickets) {
  // console.log('resetTickets');
  // console.log(["tickets", tickets]);
  _tickets = {};
  tickets.forEach(function (ticket) {
    _tickets[ticket.id] = ticket;
  });
  // console.log(["_tickets", _tickets]);
};

var resetTicket = function (ticket) {
  _tickets[ticket.id] = ticket;
};

var removeTicket = function(ticket){
  // console.log("ticketstore removeTicket");
  delete _tickets[ticket.id];
};

TicketStore.all = function () {
  var tickets = [];
  for (var id in _tickets) {
    tickets.push(_tickets[id]);
  }
  return tickets;
};

TicketStore.find = function (id) {
  return _tickets[id];
};

TicketStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case TicketConstants.TICKETS_RECEIVED:
      resetTickets(payload.tickets);
      TicketStore.__emitChange();
      break;
    case TicketConstants.TICKET_RECEIVED:
      // debugger;
      resetTicket(payload.ticket);
      TicketStore.__emitChange();
      break;
    case TicketConstants.TICKET_REMOVED:
      // console.log("ticket store case EVENT_REMOVED");
      removeTicket(payload.ticket);
      break;
  }
};

// TODO: Remove when done
window.TicketStore = TicketStore;

module.exports = TicketStore;
