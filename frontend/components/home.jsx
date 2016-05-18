var React = require('react');
var EventIndex = require('./events/index');

module.exports = React.createClass({

  componentDidMount: function(){
    window.scrollTo(0, 0);
    console.log("Hello!");
    console.log("Welcome to TixStarter.io");
    console.log("For more information about the creator of this site:");
    console.log("Email Steve@CoderBoyle.io");
  },

  render: function () {

    return(

      <div>

        <section id="home-splash">

          <div id="home-splash-text">
            <h2 text-align="center" className="home-title">Welcome to TixStarter</h2>
            <h3 text-align="center" className="home-dropphrase">Forward Fund Live Experiences with Ticket Sales</h3>

              <div id="menubuttons">
                <ul className="index-item-menu-ul">
                  <li className="home-splash-li"><a href="#home-events-index" text-align="center" className="scroll-a">Browse Experiences</a></li>

                </ul>
              </div>
          </div>

        </section><section id="lower-menu">

        <br></br>

      </section>
        <section id="home-events-index">

          <div id="tixstarter">
            <div className="event-index-pane">
              <EventIndex />
            </div>
          </div>

        {this.props.children}

      </section><section id="lower-menu">

      <br></br>

    </section>
    </div>

    );
  }
});
