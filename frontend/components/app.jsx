var React = require('react');
var EventForm = require('./events/form');
var EventIndex = require('./events/index');
// var LoginForm = require('./users/usersLoginForm');
var LoginModal = require('./users/loginModal');

var Modal = require("react-modal");

//Mixins
// var CurrentUserState = require('.././mixins/currentUserState');

module.exports = React.createClass({

  // mixins: [CurrentUserState],

  getInitialState: function(){
     return({ signInModalOpen: false, signUpModalOpen: false });
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

  render: function () {

    return(

      <div>

        <div id="othermenu">
          <p>hello</p>
          <button onClick={this.openSignInModal}>Sign In</button>
          <button onClick={this.openSignUpModal}>Sign Up</button>
        </div>

        <Modal
          isOpen={this.state.signInModalOpen}
          onRequestClose={this.closeSignInModal}>

            <h2>Sign In!</h2>
            <p>(The below component is LoginModal)</p>

            <LoginModal />

            <p>mooooooooodal!</p>

        </Modal>

        <Modal
          isOpen={this.state.signUpModalOpen}
          onRequestClose={this.closeSignUpModal}>

            <h2>Sign Up!!</h2>
            <p>(The below component is LoginModal)</p>

            <LoginModal />

            <p>mooooooooodal!</p>

        </Modal>

        <div section="index-of-events" className="an-events-index">
          <EventIndex />
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
