var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var Link = require('react-router').Link;
var ClientActions = require('../../actions/client_actions.js');

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

    componentDidMount: function(){
      // this.myListener = EventStore.addListener(this.handleChange);
      // ClientActions.fetchSingleEvent(this.props.params.eventId);
    },

    componentWillUnmount: function(){
      // this.myListener.remove();
    },

    titleChange: function(keyboardEvent){
      var newTitle = keyboardEvent.target.value;
      this.setState({ title: newTitle });
      console.log("Title: " + this.state.title);
    },

    catchphraseChange: function(keyboardEvent){
      var newCatchphrase = keyboardEvent.target.value;
      this.setState({ catchphrase: newCatchphrase});
    },

    descriptionChange: function(keyboardEvent){
      var newDescription = keyboardEvent.target.value;
      this.setState({ description: newDescription});
    },

    imageUrlChange: function(keyboardEvent){
      var newImageUrl = keyboardEvent.target.value;
      this.setState({ image_url: newImageUrl});
    },

    videoUrlChange: function(keyboardEvent){
      var newVideoUrl = keyboardEvent.target.value;
      this.setState({ video_url: newVideoUrl});
    },

    userIdChange: function(keyboardEvent){
      var newUserId = keyboardEvent.target.value;
      this.setState({ user_id: newUserId});
    },

    revenueGoalChange: function(keyboardEvent){
      var newRevenueGoal = keyboardEvent.target.value;
      this.setState({ revenue_goal: newRevenueGoal});
    },

    // handleChange: function(){
    //   var potentialEvent = EventStore.find(this.props.event.id);
    //   var event = potentialEvent ? potentialEvent : {};
    //   this.setState({
    //     title: event.title,
    //     catchphrase: event.catchphrase,
    //     description: event.description,
    //     image_url: event.image_url,
    //     video_url: event.video_url,
    //     user_id: event.user_id,
    //     revenue_goal: event.revenue_goal,
    //     revenue_status: event.revenue_status
    //   });
    // },

    handleSubmit: function(keyboardEvent){
      console.log("handle submit!");
      keyboardEvent.preventDefault();
      var eventData = {
        // TODO: id (eventID?)
        id: parseInt(this.props.event.id),
        title: this.state.title,
        catchphrase: this.state.catchphrase,
        description: this.state.description,
        image_url: this.state.image_url,
        video_url: this.state.video_url,
        user_id: this.state.user_id,
        revenue_goal: this.state.revenue_goal,
        // Change this for revenue status
        revenue_status: 0,
      };
      ClientActions.editEvent(eventData);
      // hashHistory.push("/");
    },

  render: function(){
    return(
      <div>
        <h6>Now we are inside the Edit Event Modal</h6>
          <div>
            <h3>Create New Event</h3>
            <form onSubmit={this.handleSubmit}>

              <br></br>

              <label> Title:
                <input type="text"
                        value={this.state.title}
                        onChange={this.titleChange}
                  />
              </label>

              <br></br>

              <label> Catchphrase:
                <input type="text"
                        value={this.state.catchphrase}
                        onChange={this.catchphraseChange}
                  />
              </label>

              <br></br>

              <label> Description:
                <input type="text"
                        value={this.state.description}
                        onChange={this.descriptionChange}
                  />
              </label>

              <br></br>

              <label> URL for Image to Embed:
                <input type="text"
                        value={this.state.imageUrl}
                        onChange={this.imageUrlChange}
                  />
              </label>

              <br></br>

              <label> URL for Video to Embed:
                <input type="text"
                        value={this.state.videoUrl}
                        onChange={this.videoUrlChange}
                  />
              </label>

              <br></br>

              <label> User Id:
                <input type="text"
                        value={this.state.userId}
                        onChange={this.userIdChange}
                  />
              </label>

              <br></br>

              <label> Revenue Goal:
                <input type="text"
                        value={this.state.revenueGoal}
                        onChange={this.revenueGoalChange}
                  />
              </label>

              <br></br>

            <input type="submit" value="Save Changes" />

            <br></br>

            </form>
          </div>

      </div>
    );
  }

});
