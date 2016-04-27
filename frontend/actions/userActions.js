var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
var UserApiUtil = require('../util/userApiUtil.js');
var UserStore = require('../stores/user');
var App = require('../components/app');

var UserActions = {

  fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser,
                                  UserActions.handleError);
  },

  signup: function(user){
    UserApiUtil.post({
      url: "/api/user",
      user: user,
      success: UserActions.receiveCurrentUser,
      // success: function(){
      //   UserActions.receiveCurrentUser,
      //   App.closeSignInModal;
      //   App.closeSignUpModal;
      // },
      error: UserActions.handleError
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
