var React = require('react');
var Modal = require("react-modal");
var EventDetail = require('./detail');
// var EventsIndex = require('./index');
var LoginModal = require('../users/loginModal');
var EventModal = require('./eventModal');


module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return({ eventDetailModalOpen: false });
  },

  openEventDetailModal: function(){
    this.setState({ eventDetailModalOpen: true });
  },

  closeEventDetailModal: function(){
    this.setState({ eventDetailModalOpen: false });
  },

  showDetail: function () {
    this.context.router.push('/event/'+ this.props.event.id);
  },

  render: function () {
    return(
      <div>
        <div>

          <li onClick={this.openEventDetailModal} className="event-list-item">
            <p><b>{this.props.event.title}</b></p>
            <p><em>{this.props.event.catchphrase}</em></p>
            <p>{this.props.event.description}</p>
            <br></br>
            <button onClick={this.openEditEventModal}>Edit Event</button>
          </li>
        </div>

          <div>
            <Modal
               isOpen={this.state.eventDetailModalOpen}
               onRequestClose={this.closeEventDetailModal}>

                 <h2>Im a modal!</h2>

                 <EventModal event={this.props.event}/>




                 <p>modal modal modal modal modal</p>
                 <p>mooooooooodal!</p>

             </Modal>
          </div>


      </div>


    );
  }
});


//  <EventDetail event={this.props.event} />
