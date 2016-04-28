var AppDispatcher = require("../dispatcher/dispatcher");
var UserActions = require('../actions/userActions');
var UserConstants = require('../constants/userConstants.js');

var UserApiUtil = {
  post: function(options){
    $.ajax({
      url: options.url,
      type: "post",
      data: {user: options.user},
      success: options.succes,
      error: options.error
    });
  },

  logout: function(success, error){
    $.ajax({
      url: "/api/session",
      method: "delete",
      success: success,
      error: error
    });
  },

  // Server Actions method, rather than passed in

  fetchCurrentUser: function(){
    $.ajax({
      url: "/api/session",
      method: "get",
      success: function(user){
        debugger;
        // So, right now, UserActions is an empty {} object
        // Why, I have no idea.
        console.log("We're in the success function for Fetch Current User");
        this.receiveCurrentUser(user);
      }.bind(this),
      error: function(error){
        console.log("We're in the Error Function for Fetch Current User");
        UserActions.handleError(error);
      }
    });
  },

  receiveCurrentUser: function(user){
    console.log("We're in the fake userApiUtil receive current user in receiveCurrentUser with our user as " + user);
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

};

module.exports = UserApiUtil;
