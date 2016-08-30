import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import { fetchEntities, setEntitySelected }  from '../actions/entity_actions';

class EntitiesList extends Component {

  constructor(props){
    super(props);
    this.props.fetchEntities(0);
  }

  handleClick(entityId, entity){
    this.props.setEntitySelected(entityId, entity);
  }

  render(){
    let rows = [];
    if(this.props.currentEntities)
    {
      for (let i = 0; i < this.props.currentEntities.length; i++) {
        let entity = this.props.currentEntities[i];
          rows.push(
            <Link to="/entity" className="navbar-brand" onClick={()=>{this.handleClick(i, entity);}} key={i}>
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

function mapDispatchToProps(dispatch){
  return  bindActionCreators({fetchEntities, setEntitySelected},dispatch);
}

function mapStateToProps(state){
  return { currentEntities : state.entity };
}

export default connect(mapStateToProps,mapDispatchToProps)(EntitiesList);
