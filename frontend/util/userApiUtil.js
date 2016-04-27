var AppDispatcher = require("../dispatcher/dispatcher");
var UserActions = require('../actions/userActions');

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
      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  }

};

module.exports = UserApiUtil;
