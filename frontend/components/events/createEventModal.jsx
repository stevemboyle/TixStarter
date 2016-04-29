var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var UserStore = require('../../stores/user');

module.exports = React.createClass({

  getInitialState: function(){
    return({
      title: "",
      catchphrase: "",
      description: "",
      image_url: "",
      video_url: "",
      user_id: String(UserStore.user().id),
      revenue_goal: "",
      revenue_status: 0,
    });
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

  // userIdChange: function(keyboardEvent){
  //   var newUserId = keyboardEvent.target.value;
  //   this.setState({ user_id: newUserId});
  // },

  revenueGoalChange: function(keyboardEvent){
    var newRevenueGoal = keyboardEvent.target.value;
    this.setState({ revenue_goal: newRevenueGoal});
  },

  handleSubmit: function(keyboardEvent){
    keyboardEvent.preventDefault();
    var eventData = {
      title: this.state.title,
      catchphrase: this.state.catchphrase,
      description: this.state.description,
      image_url: this.state.image_url,
      video_url: this.state.video_url,
      user_id: String(UserStore.user().id),
      revenue_goal: this.state.revenue_goal,
      revenue_status: 0,
    };

    ClientActions.createEvent(eventData);
    // this.setState({
    //   title: "",
    //   catchphrase: "",
    //   description: "",
    //   imageUrl: "",
    //   videoUrl: "",
    //   userId: "",
    //   revenueGoal: "",
    //   revenueStatus: 0,
    // });
  },

  render: function(){
    return(
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

          <label> Revenue Goal:
            <input type="text"
                    value={this.state.revenueGoal}
                    onChange={this.revenueGoalChange}
              />
          </label>

          <br></br>

        <input type="submit" value="Create Event" />

        <br></br>

        </form>
      </div>
    );
  }

});
