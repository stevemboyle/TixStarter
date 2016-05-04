// TODO: Right now, the Edit Event option is based on being logged in.
// TODO: It SHOULD be based on the Event's User-Id being the User's

var React = require('react');
var Modal = require("react-modal");
var EventDetail = require('./detail');
// var EventsIndex = require('./index');
var LoginModal = require('../users/loginModal');
var EventModal = require('./eventModal');
var ClientActions = require('../../actions/client_actions');
var UserStore = require('../../stores/user');
var hashHistory = require("react-router").hashHistory;
var EditEventModal = require('./editEventModal');


module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return({ eventDetailModalOpen: false,
              editEventModalOpen: false,
              deleteEventModalOpen: false,
              currentUser: UserStore.user()
            });
  },

  _userChanged: function(){
    this.setState({currentUser: UserStore.user()});
  },

  componentDidMount: function(){
    this.bigClickGo = true;
    this.userStoreListener = UserStore.addListener(this._userChanged);
  },

  componentWillUnmount: function(){
    this.userStoreListener.remove();
  },

  openEventDetailModal: function(){
    this.bigClickGo = false;
    this.setState({ eventDetailModalOpen: true });
  },

  closeEventDetailModal: function(){
    this.setState({ eventDetailModalOpen: false });
    this.bigClickGo = true;
  },

  openEditEventModal: function(){
    console.log("small click");
    this.bigClickGo = false;
    this.setState({ editEventModalOpen: true });
  },

  closeEditEventModal: function(){
    this.setState({ editEventModalOpen: false });
    this.bigClickGo = true;
  },

  openDeleteEventModal: function(){
    this.bigClickGo = false;
    this.setState({ deleteEventModalOpen: true });
  },

  closeDeleteEventModal: function(){
    this.setState({ deleteEventModalOpen: false });
    this.bigClickGo = true;
  },

  showDetail: function () {
    this.context.router.push('/event/'+ this.props.event.id);
  },

  activateDeleteProcess: function(){
    console.log("activateDeleteProcess");
    console.log(this.props.event.id);
    ClientActions.deleteEvent(this.props.event.id);
  },

  goToEventSplash: function(clickEvent){
    if (this.bigClickGo){
      var destination = "/event/" + this.props.event.id;
      hashHistory.push(destination);
      // console.log("Big Click Event");
    }
  },

  render: function () {

    var editOptionForLoggedInUsers;

    console.log("Is the user logged in?" + UserStore.loggedIn());
    // debugger;
    if (UserStore.loggedIn() && UserStore.user().id === this.props.event.user_id){
      editOptionForLoggedInUsers =(
        <div>
            <ul className="index-item-menu-ul">
              <li className="edit-or-delete" onClick={this.openEditEventModal}>Edit Event</li>
              <li className="edit-or-delete" onClick={this.openDeleteEventModal}>Delete Event</li>
          </ul>
        </div>
      );
    }

          // <img src={this.props.event.image_url} width="300px"></img>
                      // <p>{this.props.event.description}</p>

    // TODO: Add this back to LI's
    // onClick={this.goToEventSplash}

    // style={{backgroundImage: "url(" + this.props.event.image_url + ")"}}

    return(
        <div onClick={this.goToEventSplash} className="event-list-item"
            >

            <img src={this.props.event.image_url} width="275px" height="200px"></img>
            <div className="title">
              <h1 color="white" text-align="center" className="change"><b>{this.props.event.title}</b></h1>
              <p color="white"><em>{this.props.event.catchphrase}</em></p>
            </div>
            <br></br>
              <div id="menubuttons">
                <ul className="index-item-menu-ul">
                  <li className="index-item-menu-li"  onClick={this.openEventDetailModal}>Get Tickets</li>
                  <li className="index-item-menu-li"  onClick={this.goToEventSplash}>Learn More</li>
                </ul>
              </div>

            {editOptionForLoggedInUsers}

            <Modal
               isOpen={this.state.eventDetailModalOpen}
               onRequestClose={this.closeEventDetailModal}>

               <div   style={{backgroundImage: "url(" + this.props.event.image_url + ")"}}>

                 <h1>Hello, Welcome to this Modal!</h1>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <h1>{this.props.event.title}</h1>
               </div>

                  <p>{this.props.event.description}</p>

                 <EventModal event={this.props.event}/>

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

              <Modal
                isOpen={this.state.editEventModalOpen}
                onRequestClose={this.closeEditEventModal}>

                  <h1>Edit Event Modal</h1>

                  <EditEventModal event={this.props.event}/>

              </Modal>

      </div>


    );
  }
});


//  <EventDetail event={this.props.event} />
