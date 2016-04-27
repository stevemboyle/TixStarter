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
     return({ signInModalOpen: false,
              signUpModalOpen: false,
              demoAccountModalOpen: false
            });
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

   openDemoAccountModal: function(){
     this.setState({ demoAccountModalOpen: true });
   },

   closeDemoAccountModal: function(){
     this.setState({ demoAccountModalOpen: false });
   },


  render: function () {

    return(

      <div>

      <h1>Test</h1>

        <div id="othermenu">
          <p>hello</p>
          <button onClick={this.openSignInModal}>Sign In</button>
          <button onClick={this.openSignUpModal}>Sign Up</button>
          <button onClick={this.openDemoAccountModal}>Demo Account</button>
        </div>

        <Modal
          isOpen={this.state.signInModalOpen}
          onRequestClose={this.closeSignInModal}>

            <h2>Sign In!</h2>
            <p>(The below component is LoginModal)</p>

            <LoginModal />

            <br></br>

            <iframe width="{854/1.5}"
                    height="{480/1.5}"
                    src="https://www.youtube.com/embed/eOdWU-EnOEk"
                    frameborder="0"
                    allowfullscreen>
            </iframe>

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

        <Modal
          isOpen={this.state.demoAccountModalOpen}
          onRequestClose={this.closeDemoAccountModal}>

            <h2>Demo Account</h2>

            <p>This feature does not yet exist. So, sit tight, watch Hamilton, and I'll have this cranked out in a jiffy:</p>

            <br></br>

            <iframe width="{854/1.2}"
                    height="{480/1.2}"
                    src="https://www.youtube.com/embed/6ibySV-saJ8"
                    frameborder="0"
                    allowfullscreen>
            </iframe>

            <p>mooooooooodal!</p>

        </Modal>

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
