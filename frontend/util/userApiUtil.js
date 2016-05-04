var AppDispatcher = require("../dispatcher/dispatcher");
// var ServerActions = require('../actions/userActions');
var UserConstants = require('../constants/userConstants.js');
var ServerActions = require('../actions/serverActions');
var hashHistory = require("react-router").hashHistory;
var UserApiUtil = {

  signup: function(data){
    $.ajax({
      url: "/api/user",
      type: "post",
      data: {user: data},
      success: function(user){
        hashHistory.push('/home');
        // debugger;
        console.log("We're in the success function for SignUp");
        ServerActions.receiveCurrentUser(user);
      },

      // success: function(){
      //   UserActions.receiveCurrentUser,
      //   App.closeSignInModal;
      //   App.closeSignUpModal;
      // },
      error: function(error){
        console.log("We're in the error function for SignUp");
        ServerActions.handleError(error);
      }
    });
  },

  login: function(data){
    console.log("useractions login called");
    $.ajax({
      url: "/api/session",
      type: "post",
      data: { user: data },
      success: function(user){
        hashHistory.push('/home');
        // debugger;
        ServerActions.receiveCurrentUser(user);
      },
      error: function(error){
        // debugger;
        ServerActions.handleError();
      }

    });
  },

  guestLogin: function(){
    ServerActions.login({username: "guest", password: "password"});
  },

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
        ServerActions.removeCurrentUser();
      },
      error: function(){
        ServerActions.handleError();
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
        ServerActions.receiveCurrentUser(user);
      }.bind(this),
      error: function(error){
        console.log('error function for fetch current user');
        ServerActions.handleError(error);
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
