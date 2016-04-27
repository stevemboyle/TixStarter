var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/session_constants.js');
var AppDispatcher = require("../dispatcher/dispatcher.js");

var SessionStore = new Store(AppDispatcher);

var _currentUser;

SessionStore.currentUser = function() {
  return _currentUser;
};

SessionStore.isLoggedIn = function() {
  return !!_currentUser;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {

    case SessionConstants.SESSION_RECEIVED:
      _currentUser = payload.currentUser;
      SessionStore.__emitChange();
      break;

    case SessionConstants.SESSION_DESTROYED:
      _currentUser = null;
      SessionStore.__emitChange();
      break;

  }
};

module.exports = SessionStore;
