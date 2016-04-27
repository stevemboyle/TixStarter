var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

module.exports = {

  var AppDispatcher = require('../dispatcher'),
    UserConstants = require('../constants/user_constants');

module.exports = {
  receiveUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  }
}

  loginUser: function (user) {
    console.log("User Actions: loginUser called");
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN_USER,
      user: user
    });
  },

  logoutUser: function () {
    console.log("User Actions: logoutUser called");
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT_USER,
    });
  },

  destroyUser: function (user) {
    console.log("User Actions: destroyUser called");
    Dispatcher.dispatch({
      actionType: UserConstants.DESTROY_USER,
      user: user
    });
  },

  receiveError: function(error) {
    console.log("User Actions: receiveError called");
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_ERROR,
      error: error
    });
  }
};
