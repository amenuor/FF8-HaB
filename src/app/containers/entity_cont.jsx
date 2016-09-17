import { connect } from 'react-redux';
import Entity from '../components/entity';
import { setEntitySelected }  from '../actions/entity_actions';

const mapStateToProps = (state, ownProps) => {
  return { ...state.entity };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEntitySelected: (entityID) => {
      dispatch(setEntitySelected(entityID))
    }
  };
};

const EntityCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Entity);

export default EntityCont;
