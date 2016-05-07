var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var UserStore = require('../../stores/user');
// var SelectEventDropdown = require('./SelectEventDropdown');
var Select = require('react-select');

var ReactDropdown = require('react-dropdown');

module.exports = React.createClass({

  getInitialState: function(){

    var myEvents = EventStore.allEventsForUser(UserStore.user().id).reverse();

    // debugger;

    return({
      // events: myEvents,
      events: myEvents,
      // event_id: myEvents[0].id,
      event_id: "",
      date: "",
      time: "",
      location: ""
    });
  },

  componentDidMount: function(){
    // ClientActions.fetchAllEvents();
    // debugger;
    // var defaultEventId = UserStore.user().events[0].id;
    // this.setState({event_id: defaultEventId});
    var myEvents = EventStore.allEventsForUser(UserStore.user().id).reverse();
    // debugger;

    if (myEvents.length > 0){
      this.setState({events: myEvents, event_id: myEvents[0].id});
    }

    this.EventListener = EventStore.addListener(this._eventsChanged);

  },

  _eventsChanged: function(){
    // debugger;
    var myEvents = EventStore.allEventsForUser(UserStore.user().id).reverse();
    this.setState({
      events: myEvents,
      event_id: myEvents[0].id,
    });

    var myEvents = EventStore.allEventsForUser(UserStore.user().id).reverse();
    console.log("Events Id: " + myEvents[0].id);

    this.setState({events: myEvents,
                  event_id: myEvents[0].id});

  },

  componentWillUnmount: function(){
    this.EventListener.remove();
  },

  eventIdChange: function(keyboardEvent){
    var newEventId = keyboardEvent.target.value;
    this.setState({ event_id: newEventId });
    console.log("EventId: " + this.state.event_id);
  },

  dateChange: function(keyboardEvent){
    var newDate = keyboardEvent.target.value;
    this.setState({ date: newDate });
    console.log("Date: " + this.state.date);
  },

  timeChange: function(keyboardEvent){
    var newTime = keyboardEvent.target.value;
    this.setState({ time: newTime });
    console.log("Time: " + this.state.time);
  },

  locationChange: function(keyboardEvent){
    var newLocation = keyboardEvent.target.value;
    this.setState({ location: newLocation });
    console.log("Location: " + this.state.location);
  },

  handleSubmit: function(keyboardEvent){

    keyboardEvent.preventDefault();
    var showtimeData = {
      event_id: this.state.event_id,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
    };

    ClientActions.createShowtime(showtimeData);
  },

  // eventOptions: function(){
  //   UserStore.user.events.map(function(event){
  //     <div>
  //       <option value=event.title>event.title}</option>
  //     </div>
  //   });
  // },





  render: function(){

    var CreateForm = (
      <div className="create-event-background">
        <form onSubmit={this.handleSubmit} className="form-style-8">

          <br></br>

            <label> Event:
              <select value={this.state.event_id}
              onChange={this.eventIdChange}>
                {this.state.events.map(function (event) {
                  var isSelected = "";
                  if (event.id === EventId){
                    isSelected = "selected";
                  }
                  return <option selected={isSelected} key={event.id} value={event.id}>{event.title}</option>;
                  // return <EventIndexItem key={event.id} event={event} />;
                })}
              </select>
            </label>

          <br></br>

            <label> Date:
              <input type="date"
                      value={this.state.date}
                      onChange={this.dateChange}
                />
            </label>

          <br></br>

            <label> Time:
              <input type="time"
                      value={this.state.time}
                      onChange={this.timeChange}
                />
            </label>

          <br></br>

            <label> Location:
              <input type="text"
                      value={this.state.location}
                      onChange={this.locationChange}
                />
            </label>

          <br></br>

        <input type="submit" value="Create Showtime" />

        <br></br>

        </form>
        <br></br>

      </div>
    );

    var DisplayForm;

    if (this.state.events){
      // debugger;
      DisplayForm = CreateForm;
    }

    // debugger;

    // <input type="text"
    //         value={this.state.event_id}
    //         onChange={this.eventIdChange}
    //   />
    // var eventOptions =
    //   UserStore.user().events.map(function(event){
    //     <option value={event.name}>{event.name}</option>
    //   });

    var EventId = this.state.event_id;

    return(
    <div>
      {DisplayForm}
    </div>
    );
  }


});
