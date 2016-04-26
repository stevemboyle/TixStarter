var React = require('react');


module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  showDetail: function () {
    this.context.router.push('/event/'+ this.props.event.id);
  },

  render: function () {
    return(
      <div>
        <li onClick={this.showDetail} className="event-list-item">
          <p><b>{this.props.event.title}</b></p>
          <p>{this.props.event.description}</p>
        </li>
      </div>
    );
  }
});
