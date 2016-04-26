var React = require('react');
var EventStore = require('../../stores/event.js');

module.exports = React.createClass({
  getStateFromStore: function () {
    var event = EventStore.find(parseInt(this.props.params.eventId));
    var showtime;
    event && event.showtimes && event.showtimes.forEach(function (t) {
      if(t.id === parseInt(this.props.params.showtimeId)) { showtime = t; }
    }.bind(this));
    return { showtime: showtime };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentDidMount: function () {
    this.eventListener = EventStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.eventListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this._onChange();
  },

  render: function () {
    if(this.state.showtime === undefined) { return <div></div>; }

    return(
      <div className="showtime-detail-pane">
        <p>SHOWDETAIL 1</p>
        <div className="detail">
          <p>SHOWDETAIL 2</p>
          <img className="showtime-image" src={this.state.showtime.image_url} />
          {['event_id'].map(function (attr) {
            return <p key={attr}>{attr}: {this.state.showtime[attr]}</p>;
          }.bind(this))}
          <h2>Event: </h2>
          <select defaultValue={this.state.showtime.event_id}>
            {EventStore.all().map(function (p) {
              return <option key={p.id} value={p.id}>{p.name}</option>;
            }.bind(this))}
            </select>
          </div>
        </div>
    );
  }
});
