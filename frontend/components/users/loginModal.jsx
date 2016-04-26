var React = require("react");
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var UserActions = require("../../actions/userActions");
// var CurrentUserState = require("../../mixins/currentUserState");
// var ClientAction

var LoginModal = React.createClass({

	// mixins: [LinkedStateMixin, CurrentUserState],

	// mixins: [CurrentUserState],

	getInitialState: function(){
		return ({ username: "",
							password: "",
							firstName: "",
							lastName: ""
						});
	},

	usernameChange: function(keyboardEvent){
		var newUsername = keyboardEvent.target.value;
		this.setState({ username: newUsername});
	},

	passwordChange: function(keyboardEvent){
		var newPassword = keyboardEvent.target.value;
		this.setState({ password: newPassword});
	},

	firstNameChange: function(keyboardEvent){
		var newFirstName= keyboardEvent.target.value;
		this.setState({ firstName: newFirstName});
	},

	lastNameChange: function(keyboardEvent){
		var newLastName= keyboardEvent.target.value;
		this.setState({ lastName: newLastName});
	},

	handleSubmit: function(keyboardEvent){
		keyboardEvent.preventDefault();
		var userData = {
			username: this.state.username,
			password: this.state.password,
			firstName: this.state.firstName,
			lastName: this.state.lastName
		};
		// ClientActions.createUser(userData);
	},

	render: function(){
		return (
			<div id="login-form">
				<form onSubmit={this.handleSubmit}>

					<br></br>

						<label> Username:
							<input
									type="text"
									value={this.state.username}
									onChange={this.usernameChange}
							/>
						</label>

						<br></br>

						<label> Password: 
							<input
									type="password"
									value={this.state.password}
									onChange={this.passwordChange}
							/>
						</label>

						<br></br>
						<br></br>

					<input type="Submit" value="Submit"/>
				</form>
			</div>
		);
	}
});

module.exports = LoginModal;
