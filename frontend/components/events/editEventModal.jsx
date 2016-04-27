var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var Link = require('react-router').Link;
var ClientActions = require('../../actions/clientActions.js');

module.exports = React.createClass({

  getInitialState: function(){
    var potentialEvent = EventStore.find(this.props.params.eventId);
    var event = potentialEvent ? potentialEvent : {};
    
  }

});
