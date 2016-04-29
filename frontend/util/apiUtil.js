var ServerActions = require('../actions/serverActions.js');

var ApiUtil = {

  // User Functions

  createUser: function (data) {
   $.ajax({
     url: "api/users",
     type: "POST",
     data: { user: data },
     success: function (user) {
       ServerActions.receiveUser(user);
     }
   });
 },

  // Event Functions

  fetchAllEvents: function () {
    console.log('called fetchAllEvents');
    $.ajax({
      url: "api/events",
      success: function (events) {
        console.log('called success function for fetchAllEvents');
        ServerActions.receiveAllEvents(events);
      }
    });
  },

  fetchSingleEvent: function (id) {
    console.log("fetchSingleEvent called");
    $.ajax({
      url: "api/events/" + id,
      success: function (event) {
        console.log("fetchSingleEvent AJAX success function called");
        ServerActions.receiveSingleEvent(event);
      }
    });
    console.log('past ajax');
  },

  createEvent: function (data) {
    console.log("Api Util Create Event called");
    $.ajax({
      url: "api/events",
      // Changed "event" to "events"
      method: "POST",
      data: {event: data},
      success: function (event) {
        ServerActions.receiveSingleEvent(event);
        // callback && callback(event.id);
      }
    });
  },


  editEvent: function(data) {
    $.ajax({
       url: "api/events/" + data.id,
       type: "PATCH",
       data: { event: { title: data.title,
                        catchphrase: data.catchphrase,
                        description: data.description,
                        image_url: data.image_url,
                        video_url: data.video_url,
                        user_id: data.user_id,
                        revenue_goal: data.revenue_goal,
                        revenue_status: data.revenue_status
                      }
              },
       success: function (post) {
         ServerActions.receiveSingleEvent(event);
       }
    });
  },

  deleteEvent: function(id){
    console.log("Api Util delete event");
    $.ajax({
     url: "api/events/" + id,
     type: "DELETE",
     success: function (event) {
       console.log("success function for Api Util!");
       ServerActions.removeEvent(event);
     }
   });
  },

  // // Showtime Functions
  //
  fetchAllShowtimes: function () {
    $.ajax({
      url: "api/showtime",
      success: function (showtimes) {
        ServerActions.receiveAllShowtimes(showtimes);
      }
    });
  },

  fetchSingleShowtime: function (id) {
    $.ajax({
      url: "api/showtimes/" + id,
      success: function (showtime) {
        ServerActions.receiveSingleShowtime(showtime);
      }
    });
  },

  createShowtime: function (showtime, callback) {
    $.ajax({
      url: "api/showtimes",
      method: "POST",
      data: {showtime: showtime},
      success: function (showtime) {
        ServerActions.receiveSingleShowtime(showtime);
        callback && callback(showtime.id);
      }
    });
  },

  // Ticket Functions

  fetchAllTickets: function () {
    $.ajax({
      url: "api/ticket",
      success: function (tickets) {
        ServerActions.receiveAllTickets(tickets);
      }
    });
  },

  fetchSingleTicket: function (id) {
    $.ajax({
      url: "api/ticket/" + id,
      success: function (ticket) {
        ServerActions.receiveSingleTicket(ticket);
      }
    });
  },

  createTicket: function (ticket, callback) {
    $.ajax({
      url: "api/ticket",
      method: "POST",
      data: {ticket: ticket},
      success: function (ticket) {
        ServerActions.receiveSingleTicket(ticket);
        callback && callback(ticket.id);
      }
    });
  }

};

//TODO: remove when done
window.ApiUtil = ApiUtil; //Just for testing


module.exports = ApiUtil;
