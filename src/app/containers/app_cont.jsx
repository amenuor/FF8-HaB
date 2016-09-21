import { connect } from 'react-redux';
import App from '../components/app';
import {setFilterValue} from '../actions/entity_actions';

const mapStateToProps = (state, ownProps) => {
  return { ...state.entity };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterValue: (value) => {
      dispatch(setFilterValue(value))
    }
  };
};

const AppCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppCont;
