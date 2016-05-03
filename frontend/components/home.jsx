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
var CurrentUserState = require('.././mixins/currentUserState');

module.exports = React.createClass({

  componentDidMount: function(){
    window.scrollTo(0, 0);
  },

  render: function () {

    return(

      <div>

        <section id="home-splash">

          <div id="home-splash-text">
            <h2 text-align="center" className="cody-font">Welcome to TixStarter</h2>
            <h3 text-align="center" className="cody-font">Forward Fund Events with Ticket Sales</h3>

              <a href="#home-events-index" text-align="center">
                Browse Events
              </a>

              <a href="#home-marketing" text-align="center">
                Learn More
              </a>
          </div>

        </section><section id="lower-menu">

        <a href="#home-events-index" text-align="center">
          Browse Events
        </a>

        <a href="#home-marketing" text-align="center">
          Learn More
        </a>

      </section>
        <section id="home-events-index">

          <div id="tixstarter">
            <div className="event-index-pane">
              <EventIndex />
            </div>
          </div>

        {this.props.children}

      </section><section id="home-marketing">

        <h1>Welcome to TixStarter</h1>
        <h3>Forward Fund Events with Ticket Sales</h3>

        <h4>Scroll down for More</h4>
      </section><section  id="home-whitespace"
        className="white-bg padding-top-bottom"
        >

        <h1>Text!</h1>

      </section><section id="footer"
        className="footer">
        <p>Hello, I am a footer!</p>
      </section>
    </div>

    );
  }
});
