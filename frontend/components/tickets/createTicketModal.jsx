var React = require('react');
var EventStore = require('../../stores/event.js');
// var TicketsIndex = require('../tickets/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var UserStore = require('../../stores/user');
var ShowtimeStore = require('../../stores/showtime');
// var SelectEventDropdown = require('./SelectEventDropdown');
// var Select = require('react-select');

// var ReactDropdown = require('react-dropdown');

module.exports = React.createClass({



  getInitialState: function(){

    // debugger;

      ClientActions.fetchAllShowtimes();

      ClientActions.fetchAllEvents();






    // debugger;

          return({
            events: "",
            event_id: "",
            showtime_id: "",
            price: "",
            tier: "",
            description: "",
            showtimes: "",
            has_loaded: false
          });

  },

  componentDidMount: function(){


    // this.EventListener = EventStore.addListener(this._seedChange);
    this.ShowtimeListener = ShowtimeStore.addListener(this._seedChange);

    // this.EventListener = ShowtimeStore.addListener(this._eventChange);

    // ClientActions.fetchAllEvents();


    var myEvents = EventStore.allEventsForUser(UserStore.user().id).reverse();


    //
    // debugger;
    // debugger;
    // this.eventStoreListener = EventStore.addListener(this.updateShowtimes);

    // var myShowtimes = EventStore.findShowtimes(UserStore.user().id);

    // var defaultEventId = UserStore.user().events[0].id;
    // debugger;

    // var defaultEventsShowtimes = myShowtimes[this.state.event_id];
    // var defaultShowtime = defaultEventsShowtimes[0];


        // debugger;
        // event_id: defaultEventId,
    //
    this.setState({
                  events: myEvents,
                  event_id: myEvents[0].id,
                  // event_id: ShowtimeStore.all()[0].event_id,
                  // showtime_id: ShowtimeStore.all()[0].id
                  // showtime_id: myEvents[0].id.showtimes.reverse()[0]
                });


    // this.setState({showtime_id: m})
  },

  componentWillUnmount: function(){
    // this.EventListener.remove();
    this.ShowtimeListener.remove();
    // this.EventListener.remove();
  },

  _seedChange: function(){

    // debugger;

    var myEvents = EventStore.allEventsForUser(UserStore.user().id).reverse();
    var myNewEventId = myEvents[0].id;


    // debugger;

    var myShowtimes = EventStore.findShowtimes(UserStore.user().id);



    var newEventsShowtimes = myShowtimes[myNewEventId];
    // var newShowtime = newEventsShowtimes[0];
    // // var newShowtimeId = newShowtime.id;

    // TODO: Create function in Showtimes to fetch all Showtimes for an Event
    /// input myEvents[0].id


    if (newEventsShowtimes){
      var newShowtimeId = newEventsShowtimes.reverse()[0].id;

      this.setState({
        events: myEvents,
        event_id: myNewEventId,
        showtime_id: newShowtimeId,
        has_loaded: true
      });
    }

  },

  _eventChange: function(){

    // debugger;

    var myEvents = EventStore.allEventsForUser(UserStore.user().id).reverse();
    var myNewEventId = myEvents[0].id;


    var myShowtimes = EventStore.findShowtimes(UserStore.user().id);

    var newEventsShowtimes = myShowtimes[myNewEventId];
    var newShowtime = newEventsShowtimes[0];
    var newShowtimeId = newShowtime.id;

    // TODO: Create function in Showtimes to fetch all Showtimes for an Event
    /// input myEvents[0].id

    this.setState({
      events: myEvents,
      event_id: myNewEventId,
      showtime_id: newEventsShowtimes.reverse()[0].id,
    });
  },




  updateShowtimes: function(){
    var myShowtimes = EventStore.findShowtimes(UserStore.user().id);
    this.setState({showtimes: myShowtimes});
  },
  //
  // componentWillUnmount: function(){
  //   // this.eventStoreListener.remove();
  // },

  eventIdChange: function(keyboardEvent){
    var newEventId = keyboardEvent.target.value;

    var myShowtimes = EventStore.findShowtimes(UserStore.user().id);
    var newEventsShowtimes = myShowtimes[newEventId];
    var newShowtime = newEventsShowtimes[0];

    console.log("EventId: " + this.state.event_id);
    console.log("ShowtimeId: " + this.state.showtime_id);

    this.setState({ event_id: newEventId, showtime_id: newShowtime.id});


  },

  showtimeIdChange: function(keyboardEvent){
    var newShowtimeId = keyboardEvent.target.value;
    this.setState({ showtime_id: newShowtimeId });
    console.log("ShowtimeId: " + this.state.showtime_id);
  },

  priceChange: function(keyboardEvent){
    var newPrice = keyboardEvent.target.value;
    this.setState({ price: newPrice });
    console.log("Price: " + this.state.price);
  },

  tierChange: function(keyboardEvent){
    var newTier = keyboardEvent.target.value;
    this.setState({ tier: newTier });
    console.log("Tier: " + this.state.tier);
  },

  descriptionChange: function(keyboardEvent){
    var newDescription = keyboardEvent.target.value;
      console.log(newDescription);
    this.setState({ description: newDescription});
  },

  handleSubmit: function(keyboardEvent){

    keyboardEvent.preventDefault();
    var ticketData = {
      showtime_id: this.state.showtime_id,
      price: this.state.price,
      tier: this.state.tier,
      description: this.state.description,
    };

    // debugger;

    ClientActions.createTicket(ticketData);
  },

  // eventOptions: function(){
  //   UserStore.user.events.map(function(event){
  //     <div>
  //       <option value=event.title>event.title}</option>
  //     </div>
  //   });
  // },

  render: function(){

    // debugger;

    var myHTML;

    // var showtimes = EventStore.findShowtimes(UserStore.user().id);

    // var ShowtimeSelector;

    // if (this.state.has_loaded){
    //   ShowtimeSelector = (
    //     <div>
    //
    //     </div>
    //   );
    // }

    if (UserStore.user() && this.state.has_loaded){
      myHTML = (
        <div className="create-event-background">

          <form onSubmit={this.handleSubmit} className="form-style-8">

            <br></br>

              <label> Event:
                <select value={this.state.eventId}
                onChange={this.eventIdChange}>
                  {this.state.events.map(function (event) {
                    return <option key={event.id} value={event.id}>{event.title}</option>;
                    // return <EventIndexItem key={event.id} event={event} />;
                  })}
                </select>
              </label>

              <br></br>

                <br></br>

                  <label> Showtime:
                    <select value={this.state.showtime_id}
                    onChange={this.showtimeIdChange}>
                      {EventStore.find(this.state.event_id).showtimes.map(function (showtime) {
                        return <option key={showtime.id} value={showtime.id}>{showtime.date} at {showtime.location}</option>;
                        // return <EventIndexItem key={event.id} event={event} />;
                      })}
                    </select>
                  </label>

                <br></br>

            <br></br>

              <label> Price:
                <input type="text"
                        value={this.state.price}
                        onChange={this.priceChange}
                  />
              </label>


            <br></br>
            <br></br>

                <label> Tier:
                  <input type="text"
                          value={this.state.tier}
                          onChange={this.tierChange}
                    />
                </label>


              <br></br>
              <br></br>

                  <label> Description:

                    <textarea value={this.state.description}
                    onChange={this.descriptionChange}
                    rows="10" cols="50">Write something here</textarea>

                  </label>


                <br></br>

            <br></br>

          <input type="submit" value="Create Ticket" />

          <br></br>

          </form>
          <br></br>
        </div>
      );
    } else {
      myHTML = (
        <div>

            <h3 className="home-catchphrase">Building your amazing event from scratch...</h3>

          <br></br>
        </div>
      );
    }

    // <input type="text"
    //         value={this.state.event_id}
    //         onChange={this.eventIdChange}
    //   />
    // var eventOptions =
    //   UserStore.user().events.map(function(event){
    //     <option value={event.name}>{event.name}</option>
    //   });

    return(
      <div>
        {myHTML}
      </div>
    );
  }


});
