var React = require('react');
// var EventStore = require('../../stores/event.js');
// var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var TicketsIndex = require('../tickets/index');
var ShowtimeStore = require('../../stores/showtime.js');

module.exports = React.createClass({
  getStateFromStore: function () {
    // TODO: Showtime Store is not returning a Showtime with ID of 1

    return { showtime: ShowtimeStore.find(parseInt(this.props.showtime.id)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    // ClientActions.fetchSingleShowtime(parseInt(newProps.showtime.id));
  },

  componentDidMount: function () {
    this.eventListener = ShowtimeStore.addListener(this._onChange);
    ClientActions.fetchSingleShowtime(parseInt(this.props.showtime.id));
  },

  componentWillUnmount: function () {
    this.eventListener.remove();
  },

  render: function () {

    if(this.state.showtime === undefined) { return <div></div>; }


    return(
      <div style={{backgroundImage: "url(" + this.state.showtime.event.image_url + ")"}}>

        <TicketsIndex tickets={this.state.showtime.tickets} />

      </div>
    );
  }
});
