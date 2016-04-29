var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var ApiUtil = require('../../util/apiUtil');

module.exports = React.createClass({

  getStateFromStore: function () {
    // ApiUtil.fetchSingleEvent(parseInt(this.props.params.eventId));
    return { event: EventStore.find(parseInt(this.props.params.eventId)) };
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
          <h1>Event Splash</h1>

        <section id="event-page-splash" className="splash-heading padding-top-bottom">

          <h1>
            Title: {this.state.event.title}
          </h1>
          <h6>
            Catchphrase
          </h6>
          <p><a href="#event-page-showtimes">Go to Showtimes</a></p>

        </section>
        <section id="event-page-description" className="white-bg padding-top-bottom">

          <p>
            Description
          </p>

        </section>
        <section id="event-page-video" className="event-video padding-top-bottom">

            <iframe width="{854/2}"
                    height="{480/2}"
                    src="https://www.youtube.com/embed/-xDlEXO4UJs?list=PLUSRfoOcUe4avCXPg6tPgdZzu--hBXUYx"
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


      </div>

    );
  }

});
