var React = require('react');
var Modal = require("react-modal");
var ShowtimeModal = require('./showtimeModal');
// var EventsIndex = require('../events/indexItem.jsx');
var UserStore = require('../../stores/user');
var hashHistory = require("react-router").hashHistory;
var ClientActions = require('../../actions/client_actions');

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

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return({ showtimeModalOpen: false,
              signUpInDemoModalOpen: false,
              currentUser: UserStore.user()
           });
  },

  _userChanged: function(){
    this.setState({currentUser: UserStore.user()});
  },

  componentDidMount: function(){
    this.userStoreListener = UserStore.addListener(this._userChanged);
  },

  componentWillUnmount: function(){
    this.userStoreListener.remove();
  },

  goToShowtimeModal: function(){
    if (UserStore.loggedIn()){
      this.openShowtimeModal();
    } else {
      this.openSignUpInDemoModal();
    }
  },

  openShowtimeModal: function(){

    this.setState({ showtimeModalOpen: true });
  },

  closeShowtimeModal: function(){
    this.setState({ showtimeModalOpen: false });
  },

  openSignUpInDemoModal: function(){
    this.bigClickGo = false;
    this.setState({ signUpInDemoModalOpen: true });
  },

  closeSignUpInDemoModal: function(){
    this.setState({ signUpInDemoModalOpen: false });
    this.bigClickGo = true;
  },

  closeShowtimeAndEventModals: function(){
    this.closeShowtimeModal();

    //TODO: Figure out how to close all modals.

    // EventsIndex.closeEventDetailModal();
  },


    goToSignIn: function(){
      hashHistory.push('/sign-in');
    },

    goToSignUp: function(){
      hashHistory.push('/sign-up');
    },

    goToDemoAccount: function(){
      ClientActions.login({username: "guest", password: "password"});
      this.setState({ signUpInDemoModalOpen: false });
    },


  render: function () {
        // <h1>{this.props.showtime.time.slice(11, 19)}</h1>

    //
    // var attributeArray = ['id',
    //                       'event_id',
    //                       'date',
    //                       'time',
    //                       'location'
    //                       ];
    //
    // var attrs = attributeArray.map(function (attr) {
    //   return <p key={attr}>{attr}: {this.props.showtime[attr]}</p>;
    // }.bind(this));


    return(
      <div className="event-list-item">
        <div>
          <li onClick={this.goToShowtimeModal} className="event-list-item">
              <h1>{this.props.showtime.date}</h1>
              <h1>{this.props.showtime.time.slice(11, 19)}</h1>

              <img src={this.props.showtime.event.image_url} width="275px" height="200px"></img>
            <p>{this.props.showtime.event.title}</p>
            <p>{this.props.showtime.location}</p>
          </li>
        </div>
        <div>
          <Modal
             isOpen={this.state.showtimeModalOpen}
             onRequestClose={this.closeShowtimeAndEventModals}
             style={GET_TIX_STYLE}>

             <div style={{background: "dodgerblue"}}>
               <div>
                 <h3 className="home-catchphrase">{this.props.showtime.event.title}</h3>
                 </div>

                <h1 className="home-title" textAlign="center">Pick your ticket!</h1>
                <h3 className="home-catchphrase">Choose your price and tier from the options below:</h3>

                  <ShowtimeModal showtime={this.props.showtime}/>

                   <div style={{background: "dodgerblue"}}>
                       <h3 className="home-catchphrase">{this.props.showtime.date} at {this.props.showtime.location}</h3>
                   </div>
                 </div>

           </Modal>
           <Modal

              isOpen={this.state.signUpInDemoModalOpen}
              onRequestClose={this.closeSignUpInDemoModal}
              style={CUSTOM_STYLE}>

                <h1>Sign In to Buy Tickets!</h1>

                  <div id="menubuttons">
                    <ul className="index-item-menu-ul">
                      <li className="index-item-menu-li"  onClick={this.goToSignIn}>Sign In</li>
                      <li className="index-item-menu-li"  onClick={this.goToSignUp}>Sign Up</li>
                     <li className="index-item-menu-li"  onClick={this.goToDemoAccount}>Use Demo Account</li>

                    </ul>
                  </div>

            </Modal>
        </div>
      </div>
    );
  }
});
