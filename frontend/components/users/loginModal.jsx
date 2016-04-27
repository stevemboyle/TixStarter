var React = require("react");
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var UserActions = require("../../actions/userActions");
// var CurrentUserState = require("../../mixins/currentUserState");

var ClientActions = require('../../actions/clientActions.js');

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
		console.log("");
		console.log("Username: " + this.state.username);
		console.log("Password: " + this.state.password);
		console.log("First Name: " + this.state.firstName);
		console.log("Last Name: " + this.state.lastName);
		console.log("");
	},

	passwordChange: function(keyboardEvent){
		var newPassword = keyboardEvent.target.value;
		this.setState({ password: newPassword});
		console.log("");
		console.log("Username: " + this.state.username);
		console.log("Password: " + this.state.password);
		console.log("First Name: " + this.state.firstName);
		console.log("Last Name: " + this.state.lastName);
		console.log("");
	},

	firstNameChange: function(keyboardEvent){
		var newFirstName= keyboardEvent.target.value;
		this.setState({ firstName: newFirstName});
		console.log("");
		console.log("Username: " + this.state.username);
		console.log("Password: " + this.state.password);
		console.log("First Name: " + this.state.firstName);
		console.log("Last Name: " + this.state.lastName);
		console.log("");
	},

	lastNameChange: function(keyboardEvent){
		var newLastName= keyboardEvent.target.value;
		this.setState({ lastName: newLastName});
		console.log("");
		console.log("Username: " + this.state.username);
		console.log("Password: " + this.state.password);
		console.log("First Name: " + this.state.firstName);
		console.log("Last Name: " + this.state.lastName);
		console.log("");
	},

	handleSubmit: function(keyboardEvent){
		keyboardEvent.preventDefault();
		var userData = {
			username: this.state.username,
			password: this.state.password,
			firstName: this.state.firstName,
			lastName: this.state.lastName
		};
		ClientActions.createUser(userData);
	},

	render: function(){
		return (
			<div id="login-form">

			<iframe src="//giphy.com/embed/OF0yOAufcWLfi" width="480" height="237" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

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

						<label> First Name:
							<input
									type="text"
									value={this.state.firstName}
									onChange={this.firstNameChange}
							/>
						</label>

						<br></br>

						<label> Last Name:
							<input
									type="text"
									value={this.state.lastName}
									onChange={this.lastNameChange}
							/>
						</label>

						<br></br>

						<br></br>

						<br></br>

					<input type="Submit" value="Submit"/>
				</form>
			</div>
		);
	}
});

module.exports = LoginModal;
