var React = require("react");
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var UserActions = require("../../actions/userActions");
// var CurrentUserState = require("../../mixins/currentUserState");

var LoginForm = React.createClass({

	// mixins: [LinkedStateMixin, CurrentUserState],

	// mixins: [CurrentUserState],

	render: function(){
		return (
			<div id="login-form">
				<form onSubmit={this.handleSubmit}>

						<label> Username:
							<input type="text"/>
						</label>

						<label> Password:
							<input type="password"/>
						</label>

					<input type="Submit" value="Submit"/>
				</form>
			</div>
		);
	}
});

module.exports = LoginForm;
