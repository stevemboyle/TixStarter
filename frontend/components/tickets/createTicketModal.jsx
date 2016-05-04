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
      showtime_id: "",
      price: "",
      tier: "",
      description: "",
    });
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
    var ticketData = {
      event_id: this.state.event_id,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
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

    // <input type="text"
    //         value={this.state.event_id}
    //         onChange={this.eventIdChange}
    //   />
    // var eventOptions =
    //   UserStore.user().events.map(function(event){
    //     <option value={event.name}>{event.name}</option>
    //   });

    return(
      <div className="create-event-background">


        <h3>Create New Ticket</h3>
        <form onSubmit={this.handleSubmit} className="form-style-8">

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
                  <input type="textarea"
                          value={this.state.description}
                          onChange={this.descriptionChange}
                    />
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


});
