var React = require('react');
var EventForm = require('./events/form');
var EventIndex = require('./events/index');
// var LoginForm = require('./users/usersLoginForm');
var LoginModal = require('./users/loginModal');
var CreateEventModal = require('./events/createEventModal');
var CreateShowtimeModal = require('./showtimes/createShowtimeModal');
var UserActions = require('../actions/userActions');
var SignUpModal = require('./users/signUpModal');

var UserStore = require('../stores/user');

var Modal = require("react-modal");
var UserApiUtil = require('../util/userApiUtil');
var SignInModal = require('./users/signInModal');
var MyDashboardModal = require('./events/userDashboardEventsIndex');
var hashHistory = require("react-router").hashHistory;

//Mixins
var CurrentUserState = require('.././mixins/currentUserState');

module.exports = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function(){
     return({ signInModalOpen: false,
              signUpModalOpen: false,
              demoAccountModalOpen: false,
              createEventModalOpen: false,
              createShowtimeModalOpen: false,
              myDashboardModalOpen: false
            });
   },

   openSignInModal: function(){
     this.setState({ signInModalOpen: true });
   },

   closeSignInModal: function(){
     this.setState({ signInModalOpen: false });
   },

   openSignUpModal: function(){
     this.setState({ signUpModalOpen: true });
   },

   closeSignUpModal: function(){
     this.setState({ signUpModalOpen: false });
   },

   openDemoAccountModal: function(){
     this.setState({ demoAccountModalOpen: true });
   },

   closeDemoAccountModal: function(){
     this.setState({ demoAccountModalOpen: false });
   },

    openCreateEventModal: function(){
        this.setState({ createEventModalOpen: true });
    },

    closeCreateEventModal: function(){
      this.setState({ createEventModalOpen: false });
    },

    openCreateShowtimeModal: function(){
        this.setState({ createShowtimeModalOpen: true });
    },

    closeCreateShowtimeModal: function(){
      this.setState({ createShowtimeModalOpen: false });
    },

    openMyDashboardModal: function(){
        this.setState({ myDashboardModalOpen: true });
    },

    closeMyDashboardModal: function(){
      this.setState({ myDashboardModalOpen: false });
    },

    justClickedLogOut: function(){
      UserApiUtil.logout();
    },

    signInWithDemoAccount: function(){
      console.log("app: sign in with demo account");
      UserActions.login({username: "guest", password: "password"});
    },

    returnHome: function(){
      hashHistory.push("/");
    },

    listMenu: function() {
      return(
        <li>Stand-In Menu</li>
      );
    },

    // notLoggedInMenu: function(){
    //   return(
    //     <div id="othermenu">
    //       <p>hello</p>
    //       <button onClick={this.openSignInModal}>Sign In</button>
    //       <button onClick={this.openSignUpModal}>Sign Up</button>
    //       <button onClick={this.openDemoAccountModal}>Demo Account</button>
    //       <button onClick={this.openCreateEventModal}>Create Event</button>
    //     </div>
    //   );
    // },

    // loggedInMenu: function(){
    //   return(
    //     <div id="othermenu">
    //       <p>hello</p>
    //       <button onClick={this.openSignInModal}>Sign In</button>
    //       <button onClick={this.openSignUpModal}>Sign Up</button>
    //       <button onClick={this.openDemoAccountModal}>Demo Account</button>
    //       <button onClick={this.openCreateEventModal}>Create Event</button>
    //     </div>
    //   );
    // },

  render: function () {

    var menu;

    var notLoggedInMenu =(
      <div id="othermenu">
        <p onClick={this.returnHome}>TixStarter</p>
        <p>{loggedInMessageForSteve}</p>
        <div id="menubuttons">
          <button onClick={this.openSignInModal}>Sign In</button>
          <button onClick={this.openSignUpModal}>Sign Up</button>
          <button onClick={this.signInWithDemoAccount}>Demo Account</button>
        </div>
    </div>
    );

    var loggedInMenu =(
      <div id="othermenu">
        <p onClick={this.returnHome}>TixStarter</p>
        <br></br>
        <div id="menubuttons">
          <button onClick={this.openCreateEventModal}>Create Event</button>
          <button onClick={this.openCreateShowtimeModal}>Create Showtime</button>
          <button onClick={this.openMyDashboardModal}>My Dashboard</button>
          <button onClick={this.justClickedLogOut}>Log Out</button>

        </div>
      </div>
    );

    var loggedInMessageForSteve;

    if (UserStore.loggedIn()){
      loggedInMessageForSteve = "Hello, " + UserStore.user().first_name + ". You are logged In!";
      menu = loggedInMenu;
    } else {
      loggedInMessageForSteve = "NOT Logged In!";
      menu = notLoggedInMenu;
    }


    return(

      <div>

      <p>{loggedInMessageForSteve}</p>

      {menu}

        <Modal
          isOpen={this.state.signInModalOpen}
          onRequestClose={this.closeSignInModal}>

          	<h1>Sign In</h1>

            <h2>Sign In!</h2>
            <p>(The below component is SignInModal)</p>

            <SignInModal />

            <br></br>

            <iframe width="{854/1.5}"
                    height="{480/1.5}"
                    src="https://www.youtube.com/embed/eOdWU-EnOEk"
                    frameborder="0"
                    allowfullscreen>
            </iframe>

            <p>mooooooooodal!</p>

        </Modal>

        <Modal
          isOpen={this.state.signUpModalOpen}
          onRequestClose={this.closeSignUpModal}>

          	<h1>Sign Up</h1>

            <h2>Sign Up!!</h2>
            <p>(The below component is SignUpModal)</p>

            <SignUpModal />

            <p>mooooooooodal!</p>

        </Modal>

        <Modal
          isOpen={this.state.demoAccountModalOpen}
          onRequestClose={this.closeDemoAccountModal}>

            <h2>Demo Account</h2>

            <p>This feature has not been built yet!</p>

            <iframe src="//giphy.com/embed/xTiTnJ3BooiDs8dL7W"
                    width="480"
                    height="305"
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen>
            </iframe>

            <br></br>

            <p>Here, distract yourself with Hamilton until I finish:</p>

            <iframe width="{854/1.2}"
                    height="{480/1.2}"
                    src="https://www.youtube.com/embed/6ibySV-saJ8"
                    frameborder="0"
                    allowfullscreen>
            </iframe>

            <p>mooooooooodal!</p>

        </Modal>

        <Modal
          isOpen={this.state.createEventModalOpen}
          onRequestClose={this.closeCreateEventModal}>

            <h2>CreateEventModal</h2>

            <CreateEventModal />

        </Modal>

        <Modal
          isOpen={this.state.createShowtimeModalOpen}
          onRequestClose={this.closeCreateShowtimeModal}>

            <h2>CreateShowtimeModal</h2>

            <CreateShowtimeModal />

        </Modal>

        <Modal
          isOpen={this.state.myDashboardModalOpen}
          onRequestClose={this.closeMyDashboardModal}>

            <h2>MyDashboard</h2>

            <MyDashboardModal />

        </Modal>

        {this.props.children}

      </div>
    );
  }
});
