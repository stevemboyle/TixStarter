var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/clientActions.js');

module.exports = React.createClass({
  getStateFromStore: function () {
    return { showtime: EventStore.find(parseInt(this.props.showtime.id)) };
  },

  // _onChange: function () {
  //   this.setState(this.getStateFromStore());
  // },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.fetchSingleShow(parseInt(newProps.params.showId));
  },

  // componentDidMount: function () {
  //   // this.eventListener = EventStore.addListener(this._onChange);
  //   ClientActions.fetchSingleEvent(parseInt(this.props.event.id));
  // },
  //
  // componentWillUnmount: function () {
  //   this.eventListener.remove();
  // },

  render: function () {
    if(this.state.show === undefined) { return <div></div>; }

    return(
      <div>

        <div className="event-detail-pane">

        <h1>Hello! This is the ShowtimeModal!</h1>

          <div className="detail">
          </div>

          <h2 className='detail-header'>Showtimes: </h2>
          <TicketsIndex tickets={this.state.showtime.tickets} />

          <button>Back</button>
          <button>Button 2</button>

        </div>





      </div>
    );
  }
});
