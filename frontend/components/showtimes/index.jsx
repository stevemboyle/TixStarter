var React = require('react');
var ShowtimeIndexItem = require('./indexItem.jsx');

module.exports = React.createClass({
  render: function () {
    return(
      <div className="showtime-index">
        <ul>
          {this.props.showtimes && this.props.showtimes.map(function (showtime) {
            return <ShowtimeIndexItem key={showtime.id} showtime={showtime} />;
          })}
        </ul>
      </div>
    );
  }
});
