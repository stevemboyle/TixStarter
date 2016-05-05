var React = require('react');
var Modal = require("react-modal");
var ShowtimeModal = require('./showtimeModal');
var EventsIndex = require('../events/indexItem.jsx');

var GET_TIX_STYLE = {
  content : {
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    // 'align-items' : 'center',
    'zIndex': '100000',
    'margin': '100px auto  auto',
    'width' : '80%',
    'border': '0px solid dodgerblue',
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    // 'width' : '600px',
    // 'height' : '350px',
    'padding': '0px',
    'box-shadow' : '0px 0px 15px grey'
    // 'background': 'dodgerblue'
    // 'background-image': 'url(http://www.defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg)'
  }
};


var CUSTOM_STYLE = {
  content : {
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    // 'align-items' : 'center',
    'zIndex': '100000',
    'margin': '100px auto  auto',
    'border': '0px solid dodgerblue',
    // 'display' : 'flex',
    // 'justify-content' : 'center',
    // 'width' : '600px',
    // 'height' : '350px',
    'padding': '0px',
    'box-shadow' : '0px 0px 15px grey'
    // 'background': 'grey'
    // 'background-image': 'url(http://www.defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg)'
  }
};

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
        // <h1>{this.props.showtime.time.slice(11, 19)}</h1>

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
      <div className="event-list-item">
        <div>
          <li onClick={this.openShowtimeModal} className="event-list-item">
              <h1>{this.props.showtime.date}</h1>
              <h1>{this.props.showtime.time.slice(11, 19)}</h1>

              <img src={this.props.showtime.event.image_url} width="275px" height="200px"></img>
            <p>{this.props.showtime.event.title}</p>
            <p>{this.props.showtime.location}</p>
          </li>
        </div>
        <div>
          <Modal
             isOpen={this.state.showtimeModalOpen}
             onRequestClose={this.closeShowtimeAndEventModals}
             style={GET_TIX_STYLE}>

             <div style={{background: "dodgerblue"}}>
               <div>
                 <h3 className="home-catchphrase">{this.props.showtime.event.title}</h3>
                 </div>

                <h1 className="home-title" textAlign="center">Next, pick your ticket!</h1>
                <h3 className="home-catchphrase">Choose your price and tier from the options below:</h3>

                  <ShowtimeModal showtime={this.props.showtime}/>

                   <div style={{background: "dodgerblue"}}>
                       <h3 className="home-catchphrase">{this.props.showtime.date} at {this.props.showtime.location}</h3>
                   </div>
                     <button onClick={this.closeShowtimeModal}>Back</button>
                 </div>

           </Modal>
        </div>
      </div>
    );
  }
});
