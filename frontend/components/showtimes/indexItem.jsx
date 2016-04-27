var React = require('react');
var Modal = require("react-modal");
var ShowtimeModal = require('./showtimeModal');
var EventsIndex = require('../events/indexItem.jsx');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return({ showtimeModalOpen: false });
  },

  openShowtimeModal: function(){
    this.setState({ showtimeModalOpen: true });
  },

  closeShowtimeModal: function(){
    this.setState({ showtimeModalOpen: false });
  },

  closeShowtimeAndEventModals: function(){
    this.closeShowtimeModal();

    //TODO: Figure out how to close all modals.

    EventsIndex.closeEventDetailModal();
  },


  render: function () {
    var attrs = ['name', 'happiness', 'price'].map(function (attr) {
      return <p key={attr}>{attr}: {this.props.showtime[attr]}</p>;
    }.bind(this));

    return(
      <div>
        <div>
          <p>Hey!</p>
          <li onClick={this.openShowtimeModal} className="showtime-list-item">
            <p>Hey! Hey!</p>
            {attrs}
          </li>
        </div>
        <div>
          <Modal
             isOpen={this.state.showtimeModalOpen}
             onRequestClose={this.closeShowtimeAndEventModals}>

               <h2>Im a modal!</h2>

               <ShowtimeModal showtime={this.props.showtime}/>

              <button onClick={this.closeShowtimeModal}>Back</button>

               <p>modal modal modal modal modal</p>
               <p>mooooooooodal!</p>

           </Modal>
        </div>
      </div>
    );
  }
});
