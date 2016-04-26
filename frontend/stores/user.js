var Store = require('flux/utils').Store;
var UserConstants = require('../constants/userConstants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var UserStore = new Store(AppDispatcher);

var _currentUser = {};

UserStore.sign_in = function(user){
  _currentUser = user;
  session[:session_token] = nil;
};

// var resetPosts = function (posts) {
//   _posts = {};
//
//   posts.forEach(function (post) {
//     _posts[post.id] = post;
//   });
// };
//
// var setPost = function (post) {
//   _posts[post.id] = post;
// };
//
// var removePost = function (post) {
//   delete _posts[post.id];
// };
//
// PostStore.all = function () {
//   return Object.keys(_posts).map(function (postId) {
//     return _posts[postId];
//   });
// };
//
// PostStore.find = function (id) {
//   return _posts[id];
// };


UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      sign_in(payload.user);
      break;
  }
  this.__emitChange();
};

module.exports = PostStore;
