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

    // <div style={{backgroundImage: "url(" + this.props.event.image_url + ")"}}>

var GET_TIX_STYLE = {
  content : {
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    // 'align-items' : 'center',
    'zIndex': '100000',
    'margin': '100px auto  auto',
    'width' : '80%',
    'border': '0px solid dodgerblue',
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    // 'width' : '600px',
    // 'height' : '350px',
    'padding': '0px',
    'box-shadow' : '0px 0px 15px grey'
    // 'background': 'dodgerblue'
    // 'background-image': 'url(http://www.defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg)'
  }
};

var CUSTOM_STYLE = {
  content : {
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    // 'align-items' : 'center',
    // 'zIndex': '100000',
    'background-color' : 'dodgerblue',
    'text-align' : 'center',
    'margin': '100px auto',
    'border': '0px solid dodgerblue',
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    'width' : '600px',
    'height' : '350px',
    'padding': '100px',
    'box-shadow' : '0px 0px 15px grey'
    // 'background': 'grey'
    // 'background-image': 'url(http://www.defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg)'
  }
};

var CUSTOM_STYLE_2 = {
  content : {
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    // 'align-items' : 'center',
    'zIndex': '100000',
    'background-color' : 'dodgerblue',
    'text-align' : 'center',
    'margin': '75px auto',
    'border': '0px solid dodgerblue',
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    'width' : '90%',
    'height' : '75vh',
    'padding': '5px',
    'box-shadow' : '0px 0px 15px grey'
    // 'background': 'grey'
    // 'background-image': 'url(http://www.defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg)'
  }
};

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
    this.setState({ deleteEventModalOpen: false });
  },

  goToEventSplash: function(clickEvent){
    if (this.bigClickGo){
      var destination = "/event/" + this.props.event.id;
      hashHistory.push(destination);
      // console.log("Big Click Event");
    }
  },

  getUpToDateRevenueStatus: function(){
    var result = 0;
    this.props.event.showtimes.forEach(function(showtime){
      showtime.tickets.forEach(function(ticket){
        ticket.ticket_purchases.forEach(function(ticket_purchase){
          result = result + ticket_purchase.ticket.price;
        });
      });
    });
    return result;
  },

  percentFunded: function(){
    var rawRatio = this.getUpToDateRevenueStatus() / this.props.event.revenue_goal;
    var percentage = rawRatio * 100;
    var roundedPercentage = Math.round(percentage);
    return roundedPercentage;
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
              <p color="white">{this.percentFunded()}% Percent Funded</p>
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
               onRequestClose={this.closeEventDetailModal}
               style={GET_TIX_STYLE}>

              <div style={{background: "dodgerblue"}}>
                <div>
                  <h3 className="home-catchphrase">{this.props.event.title}</h3>
                  </div>

                 <h1 className="home-title" textAlign="center">Let's get tickets!</h1>
                 <h3 className="home-catchphrase">First, pick your showtime from the options below:</h3>

                    <EventModal event={this.props.event}/>


                    <div style={{background: 'white'}}>
                      <br></br>
                    </div>
                    <div style={{background: "dodgerblue"}}>
                        <h3 className="home-catchphrase">{this.props.event.title}</h3>
                    </div>
                  </div>

             </Modal>

             <Modal

                isOpen={this.state.deleteEventModalOpen}
                onRequestClose={this.closeDeleteEventModal}
                style={CUSTOM_STYLE}>

                  <h1>Delete Event</h1>

                  <h2>Are you sure?</h2>

                    <div id="menubuttons">
                      <ul className="index-item-menu-ul">
                        <li className="index-item-menu-li"  onClick={this.activateDeleteProcess}>Yes</li>
                        <li className="index-item-menu-li"  onClick={this.closeDeleteEventModal}>No</li>
                      </ul>
                    </div>

              </Modal>

              <Modal
                isOpen={this.state.editEventModalOpen}
                onRequestClose={this.closeEditEventModal}
                style={CUSTOM_STYLE_2}>

                  <EditEventModal event={this.props.event}/>

              </Modal>

      </div>


    );
  }
});


//  <EventDetail event={this.props.event} />
