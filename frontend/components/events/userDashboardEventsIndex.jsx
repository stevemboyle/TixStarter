var React = require('react');
var EventStore = require('../../stores/event.js');
var ClientActions = require('../../actions/client_actions.js');
var EventIndexItem = require('./indexItem.jsx');
var UserStore = require('../../stores/user');

module.exports = React.createClass({
  getInitialState: function () {
    // console.log("getInitialState");
    return { events: EventStore.all() };
  },

  _onChange: function () {
    // console.log('_onChange');
    this.setState({ events: EventStore.all() });
  },

  componentDidMount: function () {
    // console.log('componentDidMount');
    this.eventListener = EventStore.addListener(this._onChange);
    ClientActions.fetchAllEvents();
  },

  compomentWillUnmount: function () {
    // console.log('componentWillUnmount');
    this.eventListener.remove();
  },

  myEvents: function(){
    var result = [];
    this.state.events.map(function(event){
      if (event.user_id === UserStore.user().id){
        result.push(event);
      }
    });
    return result;
  },

  render: function () {

    var test = "Nothing";
    if (this.state.events){
      test = this.state.events;
      // console.log(this.state.events);
    }

    return(
      <div>
        <div className="divider">
            <h2 className="dashboard-title" font-size="15px">My Created Events:</h2>
        </div>
        <ul className="dashboard">

          <br></br>
          {this.myEvents().map(function (event) {

            return <EventIndexItem key={event.id} event={event} />;
          })}
        </ul>
      </div>
    );
  }
});
