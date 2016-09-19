import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

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

class EntitiesList extends Component {

  constructor(props){
    super(props);
    this.props.fetchEntities(0);
  }

  render(){
    let cols = 2; //TODO: make it responsive
    if(!this.props.entities)
      return (<div>LOADING</div>);
    return (
      <div style={styles.root}>
          <GridList
            cellHeight={200}
            cols={cols}
            style={styles.gridList}
          >
            {this.props.entities.map((tile,i) => (
              <Link to={'/entity/' + i} className="navbar-brand" key={i}>
              <GridTile
                key={i}
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
