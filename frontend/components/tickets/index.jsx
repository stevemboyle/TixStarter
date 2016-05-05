var React = require('react');
var TicketIndexItem = require('./indexItem.jsx');

module.exports = React.createClass({


  render: function () {
    // debugger;
    return(
      <div className="index-for-events">
        <ul>
          {this.props.tickets && this.props.tickets.map(function (ticket) {
            return <TicketIndexItem key={ticket.id} ticket={ticket} />;
          })}
        </ul>
      </div>
    );
  }
});
