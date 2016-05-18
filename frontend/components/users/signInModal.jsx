var React = require("react");
var ClientActions = require('../../actions/client_actions');

var SignInModal = React.createClass({

  getInitialState: function(){
    return({
      username: "",
      password: ""
    });
  },

  usernameChange: function(keyboardEvent){
    var newUsername = keyboardEvent.target.value;
    this.setState({ username: newUsername });
  },

  passwordChange: function(keyboardEvent){
    var newPassword = keyboardEvent.target.value;
    this.setState({ password: newPassword });
  },

  handleSubmit: function(keyboardEvent){
    keyboardEvent.preventDefault();
    var userData = {
      username: this.state.username,
      password: this.state.password
    };

    ClientActions.login(userData);
  },

  render: function(){

    return(
      <div className="sign-in-background">
        <form onSubmit={this.handleSubmit} className="form-style-8">
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
        <input type="submit" value="Sign In!" />
          </form>
      </div>
    );
  }

});

module.exports = SignInModal;
