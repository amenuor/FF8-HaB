import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import { fetchEntities }  from '../actions/entity_actions';
import { currentUser } from '../utils/localstorage';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <header className="navbar navbar-static-top navbar-inverse" id="top" role="banner">
        <div className="container">
            <div className="navbar-header">
               <Link to="/" className="navbar-brand">FF8</Link>
            </div>
        </div>
      </header>

        <div className="container">
            {this.props.children}
        </div>
    </div>
    );
  }
}

export default App;
