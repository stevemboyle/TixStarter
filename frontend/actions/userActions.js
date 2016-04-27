var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
var UserApiUtil = require('../util/userApiUtil.js');
var UserStore = require('../stores/user');
var App = require('../components/app');

var UserActions = {

  // TODO: Hard code success/error below into User Api Utils

  fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser();
  },

  signup: function(data){
    console.log("We in User Actions sign up");
    $.ajax({
      url: "/api/user",
      type: "post",
      data: {user: data},
      success: function(user){
        console.log("We're in the success function for SignUp");
        UserActions.receiveCurrentUser(user);
      },

      // success: function(){
      //   UserActions.receiveCurrentUser,
      //   App.closeSignInModal;
      //   App.closeSignUpModal;
      // },
      error: function(){
        console.log("We're in the error function for SignUp");
        UserActions.handleError();
      }
    });
  },

  login: function(user){
    UserApiUtil.post({
      url: "/api/session",
      user: user,
      success: UserActions.receiveCurrentUSer,
      error: UserActions.handleError
    });
  },

  guestLogin: function(){
    UserActions.login({username: "guest", password: "password"});
  },

  receiveCurrentUser: function(user){
    console.log("Okay, now we're in receiveCurrentUser with our user as " + user);
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  },

  removeCurrentUser: function(){
    AppDispatcher.disaptch({
      actionType: UserConstants.LOGOUT,
    });
  },

  logout: function(){
    UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
  }

};

module.exports = UserActions;
