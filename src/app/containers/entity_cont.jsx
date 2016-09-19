import { connect } from 'react-redux';
import Entity from '../components/entity';
import { setSelectedEntity, setSelectedLevel,  setSelectedTab}  from '../actions/entity_actions';

const mapStateToProps = (state, ownProps) => {
  return { ...state.entity };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedEntity: (entityID) => {
      dispatch(setSelectedEntity(entityID))
    },
    setSelectedLevel: (level) => {
      dispatch(setSelectedLevel(level))
    },
    setSelectedTab: (index) => {
      dispatch(setSelectedTab(index))
    }
  };
};

const EntityCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Entity);

export default EntityCont;
