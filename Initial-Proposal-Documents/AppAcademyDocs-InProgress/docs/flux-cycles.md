# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Event Cycles

### Events API Request Actions

* `fetchAllEvents`
  0. invoked from `EventsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/events` is called.
  0. `receiveAllEvents` is set as the callback.

* `createEvent`
  0. invoked from new event button `onClick`
  0. `POST /api/events` is called.
  0. `receiveSingleEvent` is set as the callback.

* `fetchSingleEvent`
  0. invoked from `EventDetail` `didMount`/`willReceiveProps`
  0. `GET /api/events/:id` is called.
  0. `receiveSingleEvent` is set as the callback.

* `updateEvent`
  0. invoked from `EventForm` `onSubmit`
  0. `POST /api/events` is called.
  0. `receiveSingleEvent` is set as the callback.

* `destroyEvent`
  0. invoked from delete event button `onClick`
  0. `DELETE /api/events/:id` is called.
  0. `removeEvent` is set as the callback.

### Events API Response Actions

* `receiveAllEvents`
  0. invoked from an API callback.
  0. `Event` store updates `_events` and emits change.

* `receiveSingleEvent`
  0. invoked from an API callback.
  0. `Event` store updates `_events[id]` and emits change.

* `removeEvent`
  0. invoked from an API callback.
  0. `Event` store removes `_events[id]` and emits change.

### Store Listeners

* `EventsIndex` component listens to `Event` store.
* `EventDetail` component listens to `Event` store.

## Showtime Cycles

### Showtimes API Request Actions

* `fetchAllShowtimes`
  0. invoked from `ShowtimesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/showtimes` is called.
  0. `receiveAllShowtimes` is set as the callback.

* `createShowtime`
  0. invoked from new showtime button `onClick`
  0. `POST /api/showtimes` is called.
  0. `receiveSingleShowtime` is set as the callback.

* `fetchSingleShowtime`
  0. invoked from `ShowtimeDetail` `didMount`/`willReceiveProps`
  0. `GET /api/showtimes/:id` is called.
  0. `receiveSingleShowtime` is set as the callback.

* `updateShowtime`
  0. invoked from `ShowtimeForm` `onSubmit`
  0. `POST /api/showtimes` is called.
  0. `receiveSingleShowtime` is set as the callback.

* `destroyShowtime`
  0. invoked from delete showtime button `onClick`
  0. `DELETE /api/showtimes/:id` is called.
  0. `removeShowtime` is set as the callback.

### Showtimes API Response Actions

* `receiveAllShowtimes`
  0. invoked from an API callback.
  0. `Showtime` store updates `_showtimes` and emits change.

* `receiveSingleShowtime`
  0. invoked from an API callback.
  0. `Showtime` store updates `_showtimes[id]` and emits change.

* `removeShowtime`
  0. invoked from an API callback.
  0. `Showtime` store removes `_showtimes[id]` and emits change.

### Store Listeners

* `ShowtimesIndex` component listens to `Showtime` store.
* `ShowtimeDetail` component listens to `Showtime` store.

## Ticket Cycles

### Tickets API Request Actions

* `fetchAllTickets`
  0. invoked from `TicketsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/tickets` is called.
  0. `receiveAllTickets` is set as the callback.

* `createTicket`
  0. invoked from new ticket button `onClick`
  0. `POST /api/tickets` is called.
  0. `receiveSingleTicket` is set as the callback.

* `fetchSingleTicket`
  0. invoked from `TicketDetail` `didMount`/`willReceiveProps`
  0. `GET /api/tickets/:id` is called.
  0. `receiveSingleTicket` is set as the callback.

* `updateTicket`
  0. invoked from `TicketForm` `onSubmit`
  0. `POST /api/tickets` is called.
  0. `receiveSingleTicket` is set as the callback.

* `destroyTicket`
  0. invoked from delete ticket button `onClick`
  0. `DELETE /api/tickets/:id` is called.
  0. `removeTicket` is set as the callback.

### Tickets API Response Actions

* `receiveAllTickets`
  0. invoked from an API callback.
  0. `Ticket` store updates `_tickets` and emits change.

* `receiveSingleTicket`
  0. invoked from an API callback.
  0. `Ticket` store updates `_tickets[id]` and emits change.

* `removeTicket`
  0. invoked from an API callback.
  0. `Ticket` store removes `_tickets[id]` and emits change.

### Store Listeners

* `TicketsIndex` component listens to `Ticket` store.
* `TicketDetail` component listens to `Ticket` store.
