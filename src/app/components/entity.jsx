import React, { Component, PropTypes } from 'react';

class Entity extends Component {

  constructor(props){
    super(props);
    this.props.setEntitySelected(this.props.params.entityID);
  }

  render(){
      let contents = 'NOT LOADED';
      console.log(this);

      if(this.props.selectedEntityDetails)
      {
        contents = this.props.selectedEntityDetails.Description;
      }

      return (
        <div>
          {contents}
        </div>
      );
  }

}

Entity.propTypes = {
  setEntitySelected: PropTypes.func.isRequired
};

export default Entity;
