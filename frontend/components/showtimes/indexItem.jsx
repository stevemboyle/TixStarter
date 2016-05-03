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

    // EventsIndex.closeEventDetailModal();
  },


  render: function () {

    //
    // var attributeArray = ['id',
    //                       'event_id',
    //                       'date',
    //                       'time',
    //                       'location'
    //                       ];
    //
    // var attrs = attributeArray.map(function (attr) {
    //   return <p key={attr}>{attr}: {this.props.showtime[attr]}</p>;
    // }.bind(this));


    return(
      <div>
        <div>
          <li onClick={this.openShowtimeModal} className="showtime-list-item">
              <h1>{this.props.showtime.date}</h1>
              <img src={this.props.showtime.event.image_url} width="275px" height="200px"></img>
            <p>{this.props.showtime.event.title}</p>
            <p>{this.props.showtime.location}</p>
          </li>
        </div>
        <div>
          <Modal
             isOpen={this.state.showtimeModalOpen}
             onRequestClose={this.closeShowtimeAndEventModals}>

               <h2>Im supposed to be a modal!</h2>

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
