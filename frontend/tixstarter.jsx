var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var Modal = require("react-modal");

var App = require('./components/app.jsx');
var EventDetail = require('./components/events/detail.jsx');
var ShowtimeDetail = require('./components/showtimes/detail.jsx');
var ApiUtil = require('./util/apiUtil');
var UserApiUtil = require('./util/userApiUtil');

// TODO: Call API Util Fetch Current User immediately
// TODO: This is ready to go. Just comment the below out:
UserApiUtil.fetchCurrentUser();

// var LoginForm = require('./components/LoginForm');
// Mixins

var CurrentUserState = require('./mixins/currentUserState');

var routes = (
  <Route path="/" component={App}>
    <Route path="event/:eventId" component={EventDetail}>
      <Route path="showtimes/:showtimeId" component={ShowtimeDetail}>
      </Route>
    </Route>
    <Route path="showtimes/:showtimeId" component={ShowtimeDetail} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body);
  ReactDOM.render(
    <Router history={HashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});
