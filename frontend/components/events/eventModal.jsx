// TODO: Right now, the Edit Event option is based on being logged in.
// TODO: It SHOULD be based on the Event's User-Id being the User's

var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/clientActions.js');
var Modal = require("react-modal");
var EditEventModal = require('./editEventModal');
var UserStore = require('../../stores/user');

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
    debugger;
    // Right now, this doesn't update for the New Props.
    // I removed (newProps) from function(newProps)
    this.setState({event: EventStore.find(parseInt(this.props.event.id)),
                  editEventModalOpen: false});
    // ClientActions.fetchSingleEvent(parseInt(newProps.params.event.id));
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

    var editOptionForLoggedInUsers;

    if (UserStore.loggedIn()){
      editOptionForLoggedInUsers =(
        <button onClick={this.openEditEventModal}>Edit Event</button>
      )
    }

    return(
      <div>

      <h1>Hello! This is the EventModal Componenet</h1>

        <div className="event-detail-pane">

          <div className="detail">
            {['title', 'description'].map(function (attr) {
              return <p key={attr}>{attr}: {this.state.event[attr]}</p>;
            }.bind(this))}
            <br></br>
            {editOptionForLoggedInUsers}
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
