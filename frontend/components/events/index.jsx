var React = require('react');
var EventStore = require('../../stores/event.js');
var ClientActions = require('../../actions/clientActions.js');
var EventIndexItem = require('./indexItem.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    console.log("getInitialState");

    return { events: EventStore.all() };
  },

  _onChange: function () {
    console.log('_onChange');
    this.setState({ events: EventStore.all() });
  },

  componentDidMount: function () {
    console.log('componentDidMount');
    this.eventListener = EventStore.addListener(this._onChange);
    ClientActions.fetchAllEvents();
  },

  compomentWillUnmount: function () {
    console.log('componentWillUnmount');
    this.eventListener.remove();
  },

  render: function () {

    var test = "Nothing";
    if (this.state.events){
      test = this.state.events;
      console.log(this.state.events);
    }

    return(
      <div>
        <ul>
          <h2>Experiences:</h2>
          <br></br>
          {this.state.events.map(function (event) {

            return <EventIndexItem key={event.id} event={event} />;
          })}
        </ul>
      </div>
    );
  }
});
