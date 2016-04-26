var React = require('react');
var EventForm = require('./events/form');
var EventIndex = require('./events/index');
var LoginForm = require('./users/usersLoginForm');

//Mixins
var CurrentUserState = require('.././mixins/currentUserState');

module.exports = React.createClass({

  mixins: [CurrentUserState],

  render: function () {

    return(



      <div>
        <div id="othermenu">
          <p>hello</p>
        </div>

         <LoginForm/>

        <div>

        </div>
        <div id="tixstarter">
        <div id="menu">
        <p>hello</p>
        </div>
            {this.props.children}
            <div className="event-index-pane">
              <EventIndex />
            </div>





        </div>
      </div>
    );
  }
});
