// TODO: Right now, the Edit Event option is based on being logged in.
// TODO: It SHOULD be based on the Event's User-Id being the User's

var React = require('react');
var Modal = require("react-modal");
var EventDetail = require('./detail');
// var EventsIndex = require('./index');
var LoginModal = require('../users/loginModal');
var EventModal = require('./eventModal');
var ClientActions = require('../../actions/clientActions');
var UserStore = require('../../stores/user');


module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return({ eventDetailModalOpen: false,
              editEventModalOpen: false,
              deleteEventModalOpen: false});
  },

  openEventDetailModal: function(){
    this.setState({ eventDetailModalOpen: true });
  },

  closeEventDetailModal: function(){
    this.setState({ eventDetailModalOpen: false });
  },


  openEditEventModal: function(){
    this.setState({ editEventModalOpen: true });
  },

  closeEditEventModal: function(){
    this.setState({ editEventModalOpen: false });
  },

  openDeleteEventModal: function(){
    this.setState({ deleteEventModalOpen: true });
  },

  closeDeleteEventModal: function(){
    this.setState({ deleteEventModalOpen: false });
  },

  showDetail: function () {
    this.context.router.push('/event/'+ this.props.event.id);
  },

  activateDeleteProcess: function(){
    console.log("activateDeleteProcess");
    console.log(this.props.event.id);
    ClientActions.deleteEvent(this.props.event.id);
  },

  render: function () {

    var editOptionForLoggedInUsers;

    if (UserStore.loggedIn() && UserStore.user().id === this.props.event.user_id){
      editOptionForLoggedInUsers =(
        <div>
          <button onClick={this.openEditEventModal}>Edit Event</button>
          <button onClick={this.openDeleteEventModal}>Delete Event</button>
        </div>
      );
    }

    return(
      <div>
        <div>

          <li onClick={this.openEventDetailModal} className="event-list-item">
            <p><b>{this.props.event.title}</b></p>
            <p><em>{this.props.event.catchphrase}</em></p>
            <p>{this.props.event.description}</p>
            <br></br>
            {editOptionForLoggedInUsers}
          </li>
        </div>

          <div>
            <Modal
               isOpen={this.state.eventDetailModalOpen}
               onRequestClose={this.closeEventDetailModal}>

                 <h2>Im a modal!</h2>

                 <EventModal event={this.props.event}/>




                 <p>modal modal modal modal modal</p>
                 <p>mooooooooodal!</p>

             </Modal>

             <Modal
                isOpen={this.state.deleteEventModalOpen}
                onRequestClose={this.closeDeleteEventModal}>

                  <h1>Delete Event</h1>

                  <h2>Are you sure?</h2>

                  <button onClick={this.activateDeleteProcess}>Yes</button>
                  <button onClick={this.closeDeleteEventModal}>No</button>


                  <p>modal modal modal modal modal</p>
                  <p>mooooooooodal!</p>

              </Modal>
          </div>


      </div>


    );
  }
});


//  <EventDetail event={this.props.event} />
