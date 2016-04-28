var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/clientActions.js');


module.exports = React.createClass({

  getStateFromStore: function () {
    return { event: EventStore.find(parseInt(this.props.params.eventId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.fetchSingleEvent(parseInt(newProps.params.event.id));
  },

  componentDidMount: function () {
    this.eventListener = EventStore.addListener(this._onChange);
    ClientActions.fetchSingleEvent(parseInt(this.props.params.eventId));
  },

  componentWillUnmount: function () {
    this.eventListener.remove();
  },

  render: function(){



    return(
      <div id="EventSplashFullPage">
          <h1>Event Splash</h1>
      </div>

    );
  }

});
