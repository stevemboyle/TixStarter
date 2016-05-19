var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');

module.exports = React.createClass({

  getStateFromStore: function () {
    return { event: EventStore.find(parseInt(this.props.params.eventId))};
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.fetchSingleEvent(parseInt(newProps.params.event.id));
  },

  componentDidMount: function () {
    window.scrollTo(0, 0);
    this.eventListener = EventStore.addListener(this._onChange);
    ClientActions.fetchSingleEvent(parseInt(this.props.params.eventId));
  },

  componentWillUnmount: function () {
    this.eventListener.remove();
  },

  setEventBackgroundImage: function(){
    return({
      backgroundImage: 'url(' + this.state.event.image_url + ')',
      WebkitTransition: 'all',
      msTransition: 'all'
    });
  },

  giveNumberCommas: function(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  revenueStatus: function(){
    return this.giveNumberCommas(this.getUpToDateRevenueStatus());
  },

  revenueGoal: function(){
    return this.giveNumberCommas(this.state.event.revenue_goal);
  },

  getUpToDateRevenueStatus: function(){
    var result = 0;
    this.state.event.showtimes.forEach(function(showtime){
      showtime.tickets.forEach(function(ticket){
        ticket.ticket_purchases.forEach(function(ticket_purchase){
          result = result + ticket_purchase.ticket.price;
        });
      });
    });
    return result;
  },

  percentFunded: function(){
    var rawRatio = this.getUpToDateRevenueStatus() / this.state.event.revenue_goal;
    var percentage = rawRatio * 100;
    var roundedPercentage = Math.round(percentage);
    return roundedPercentage;
  },

  render: function(){

    if(this.state.event === undefined) { return <div></div>; }

    return(
      <div id="EventSplashFullPage">


        <section id="event-page-splash" className="splash-heading padding-top-bottom"
          style={{backgroundImage: "url(" + this.state.event.image_url + ")"}}>

          <div id="event-splash-text" className="event-splash-text">

            <h1 color="white" text-align="center" className="home-title">
              {this.state.event.title}
            </h1>
            <h3 color="white" text-align="center" className="home-catchphrase">
              {this.state.event.catchphrase}
            </h3><h3>
              <br></br>
              <b>Revenue Status:</b> ${this.revenueStatus()} | <b>Revenue Goal:</b> ${this.revenueGoal()}
              <br></br>
              <p>This event is {this.percentFunded()}% funded.</p>
            </h3>
          </div>
            <div id="menubuttons">
              <ul className="index-item-menu-ul">
                <li className="home-splash-li"><a href="#event-page-description" text-align="center" className="scroll-a">See Description</a></li>
                <li className="home-splash-li"><a href="#event-page-video" text-align="center" className="scroll-a">Watch Video</a></li>
                <li className="home-splash-li"><a href="#event-page-showtimes" text-align="center" className="scroll-a">See Showtimes</a></li>
                <br></br>
                <li className="home-splash-li"><a href="#event-page-showtimes" text-align="center" className="scroll-a">Get Tickets</a></li>
              </ul>
            </div>

        </section><section id="lower-menu">

        <br></br>

      </section>
        <section
          id="event-page-description"
          className="white-bg padding-top-bottom"
          >

          <h1>{this.state.event.title}</h1>
          <p>{this.state.event.catchphrase}</p>
          <br></br>
          <p>{this.state.event.description}</p>
          <br></br>
          <p><b>Revenue Status:</b> ${this.revenueStatus()}</p>
          <p><b>Revenue Goal:</b> ${this.revenueGoal()}</p>
          <br></br>

          <br></br>

        </section>
        <section id="event-page-video" className="event-video padding-top-bottom">

          <div id="video-div" className="video-div">
            <iframe width="854"
              height="480"
              src={"https://www.youtube.com/embed/" + this.state.event.video_url}
              frameBorder="0"
              allowFullScreen>
            </iframe>
          </div>

        </section>
          <section id="lower-menu">

      <br></br>

    </section>

        <section id="event-page-showtimes">
          <h2 className="events-index-header">Showtimes:</h2>
          <ShowtimesIndex showtimes={this.state.event.showtimes} />
        </section>

      </div>

    );
  }

});
