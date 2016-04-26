var React = require('react');
var EventForm = require('./events/form');
var EventIndex = require('./events/index');
// var LoginForm = require('./users/usersLoginForm');
var Modal = require("react-modal");

//Mixins
// var CurrentUserState = require('.././mixins/currentUserState');

module.exports = React.createClass({

  // mixins: [CurrentUserState],

  getInitialState: function(){
     return({ modalOpen: false });
   },

   openModal: function(){
     this.setState({ modalOpen: true });
   },

   closeModal: function(){
     this.setState({ modalOpen: false });
   },

  render: function () {

    return(

      <div>

        <div id="othermenu">
          <p>hello</p>
          <button onClick={this.openModal}>Open Me!</button>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

            <h2>Im a modal!</h2>
            <p>modal modal modal modal modal</p>
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
