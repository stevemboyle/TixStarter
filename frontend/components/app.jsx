var React = require('react');
var EventForm = require('./events/form');
var EventIndex = require('./events/index');
var EventStore = require('../stores/event');
// var LoginForm = require('./users/usersLoginForm');
var LoginModal = require('./users/loginModal');
var CreateEventModal = require('./events/createEventModal');
var CreateShowtimeModal = require('./showtimes/createShowtimeModal');
var CreateTicketModal = require('./tickets/createTicketModal');
// var UserActions = require('../actions/userActions');
var SignUpModal = require('./users/signUpModal');
var ClientActions = require('../actions/client_actions');
var UserStore = require('../stores/user');

var Modal = require("react-modal");
// var UserApiUtil = require('../util/userApiUtil');
var SignInModal = require('./users/signInModal');
var MyDashboardModal = require('./events/userDashboardEventsIndex');
var MyTicketsModal = require('./tickets/userTicketsIndex');
var hashHistory = require("react-router").hashHistory;


//Mixins
// var CurrentUserState = require('.././mixins/currentUserState');

var CUSTOM_STYLE = {
  content : {
    'display' : 'flex',
    'justify-content' : 'center',
    'align-items' : 'center',
    'zIndex': '100000',
    'margin': '100px auto',
    'border': '0px solid dodgerblue',
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    'width' : '600px',
    'height' : '350px',
    'padding': '0px',
    'box-shadow' : '0px 0px 15px grey'
    // 'background': 'grey'
    // 'background-image': 'url(http://www.defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg)'
  }
};

module.exports = React.createClass({

  // mixins: [CurrentUserState],

  getInitialState: function(){
     return({ signInModalOpen: false,
              signUpModalOpen: false,
              demoAccountModalOpen: false,
              createEventModalOpen: false,
              createShowtimeModalOpen: false,
              myDashboardModalOpen: false,
              myTicketsModalOpen: false,
              createTicketModalOpen: false,
              currentUser: UserStore.user()
            });
   },

   componentDidMount: function(){
      this.userStoreListener = UserStore.addListener(this._userChanged);
      this.eventSuccessListener = EventStore.addListener(this._eventCreated);
      window.scrollTo(0, 0);
   },

   componentWillUnmount: function(){
     this.userStoreListener.remove();
     this.eventSuccessListener.remove();
   },

   _userChanged: function(){
     this.setState({currentUser: UserStore.user()});
   },

   _eventCreated: function(){
    //  debugger;
     if (EventStore.createSuccess()){
      //  debugger;
       var id = EventStore.showNewEventId();
       this.closeCreateEventModal();
       hashHistory.push("/event/" + id);
     }
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

    openCreateTicketModal: function(){
        this.setState({ createTicketModalOpen: true });
    },

    closeCreateTicketModal: function(){
      this.setState({ createTicketModalOpen: false });
    },


    openMyDashboardModal: function(){
        this.setState({ myDashboardModalOpen: true });
    },

    closeMyDashboardModal: function(){
      this.setState({ myDashboardModalOpen: false });
    },

    openMyTicketsModal: function(){
        this.setState({ myTicketsModalOpen: true });
    },

    closeMyTicketsModal: function(){
      this.setState({ myTicketsModalOpen: false });
    },

    justClickedLogOut: function(){
      ClientActions.logout();
    },

    signInWithDemoAccount: function(){
      console.log("app: sign in with demo account");
      ClientActions.login({username: "guest", password: "password"});
    },

    returnHome: function(){
      hashHistory.push("/");
    },

    listMenu: function() {
      return(
        <li>Stand-In Menu</li>
      );
    },

    customModalStyle: function(){
      return({
        content : {
          'z-index': 10000
        }
      });
    },

    goToDashboard: function(){
      hashHistory.push("/dashboard");
    },

    goToMyTickets: function(){
      hashHistory.push("/mytickets");
    },

    goToCreateEvent: function(){
      // hashHistory.push("/create-event");
      hashHistory.push("/wizard");
    },

    goToCreateShowtime: function(){
      hashHistory.push("/create-showtime");
    },

    goToCreateTicket: function(){
      hashHistory.push("/create-ticket");
    },

    goToSignUp: function(){
      hashHistory.push("/sign-up");
    },

    goToSignIn: function(){
      hashHistory.push("/sign-in");
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

              // <li className="header-li" onClick={this.goToMyTickets}>My Tickets</li>

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
        <p onClick={this.returnHome} className="hover-pointer cody-font home-title">TixStarter</p>
        <p>{loggedInMessageForSteve}</p>
        <div id="menubuttons">
          <ul className="header-ul">
            <li className="header-li"  onClick={this.goToSignIn}>Sign In</li>
            <li className="header-li"  onClick={this.goToSignUp}>Sign Up</li>
            <li className="header-li"  onClick={this.signInWithDemoAccount}>Demo Account</li>
          </ul>
        </div>
    </div>
    );

    var loggedInMenu =(
      <div id="othermenu">
        <p onClick={this.returnHome} className="hover-pointer cody-font home-title">TixStarter</p>
        <br></br>
        <div id="menubuttons">
          <ul className="header-ul">
            <li className="header-li" onClick={this.goToCreateEvent}>Create Event</li>
            {hasEventsMenu}
            <li className="header-li" onClick={this.goToDashboard}>My Dashboard</li>
            <li className="header-li" onClick={this.justClickedLogOut}>Log Out</li>
          </ul>

        </div>
      </div>
    );

    var hasEventsMenu;


    var loggedInMessageForSteve;

    if (UserStore.loggedIn()){
      menu = (
                <div id="othermenu">
                  <p onClick={this.returnHome} className="hover-pointer cody-font home-title">TixStarter</p>
                  <br></br>
                  <div id="menubuttons">
                    <ul className="header-ul">
                      <li className="header-li" onClick={this.goToCreateEvent}>Create Event</li>
                      {hasEventsMenu}
                      <li className="header-li" onClick={this.goToDashboard}>My Dashboard</li>
                      <li className="header-li" onClick={this.justClickedLogOut}>Log Out</li>
                    </ul>

                  </div>
                </div>
              );

      if (UserStore.user().events[0]){
        // hasEventsMenu = (
        //   <div>
        //     <li className="header-li" onClick={this.goToCreateShowtime}>Create Showtime</li>
        //     <li className="header-li" onClick={this.goToCreateTicket}>Create Ticket</li>
        //   </div>
        // );
      // loggedInMessageForSteve = "Hello, " + UserStore.user().first_name + ". You are logged In!";
        menu = (
                <div id="othermenu">
                  <p onClick={this.returnHome} className="hover-pointer cody-font home-title">TixStarter</p>
                  <br></br>
                  <div id="menubuttons">
                    <ul className="header-ul">
                      <li className="header-li" onClick={this.goToCreateEvent}>Create Event</li>
                      <li className="header-li" onClick={this.goToCreateShowtime}>Create Showtime</li>
                      <li className="header-li" onClick={this.goToCreateTicket}>Create Ticket</li>
                      <li className="header-li" onClick={this.goToDashboard}>My Dashboard</li>
                      <li className="header-li" onClick={this.justClickedLogOut}>Log Out</li>
                    </ul>

                  </div>
                </div>
            );
      }

    } else {
      menu = (
              <div id="othermenu">
                <p onClick={this.returnHome} className="hover-pointer cody-font home-title">TixStarter</p>
                <p>{loggedInMessageForSteve}</p>
                <div id="menubuttons">
                  <ul className="header-ul">
                    <li className="header-li"  onClick={this.goToSignIn}>Sign In</li>
                    <li className="header-li"  onClick={this.goToSignUp}>Sign Up</li>
                    <li className="header-li"  onClick={this.signInWithDemoAccount}>Demo Account</li>
                  </ul>
                </div>
            </div>
            );
    }

    // <header id="home-menu" className="home-menu">
    //   <h1 class="header-logo">
    //     TixStarter
    //   </h1>
    //   <ul class="header-list group">
    //     <li>Sample Button</li>
    //     <li>Sample Button</li>
    //   </ul>
    // </header>

    return(

      <div>

      {menu}

        <Modal
          isOpen={this.state.signInModalOpen}
          onRequestClose={this.closeSignInModal}
          style={CUSTOM_STYLE}>

          <div className="sign-in-modal-splash">
            <SignInModal />
            </div>

        </Modal>

        <Modal
          isOpen={this.state.signUpModalOpen}
          onRequestClose={this.closeSignUpModal}
          style={CUSTOM_STYLE}>
            <SignUpModal />


        </Modal>

        <Modal
          isOpen={this.state.demoAccountModalOpen}
          onRequestClose={this.closeDemoAccountModal}
          style={CUSTOM_STYLE}>
          <div className="sign-in-modal-splash">
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
            </div>
        </Modal>

        <Modal
          isOpen={this.state.createEventModalOpen}
          onRequestClose={this.closeCreateEventModal}
          style={CUSTOM_STYLE}
          >
                <div className="sign-in-modal-splash">
            <h2>CreateEventModal</h2>

            <CreateEventModal />
            </div>
        </Modal>

        <Modal
          isOpen={this.state.createShowtimeModalOpen}
          onRequestClose={this.closeCreateShowtimeModal}
          style={CUSTOM_STYLE}>
      <div className="sign-in-modal-splash">
            <h2>CreateShowtimeModal</h2>

            <CreateShowtimeModal />
            </div>
        </Modal>

        <Modal
          isOpen={this.state.createTicketModalOpen}
          onRequestClose={this.closeCreateTicketModal}
          style={CUSTOM_STYLE}>
      <div className="sign-in-modal-splash">
            <h2>CreateTicketModal</h2>

            <CreateTicketModal />
            </div>
        </Modal>

        <Modal
          isOpen={this.state.myDashboardModalOpen}
          onRequestClose={this.closeMyDashboardModal}
          style={CUSTOM_STYLE}>
      <div className="sign-in-modal-splash">
            <h2>MyDashboard</h2>

            <MyDashboardModal />
            </div>
        </Modal>

        <Modal
          isOpen={this.state.myTicketsModalOpen}
          onRequestClose={this.closeMyTicketsModal}
          style={CUSTOM_STYLE}>
      <div className="sign-in-modal-splash">
            <h2>MyTickets</h2>

            <MyTicketsModal />
            </div>
        </Modal>

        {this.props.children}

        <section id="footer"
          className="footer">

        </section>

      </div>
    );
  }
});
