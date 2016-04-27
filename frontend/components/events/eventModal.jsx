var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/clientActions.js');
var Modal = require("react-modal");
var EditEventModal = require('./editEventModal');

module.exports = React.createClass({
  // getStateFromStore: function () {
  //   return { event: EventStore.find(parseInt(this.props.event.id)) };
  // },

  // _onChange: function () {
  //   this.setState(this.getStateFromStore());
  // },

  getInitialState: function () {
    return {event: EventStore.find(parseInt(this.props.event.id)),
            editEventModalOpen: false
          };
  },

  openEditEventModal: function(){
    this.setState({ editEventModalOpen: true });
  },

  closeEditEventModal: function(){
    this.setState({ editEventModalOpen: false });
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.fetchSingleEvent(parseInt(newProps.params.eventId));
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
    if(this.state.event === undefined) { return <div></div>; }

    return(
      <div>

      <h1>Hello! This is the EventModal Componenet</h1>

        <div className="event-detail-pane">

          <div className="detail">
            {['title', 'description'].map(function (attr) {
              return <p key={attr}>{attr}: {this.state.event[attr]}</p>;
            }.bind(this))}
            <br></br>
            <button onClick={this.openEditEventModal}>Edit Event</button>
          </div>

          <h2 className='detail-header'>Showtimes: </h2>
          <ShowtimesIndex showtimes={this.state.event.showtimes} />

          <button>Learn More</button>
          <button>Get Tickets</button>

        </div>

        <Modal
          isOpen={this.state.editEventModalOpen}
          onRequestClose={this.closeEditEventModal}>

            <h1>Edit Event Modal</h1>

            <EditEventModal event={this.state.event}/>

        </Modal>




      </div>
    );
  }
});
