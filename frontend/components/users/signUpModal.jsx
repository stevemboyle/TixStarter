var React = require("react");
var UserActions = require('../../actions/userActions');

var SignUpModal = React.createClass({

  getInitialState: function(){
    return({
      username: "",
      password: ""
    });
  },

  usernameChange: function(keyboardEvent){
    var newUsername = keyboardEvent.target.value;
    this.setState({ username: newUsername });
    console.log("Username: " + this.state.username);
  },

  passwordChange: function(keyboardEvent){
    var newPassword = keyboardEvent.target.value;
    this.setState({ password: newPassword });
    console.log("Password: " + this.state.password);
  },

  handleSubmit: function(keyboardEvent){
    keyboardEvent.preventDefault();
    var userData = {
      username: this.state.username,
      password: this.state.password
    };

    console.log("We're in Handle Submit, and about to call UserActions.sign up using " + userData + " as our userData");

    UserActions.signup(userData);
  },

  render: function(){

    return(
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.handleSubmit}>

        <br></br>

        <label> Username:
          <input type="text"
                  value={this.state.username}
                  onChange={this.usernameChange}
            />
        </label>

        <label> Password:
          <input type="password"
                  value={this.state.password}
                  onChange={this.passwordChange}
            />
        </label>

        <input type="submit" value="Sign Up!" />

          <br></br>

          </form>

      </div>
    );
  }

});

module.exports = SignUpModal;
