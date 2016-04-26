var React = require('react');
var EventForm = require('./events/form');
var EventIndex = require('./events/index');

module.exports = React.createClass({

  render: function () {
    return(



      <div>
        <div id="othermenu">
          <p>hello</p>
        </div>
        <div>

        </div>
        <div id="tixstarter">
        <div id="menu">
        <p>hello</p>
        </div>
        <td>
          <tr>
            {this.props.children}
          </tr>
          <tr>
            <div className="event-index-pane">
              <EventIndex />
            </div>
          </tr>
        </td>





        </div>
      </div>
    );
  }
});
