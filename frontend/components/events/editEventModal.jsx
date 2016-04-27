var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var Link = require('react-router').Link;
var ClientActions = require('../../actions/clientActions.js');

module.exports = React.createClass({

  getInitialState: function(){
    var potentialEvent = EventStore.find(this.props.event.id);
    var event = potentialEvent ? potentialEvent : {};
    return {
      title: event.title,
      catchphrase: event.catchphrase,
      description: event.description,
      image_url: event.image_url,
      video_url: event.video_url,
      user_id: event.user_id,
      revenue_goal: event.revenue_goal,
      revenue_status: event.revenue_status};
    },

  render: function(){
    return(
      <div>
        <h6>Now we are inside the Edit Event Modal</h6>


      </div>
    );
  }

});
