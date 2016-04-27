var AppDispatcher = require('../dispatcher'),
    SessionConstants = require('../constants/session_constants');

module.exports = {
  receiveCurrentUser: function(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SESSION_RECEIVED,
      user: user
    });
  },

  logOutCurrentUser: function(nullUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SESSION_DESTROYED,
      user: null
    });
  }
};
