var React = require('react');
var EventStore = require('../../stores/event.js');
var TicketsIndex = require('../tickets/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var UserStore = require('../../stores/user');
// var SelectEventDropdown = require('./SelectEventDropdown');
var Select = require('react-select');

var ReactDropdown = require('react-dropdown');

module.exports = React.createClass({

  getInitialState: function(){
    return({
      event_id: "",
      showtime_id: "",
      price: "",
      tier: "",
      description: "",
      showtimes: ""
    });
  },

  componentDidMount: function(){
    // this.eventStoreListener = EventStore.addListener(this.updateShowtimes);
    var myShowtimes = EventStore.findShowtimes(UserStore.user().id);
    var defaultEventId = UserStore.user().events[0].id;
    var defaultEventsShowtimes = myShowtimes[defaultEventId];
    var defaultShowtime = defaultEventsShowtimes[0];


    this.setState({event_id: defaultEventId,
                  showtime_id: defaultShowtime.id});

    // this.setState({showtime_id: m})
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
    this.setState({ event_id: newEventId });
    console.log("EventId: " + this.state.event_id);
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

    var myHTML = (
      <div></div>
    );

    // var showtimes = EventStore.findShowtimes(UserStore.user().id);

    var ShowtimeSelector;

    if (this.state.event_id){
      ShowtimeSelector = (
        <div>
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
        </div>
      );
    }

        if (UserStore.user()){
          myHTML = (
            <div className="create-event-background">


              <h3>Create New Ticket</h3>
              <form onSubmit={this.handleSubmit} className="form-style-8">

                <br></br>

                  <label> Event:
                    <select value={this.state.eventId}
                    onChange={this.eventIdChange}>
                      {UserStore.user().events.map(function (event) {
                        return <option key={event.id} value={event.id}>{event.title}</option>;
                        // return <EventIndexItem key={event.id} event={event} />;
                      })}
                    </select>
                  </label>

                  <br></br>

                {ShowtimeSelector}

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
              <p>To Do: <b>Change Date/Time, Add Dropdown for MyShows</b></p>
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
