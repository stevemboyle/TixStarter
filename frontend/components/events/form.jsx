var React = require('react');
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ClientActions = require('../../actions/client_actions.js');

module.exports = React.createClass({
  // mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  blankAttrs: {
    title: '',
    description: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createEvent: function (keyEvent) {
    keyEvent.preventDefault();
    var event = {};
    Object.keys(this.state).forEach(function (key) {
      if(key !== "move_1" && key !== "move_2") { event[key] = this.state[key]; }
    }.bind(this));
    event.moves = [this.state.move_1, this.state.move_2];

    ClientActions.createEvent(event, function (id) {
      this.context.router.push("/event/" + id);
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      <form className='new-event' onSubmit={this.createEvent}>
        <div>
          <label htmlFor='event_name'>Name:</label>
          <input
            type='text'
            id='event_name'
            valueLink={this.linkState("name")}
          />
        </div>

        <div>
          <label htmlFor='event_image_url'>Image URL:</label>
          <input
            type='text'
            id='event_image_url'
            valueLink={this.linkState("image_url")}
          />
        </div>

        <div>
          <label htmlFor='event_poke_type'>Type:</label>
          <select className='type-selector' id='event_poke_type' valueLink={this.linkState("poke_type")}>

          </select>
        </div>

        <div>
          <label htmlFor='event_attack'>Attack:</label>
          <input
            type='number'
            id='event_attack'
            valueLink={this.linkState("attack")}
          />
        </div>

        <div>
          <label htmlFor='event_defense'>Defense:</label>
          <input
            type='number'
            id='event_defense'
            valueLink={this.linkState("defense")}
          />
        </div>

        <div>
          <label htmlFor='event_move_1'>Move #1:</label>
          <input
            type='text'
            id='event_move_1'
            valueLink={this.linkState("move_1")}
          />
        </div>

        <div>
          <label htmlFor='event_move_2'>Move #2:</label>
          <input
            type='text'
            id='event_move_2'
            valueLink={this.linkState("move_2")}
          />
        </div>

        <button>Create Event</button>
        <br />
      </form>
    );
  }
});
