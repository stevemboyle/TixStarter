var React = require('react');
var EventStore = require('../../stores/event.js');
var ClientActions = require('../../actions/client_actions.js');
var EventIndexItem = require('./indexItem.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { events: EventStore.all() };
  },

  _onChange: function () {
    this.setState({ events: EventStore.all() });
  },

  componentDidMount: function () {
    this.eventListener = EventStore.addListener(this._onChange);
    ClientActions.fetchAllEvents();
  },

  compomentWillUnmount: function () {
    this.eventListener.remove();
  },

  render: function () {

    var test = "Nothing";
    if (this.state.events){
      test = this.state.events;
    }

    return(
      <div className="index-for-events">
          <h2 className="events-index-header">Experiences:</h2>
          <br></br>
          {this.state.events.map(function (event) {

            return <EventIndexItem key={event.id} event={event} />;
          })}
      </div>
    );
  }
});
