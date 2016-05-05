var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var UserStore = require('../../stores/user');
var hashHistory = require("react-router").hashHistory;

module.exports = React.createClass({

  goToCreateEvent: function(){
    hashHistory.push("/wizard-event");
  },

  render: function(){

    return(
        <div className="create-event-background">
          <h1 className="home-title">Welcome to the Event Creation Wizard</h1>
            <div id="menubuttons">
              <ul className="header-ul">
                <li className="header-li header-li-reverse" onClick={this.goToCreateEvent}>Get Started</li>
              </ul>

            </div>
        </div>
    );

  }

});
