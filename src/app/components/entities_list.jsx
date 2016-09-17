import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

class EntitiesList extends Component {

  constructor(props){
    super(props);
    this.props.fetchEntities(0);
  }

  render(){
    let rows = [];
    if(this.props.entities)
    {
      for (let i = 0; i < this.props.entities.length; i++) {
        let entity = this.props.entities[i];
        let linkTo = "/entity/" + i;
        rows.push(
          <Link to={linkTo} className="navbar-brand" key={i}>
            <div className="profile grid__col--1-of-4 grid__col--m-1-of-3 grid__col--s-1-of-2 grid__col">
              <img src={entity.image} />
              <p className="name">{entity.name}</p>
              <p className="type">{entity.type}</p>
            </div>
          </Link>
        );
      }
    }
    return (<div className="container"><div className="grid">{rows}</div></div>);

  }

}

EntitiesList.propTypes = {
  fetchEntities: PropTypes.func.isRequired
};

export default EntitiesList;
