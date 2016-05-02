var React = require('react');

module.exports = React.createClass({

  // getInitialState: function(){
  // },

  componentDidMount: function(){
    // this.myListener = EventStore.addListener(this.handleChange);
    // ClientActions.fetchSingleEvent(this.props.params.eventId);
  },

  componentWillUnmount: function(){
    // this.myListener.remove();
  },

  render: function () {

    debugger;

    return(
      <div>
        <br></br>
          <br></br>
            <br></br>
              <br></br>
                <br></br>
                  <br></br>
                    <br></br>
                      <br></br>
        <p>{this.props.params.ticket_purchaseId}</p>
        <p>Awesome! You bought tickets to the show.</p>
        <p>What would you like to do now?</p>
        <p>Buy More Tickets</p>
        <p>See My Tickets</p>
      </div>
    );
  }
});
