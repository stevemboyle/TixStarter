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

//Mixins
var CurrentUserState = require('.././mixins/currentUserState');

module.exports = React.createClass({

  render: function () {

    return(

      <div>

        <section id="home-splash">

          <h1 className="cody-font">Welcome to TixStarter</h1>
          <h3 className="cody-font">Forward Fund Events with Ticket Sales</h3>

          <div id="home-buttons">
            <a href="#home-events-index">Browse Events</a>
            <a href="#home-marketing">Learn More</a>
          </div>

          <h4>Scroll down for More</h4>
        </section>
        <section id="home-events-index">

        <h1>This is Now Home</h1>

          <div id="tixstarter">
            <div id="menu">
              <p>hello there</p>
            </div>

            <div className="event-index-pane">
              <EventIndex />
            </div>
          </div>

        {this.props.children}

      </section>
      <section id="home-marketing">

        <h1>Welcome to TixStarter</h1>
        <h3>Forward Fund Events with Ticket Sales</h3>

        <h4>Scroll down for More</h4>
      </section>
    </div>

    );
  }
});
