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

  logout: function(){
    $.ajax({
      url: "/api/session",
      method: "delete",
      success: function(){
        UserActions.removeCurrentUser();
      },
      error: function(){
        UserActions.handleError();
      }
    });
  },

  // Server Actions method, rather than passed in

  fetchCurrentUser: function(){
    console.log("Fetch Current User");
    $.ajax({
      url: "/api/session",
      method: "get",
      success: function(user){
        console.log('success function for fetch current user');
        // So, right now, UserActions is an empty {} object
        // Why, I have no idea.
        UserActions.receiveCurrentUser(user);
      }.bind(this),
      error: function(error){
        console.log('error function for fetch current user');
        UserActions.handleError(error);
      }
    });
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

};

module.exports = UserApiUtil;
