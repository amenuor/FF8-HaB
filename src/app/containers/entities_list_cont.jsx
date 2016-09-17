import { connect } from 'react-redux';
import EntitiesList from '../components/entities_list';
import { fetchEntities }  from '../actions/entity_actions';

const mapStateToProps = (state, ownProps) => {
  return { ...state.entity };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEntities: (loadCount) => {
      dispatch(fetchEntities(loadCount))
    }
  };
};

const EntitiesListCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntitiesList);

export default EntitiesListCont;
