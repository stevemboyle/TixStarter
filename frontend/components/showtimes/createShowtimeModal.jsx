var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/clientActions.js');
var UserStore = require('../../stores/user');

module.exports = React.createClass({

  getInitialState: function(){
    return({
      event_id: "",
      date: "",
      time: "",
      location: ""
    });
  },

  eventIdChange: function(keyboardEvent){
    var newEventId = keyboardEvent.target.value;
    this.setState({ event_id: newEventId });
    console.log("EventId: " + this.state.event_id);
  },

  locationChange: function(keyboardEvent){
    var newLocation = keyboardEvent.target.value;
    this.setState({ location: newLocation });
    console.log("Location: " + this.state.location);
  },

  render: function(){
    return(
      <div>
        <h3>Create New Showtime</h3>
        <form onSubmit={this.handleSubmit}>

          <br></br>


          <br></br>


          <br></br>

            <label> Location:
              <input type="text"
                      value={this.state.location}
                      onChange={this.locationChange}
                />
            </label>

          <br></br>



          <br></br>



          <br></br>



          <br></br>

        <input type="submit" value="Create Showtime" />

        <br></br>

        </form>
      </div>
    );
  }


});
