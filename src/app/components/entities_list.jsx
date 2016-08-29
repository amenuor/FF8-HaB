import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import { fetchEntities }  from '../actions/entity_actions';
import { currentEntities } from '../utils/localstorage';

class EntitiesList extends Component {

  constructor(props){
    super(props);
    this.props.fetchEntities(0);
  }

  render(){
    let rows = [];
    if(this.props.currentEntities)
    {
      for (let i = 0; i < this.props.currentEntities.length; i++) {
        let entity = this.props.currentEntities[i];
          rows.push(
            <div className="profile" key={i}>
              <img src={entity.image} />
              <p className="name">{entity.name}</p>
              <p className="type">{entity.type}</p>
            </div>
          );
      }
    }
    return (<div>{rows}</div>);

  }

}

function mapDispatchToProps(dispatch){
  return  bindActionCreators({fetchEntities},dispatch);
}

function mapStateToProps(state){
  return { currentEntities : state.entity };
}

export default connect(mapStateToProps,mapDispatchToProps)(EntitiesList);
