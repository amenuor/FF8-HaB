import React, {Component, PropTypes} from 'react'

class Notification extends Component {

  render(){
    return(
      <div className={this.props.type + '_notification'}>
        <span>{this.props.type}</span>: {this.props.message}
      </div>
    );
  }

}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success'])
};

export default Notification;
