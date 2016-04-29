var React = require('react');
var Modal = require("react-modal");
var ShowtimeModal = require('../showtimes/showtimeModal');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var ApiUtil = require('../../util/apiUtil');

module.exports = React.createClass({

  getStateFromStore: function () {
    // ApiUtil.fetchSingleEvent(parseInt(this.props.params.eventId));
    return { event: EventStore.find(parseInt(this.props.params.eventId)),
              showtimeModalOpen: false   };
  },

  openShowtimeModal: function(){
    this.setState({ showtimeModalOpen: true });
  },

  closeShowtimeModal: function(){
    this.setState({ showtimeModalOpen: false });
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleEvent(parseInt(newProps.params.event.id));
  },

  componentDidMount: function () {
    this.eventListener = EventStore.addListener(this._onChange);
    ApiUtil.fetchSingleEvent(parseInt(this.props.params.eventId));
  },

  componentWillUnmount: function () {
    this.eventListener.remove();
  },

  render: function(){

    if(this.state.event === undefined) { return <div></div>; }

    return(
      <div id="EventSplashFullPage">

        <section id="event-page-splash" className="splash-heading padding-top-bottom">

          <a id="top"></a>

          <div id="event-splash-text" className="event-splash-text">
            <h1 color="white" text-align="center">
              {this.state.event.title}
            </h1>
            <h6>
              {this.state.event.catchphrase}
            </h6>
          </div>
              <div id="home-buttons" className="home-buttons">
                <br></br>
                <p><a href="#event-page-description">See Description</a></p>
                <p><a href="#event-page-video">Watch Video</a></p>
                <p><a href="#event-page-showtimes">See Showtimes</a></p>
                <br></br>
                <p><a href="#event-page-showtimes">Get Tickets</a></p>
          </div>


        </section>
        <section id="event-page-description" className="white-bg padding-top-bottom">

          <h1>{this.state.event.title}</h1>
          <p>{this.state.event.description}</p>

        </section>
        <section id="event-page-video" className="event-video padding-top-bottom">

          <p>{this.state.event.video_url}</p>

            <iframe width="854"
              height="480"
              src="https://www.youtube.com/embed/gKc31H6adR8"
              frameborder="0"
              allowfullscreen>
            </iframe>

        </section>
        <section id="event-page-showtimes" className="white-bg padding-top-bottom">

          <p>
            Showtimes Go Here
          </p>

          <ShowtimesIndex showtimes={this.state.event.showtimes} />

        </section>

        <Modal
           isOpen={this.state.showtimeModalOpen}
           onRequestClose={this.closeShowtimeAndEventModals}>

             <h2>Im supposed to be a modal!</h2>

            <ShowtimeModal showtime={this.props.showtime}/>

            <button onClick={this.closeShowtimeModal}>Back</button>

             <p>modal modal modal modal modal</p>
             <p>mooooooooodal!</p>

         </Modal>


      </div>

    );
  }

});
