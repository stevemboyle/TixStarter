var React = require('react');
var CreateEventModal = require('./createEventModal');

module.exports = React.createClass({

  render: function(){

    return(
        <div className="create-event-background">
          <h1 className="home-title">The Event Creation Wizard</h1>
            <div id="menubuttons">
              <ul className="header-ul">
                <li className="header-li header-li-reverse" onClick={this.goToCreateEvent}>Get Started</li>
              </ul>

              <CreateEventModal />

            </div>
        </div>
    );

  }

});
