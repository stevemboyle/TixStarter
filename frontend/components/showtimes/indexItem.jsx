var React = require('react');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  showDetail: function () {
    var url = '/event/' + this.props.showtime.event_id + '/showtimes/' + this.props.showtime.id;
    this.context.router.push(url);
  },

  render: function () {
    var attrs = ['name', 'happiness', 'price'].map(function (attr) {
      return <p key={attr}>{attr}: {this.props.showtime[attr]}</p>;
    }.bind(this));

    return(
      <div>
        <p>Hey!</p>
        <li onClick={this.showDetail} className="showtime-list-item">
          <p>Hey! Hey!</p>
          {attrs}
        </li>
      </div>
    );
  }
});
