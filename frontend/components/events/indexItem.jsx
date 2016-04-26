var React = require('react');
var Modal = require("react-modal");

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
            <p>{this.props.event.description}</p>

          </li>
        </div>

          <div>
            <Modal
               isOpen={this.state.eventDetailModalOpen}
               onRequestClose={this.closeEventDetailModal}>

                 <h2>Im a modal!</h2>
                 <p>modal modal modal modal modal</p>
                 <p>mooooooooodal!</p>

             </Modal>
          </div>


      </div>


    );
  }
});
