import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import Loading from './loading';
import Notification from './notification';

import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    marginBottom: 24,
  },
};

//This is hardcoded because firebase does not support count functionality
const entities_number_in_tens = 2;

class EntitiesList extends Component {

  constructor(props){
    super(props);
    this.props.fetchEntities(entities_number_in_tens);
  }

  render(){
    let cols = 2; //TODO: make it responsive
    if(!this.props.visibleEntities)
      return (<Loading/>);
    if(this.props.visibleEntities.length == 0)
      return (<Notification message='Nothing to see here' type='warning'/>);
    return (
      <div style={styles.root}>
          <GridList
            cellHeight={200}
            cols={cols}
            style={styles.gridList}
          >
            {this.props.visibleEntities.map((tile) => (
              <Link className='entityCard' to={'/entity/' + tile.id} key={tile.id}>
              <GridTile
                key={tile.id}
                title={tile.name}
                subtitle={<b>{tile.type}</b>}
              >
                <img src={tile.image} />
              </GridTile>
              </Link>
            ))}
          </GridList>
        </div>
    );
  }
}

EntitiesList.propTypes = {
  fetchEntities: PropTypes.func.isRequired
};

export default EntitiesList;
