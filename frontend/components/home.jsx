var React = require('react');
var EventForm = require('./events/form');
var EventIndex = require('./events/index');
// var LoginForm = require('./users/usersLoginForm');
var LoginModal = require('./users/loginModal');
var CreateEventModal = require('./events/createEventModal');
var CreateShowtimeModal = require('./showtimes/createShowtimeModal');
// var UserActions = require('../actions/userActions');
var SignUpModal = require('./users/signUpModal');

var UserStore = require('../stores/user');

var Modal = require("react-modal");
var UserApiUtil = require('../util/userApiUtil');
var SignInModal = require('./users/signInModal');
var MyDashboardModal = require('./events/userDashboardEventsIndex');

//Mixins
// var CurrentUserState = require('.././mixins/currentUserState');

module.exports = React.createClass({

  componentDidMount: function(){
    window.scrollTo(0, 0);
  },

  render: function () {

    //TODO: Add Marketing Content (Commented Out Below) Back IN

      // <li className="home-splash-li"><a href="#home-marketing" text-align="center" className="scroll-a">Learn More</a></li>

      // <section id="home-marketing">
      //
      //     <h1>Welcome to TixStarter</h1>
      //     <h3>Forward Fund Events with Ticket Sales</h3>
      //
      //     <h4>Scroll down for More</h4>
      //   </section><section id="lower-menu">
      //
      //   <br></br>
      //
      // </section><section  id="home-whitespace"
      //     className="white-bg padding-top-bottom"
      //     >
      //
      //     <h1>Text!</h1>
      //
      //   </section>

    return(

      <div>

        <section id="home-splash">

          <div id="home-splash-text">
            <h2 text-align="center" className="home-title">Welcome to TixStarter</h2>
            <h3 text-align="center" className="home-dropphrase">Forward Fund Live Experiences with Ticket Sales</h3>

              <div id="menubuttons">
                <ul className="index-item-menu-ul">
                  <li className="home-splash-li"><a href="#home-events-index" text-align="center" className="scroll-a">Browse Experiences</a></li>

                </ul>
              </div>
          </div>

        </section><section id="lower-menu">

        <br></br>

      </section>
        <section id="home-events-index">

          <div id="tixstarter">
            <div className="event-index-pane">
              <EventIndex />
            </div>
          </div>

        {this.props.children}

      </section><section id="lower-menu">

      <br></br>

    </section>
    </div>

    );
  }
});
