import { connect } from 'react-redux';
import EntitiesList from '../components/entities_list';
import { fetchEntities }  from '../actions/entity_actions';

const mapStateToProps = (state, ownProps) => {
  return { ...state.entity };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEntities: (entities_number_in_tens) => {
      for(let i = 0; i < entities_number_in_tens; i++)
        dispatch(fetchEntities(i));
    }
  };
};

const EntitiesListCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntitiesList);

export default EntitiesListCont;
