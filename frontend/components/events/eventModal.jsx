// TODO: Right now, the Edit Event option is based on being logged in.
// TODO: It SHOULD be based on the Event's User-Id being the User's

var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var Modal = require("react-modal");
var EditEventModal = require('./editEventModal');
var UserStore = require('../../stores/user');
var hashHistory = require("react-router").hashHistory;

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
    // Right now, this doesn't update for the New Props.
    // I removed (newProps) from function(newProps)
    this.setState({event: EventStore.find(parseInt(this.props.event.id)),
                  editEventModalOpen: false});
    // Okay, so: the ClientActions method updates the props
    // It looks great.
    // But it sends us into an infinite loop.
    // ClientActions.fetchSingleEvent(parseInt(newProps.params.event.id));
  },

  goToEventSplash: function(){
    var destination = "/event/" + this.props.event.id;
    hashHistory.push(destination);
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

    if (UserStore.loggedIn() && UserStore.user().id === this.props.event.user_id){
      editOptionForLoggedInUsers =(
        <button onClick={this.openEditEventModal}>Edit Event</button>
      );
    }

    // {['title', 'description'].map(function (attr) {
    //   return <p key={attr}>{attr}: {this.state.event[attr]}</p>;
    // }.bind(this))}
    // <br></br>

    return(
      <div>

      <h1>{this.state.event.title}</h1>

        <div className="event-detail-pane">

          <div>
            <button onClick={this.goToEventSplash}>Learn More</button>
            {editOptionForLoggedInUsers}
          </div>

          <h2 className='detail-header'>Showtimes: </h2>
          <ShowtimesIndex showtimes={this.state.event.showtimes} />



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
