var React = require('react');
var Modal = require("react-modal");
var ShowtimeModal = require('../showtimes/showtimeModal');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
// var ApiUtil = require('../../util/apiUtil');

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
    ClientActions.fetchSingleEvent(parseInt(newProps.params.event.id));
  },

  componentDidMount: function () {
    // $(window).scrollTop(0);
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
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    });
  },

  giveNumberCommas: function(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  revenueStatus: function(){
  // debugger;
    // return this.giveNumberCommas(this.state.event.revenue_status);
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

    // <div className="header-section">
    //   Let's Get Tickets! Start by Picking Your Showtime
    // </div>

    // var percentFunded = (this.state.event.revenue_status / this.state.event.revenue_goal);

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
              frameborder="0"
              allowfullscreen>
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
