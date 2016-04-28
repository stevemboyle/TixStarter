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

        <h1>App</h1>

        {this.props.children}

      </div>
    );
  }
});
