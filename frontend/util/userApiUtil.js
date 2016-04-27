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
      success: function(user){
        console.log("We're in the success function for Fetch Current User");
        UserActions.receiveCurrentUser(user);
      },
      error: function(error){
        console.log("We're in the Error Function for Fetch Current User");
        UserActions.handleError(error);
      }
    });
  }

};

module.exports = UserApiUtil;
