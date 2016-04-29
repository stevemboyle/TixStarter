var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');

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

  render: function () {
    if(this.state.event === undefined) { return <div></div>; }

    return(
      <div>

        <div className="event-detail-pane">
          <div className="detail">
            {['title', 'description'].map(function (attr) {
              return <p key={attr}>{attr}: {this.state.event[attr]}</p>;
            }.bind(this))}
          </div>

          <h2 className='detail-header'>Showtimes: </h2>
          <ShowtimesIndex showtimes={this.state.event.showtimes} />
        </div>

        {this.props.children}

      </div>
    );
  }
});
