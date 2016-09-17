import React, { Component, PropTypes } from 'react';

class Entity extends Component {

  constructor(props){
    super(props);
    this.props.setEntitySelected(this.props.params.entityID);
  }

  render(){
      let contents = 'NOT LOADED';

      if(this.props.selectedEntityDetails)
      {
        contents = this.props.selectedEntityDetails.Description;
      }

      return (
        <div className="container">
          <div className="grid">
            <div className="profile grid__col--1-of-1 grid__col--m-1-of-1 grid__col--s-1-of-1 grid__col">
            {contents}
          </div>
        </div>
      </div>
      );
  }

}

Entity.propTypes = {
  setEntitySelected: PropTypes.func.isRequired
};

export default Entity;
