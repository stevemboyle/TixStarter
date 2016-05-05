var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var TicketPurchaseStore = require('./stores/ticketPurchase');

var Modal = require("react-modal");

var App = require('./components/app.jsx');
var Home = require('./components/home.jsx');

var EventSplash = require('./components/events/splashPage');
var ClientActions = require('./actions/client_actions');
var EventDetail = require('./components/events/detail.jsx');
var ShowtimeDetail = require('./components/showtimes/detail.jsx');
var Success = require('./components/users/success.jsx');
var TicketPurchase = require('./components/ticket_purchases/success.jsx');
var UserDashboardEventsIndex = require('./components/events/userDashboardEventsIndex');
var UserTicketsIndex = require('./components/tickets/userTicketsIndex');
var CreateEvent = require('./components/events/createEventModal');
var CreateShowtime = require('./components/showtimes/createShowtimeModal');
var CreateTicket = require('./components/tickets/createTicketModal');
var SignIn = require('./components/users/signInModal');
var SignUp = require('./components/users/signUpModal');
var TicketIndex = require('./components/tickets/index');
var NewEventWizard = require('./components/events/NewEventWizard');
var EventWizardForm = require('./components/events/wizardForm');
var ShowtimeWizardForm = require('./components/showtimes/wizardForm');
var TicketWizardForm = require('./components/tickets/wizardForm');
// var ApiUtil = require('./util/apiUtil');
// var UserApiUtil = require('./util/userApiUtil');

// TODO: Call API Util Fetch Current User immediately
// TODO: This is ready to go. Just comment the below out:
ClientActions.fetchCurrentUser();

// var LoginForm = require('./components/LoginForm');
// Mixins

var CurrentUserState = require('./mixins/currentUserState');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home}/>
    <Route path="home-events-index" component={Home}/>
    <Route path="home-marketing" component={Home}/>
    <Route path="event/:eventId" component={EventSplash} />
      <Route path="showtimes/:showtimeId" component={ShowtimeDetail}>
    </Route>
    <Route path="showtimes/:showtimeId" component={ShowtimeDetail} />
    <Route path="tickets" component={TicketIndex} />
    <Route path="success" component={Success} />
    <Route path="ticket_purchases/:ticket_purchaseId" component={TicketPurchase}/>
    <Route path="dashboard" component={UserDashboardEventsIndex}/>
    <Route path="mytickets" component={UserTicketsIndex}/>
    <Route path="create-event" component={CreateEvent}/>
    <Route path="create-showtime" component={CreateShowtime}/>
    <Route path="create-ticket" component={CreateTicket}/>
    <Route path="sign-in" component={SignIn}/>
    <Route path="sign-up" component={SignUp}/>
    <Route path="wizard" component={NewEventWizard}/>
    <Route path="wizard-event" component={EventWizardForm}/>
    <Route path="wizard-showtime" component={ShowtimeWizardForm}/>
    <Route path="wizard-ticket" component={TicketWizardForm}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body);
  ReactDOM.render(
    <Router history={HashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});
