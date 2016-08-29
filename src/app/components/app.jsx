import React, { Component } from 'react';

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
