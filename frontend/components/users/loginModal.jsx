var React = require("react");
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ClientActions = require('../../actions/client_actions');
// var UserActions = require('../../actions/userActions');
// var CurrentUserState = require('../../mixins/currentUserState');

var LoginModal = React.createClass({

	// mixins: [LinkedStateMixin, CurrentUserState],

	// mixins: [CurrentUserState],

	getInitialState: function(){
		return {form: "login"};
	},

	setForm: function(keyboardEvent){
		this.setState({form: keyboardEvent.currentTarget.value});
	},

	handleSubmit: function(keyboardEvent){
		keyboardEvent.preventDefault();
		ClientActions[this.state.form]({
			username: this.state.username,
			password: this.state.password
		});
	},

	logout: function(keyboardEvent){
		keyboardEvent.preventDefault();
		ClientActions.logout();
	},

	greeting: function(){
		if (!this.state.currentUser) {
			return;
		}

		return(
			<div>
				<h2>Hi, {this.state.currentUser.username}!</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
	},

	errors: function(){
		if (!this.state.userErrors){
			return;
		}

		var self = this;
		return (<ul>
			{
				Object.keys(this.state.userErrors).map(function(key, i){
					return (<li key={i}>{self.state.userErrors[key]}</li>);
				})
			}
		</ul>);
	},

	form: function(){
		if (this.state.currentUser){
			return;
		}

		return(
			<form onSubmit={this.handleSubmit}>
				<section>
					<label> Username:
						<input type="text" valueLink={this.linkState("username")}/>
					</label>

					<label> Password:
						<input type="password" valueLink={this.linkState("password")}/>
					</label>
				</section>

				<section>
					<label> Login
						<input type="Radio" name="action" value="login" onChange={this.setForm}/>
					</label>

					<label> Sign Up
						<input type="Radio" name="action" value="signup" onChange={this.setForm}/>
					</label>
				</section>

				<input type="Submit" value="Submit"/>
			</form>
		);
	},

	render: function(){
		return(
			<div id="login-form">
				{this.greeting()}
				{this.errors()}
				{this.form()}
			</div>
		);
	}

	//
	// getInitialState: function(){
	// 	return ({ username: "",
	// 						password: "",
	// 						firstName: "",
	// 						lastName: ""
	// 					});
	// },
	//
	// usernameChange: function(keyboardEvent){
	// 	var newUsername = keyboardEvent.target.value;
	// 	this.setState({ username: newUsername});
	// 	console.log("");
	// 	console.log("Username: " + this.state.username);
	// 	console.log("Password: " + this.state.password);
	// 	console.log("First Name: " + this.state.firstName);
	// 	console.log("Last Name: " + this.state.lastName);
	// 	console.log("");
	// },
	//
	// passwordChange: function(keyboardEvent){
	// 	var newPassword = keyboardEvent.target.value;
	// 	this.setState({ password: newPassword});
	// 	console.log("");
	// 	console.log("Username: " + this.state.username);
	// 	console.log("Password: " + this.state.password);
	// 	console.log("First Name: " + this.state.firstName);
	// 	console.log("Last Name: " + this.state.lastName);
	// 	console.log("");
	// },
	//
	// firstNameChange: function(keyboardEvent){
	// 	var newFirstName= keyboardEvent.target.value;
	// 	this.setState({ firstName: newFirstName});
	// 	console.log("");
	// 	console.log("Username: " + this.state.username);
	// 	console.log("Password: " + this.state.password);
	// 	console.log("First Name: " + this.state.firstName);
	// 	console.log("Last Name: " + this.state.lastName);
	// 	console.log("");
	// },
	//
	// lastNameChange: function(keyboardEvent){
	// 	var newLastName= keyboardEvent.target.value;
	// 	this.setState({ lastName: newLastName});
	// 	console.log("");
	// 	console.log("Username: " + this.state.username);
	// 	console.log("Password: " + this.state.password);
	// 	console.log("First Name: " + this.state.firstName);
	// 	console.log("Last Name: " + this.state.lastName);
	// 	console.log("");
	// },
	//
	// handleSubmit: function(keyboardEvent){
	// 	keyboardEvent.preventDefault();
	// 	var userData = {
	// 		username: this.state.username,
	// 		password: this.state.password,
	// 		firstName: this.state.firstName,
	// 		lastName: this.state.lastName
	// 	};
	// 	ClientActions.createUser(userData);
	// },
	//
	// render: function(){
	// 	return (
	// 		<div id="login-form">
	//
	// 		<iframe src="//giphy.com/embed/OF0yOAufcWLfi" width="480" height="237" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
	//
	// 			<form onSubmit={this.handleSubmit}>
	//
	// 				<br></br>
	//
	// 					<label> Username:
	// 						<input
	// 								type="text"
	// 								value={this.state.username}
	// 								onChange={this.usernameChange}
	// 						/>
	// 					</label>
	//
	// 					<br></br>
	//
	// 					<label> Password:
	// 						<input
	// 								type="password"
	// 								value={this.state.password}
	// 								onChange={this.passwordChange}
	// 						/>
	// 					</label>
	//
	// 					<br></br>
	//
	// 					<label> First Name:
	// 						<input
	// 								type="text"
	// 								value={this.state.firstName}
	// 								onChange={this.firstNameChange}
	// 						/>
	// 					</label>
	//
	// 					<br></br>
	//
	// 					<label> Last Name:
	// 						<input
	// 								type="text"
	// 								value={this.state.lastName}
	// 								onChange={this.lastNameChange}
	// 						/>
	// 					</label>
	//
	// 					<br></br>
	//
	// 					<br></br>
	//
	// 					<br></br>
	//
	// 				<input type="Submit" value="Submit"/>
	// 			</form>
	// 		</div>
	// 	);
	// }
});

module.exports = LoginModal;
