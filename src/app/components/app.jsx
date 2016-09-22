import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import Classie from '../lib/classie';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import ActionInfo from 'material-ui/svg-icons/action/info';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import About from './about';


class App extends Component {

  constructor(props){
    super(props);
    this.support = { transitions : Modernizr.csstransitions };

    let transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    };

    this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

  }

  triggerOverlay(obj){
    let overlay = document.querySelector( 'div.overlay' );
    if( Classie.has( overlay, 'open' ) ) {
			Classie.remove( overlay, 'open' );
			Classie.add( overlay, 'close' );
      let currentObj = this;

      let onEndTransitionFn = function( ev ) {
				if( currentObj.support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( currentObj.transEndEventName, onEndTransitionFn );
				}
				Classie.remove( overlay, 'close' );
			};

      if( this.support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !Classie.has( overlay, 'close' ) ) {
			Classie.add( overlay, 'open' );
		}
  }

  render() {
    let appBar = (
      <AppBar
        iconElementLeft={
          <IconMenu
            iconButtonElement={<IconButton><FilterList/></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            onChange={(event, value)=>{this.props.setFilterValue(value);}}
            value={this.props.filterValue}
            multiple={true}
          >
            <MenuItem primaryText="Characters" value="characters" />
            <MenuItem primaryText="GFs" value="gfs" />
            <MenuItem primaryText="Beasts" value="beasts" />
          </IconMenu>
        }

        iconElementRight={<IconButton onTouchTap={()=>{this.triggerOverlay();}}><ActionInfo /></IconButton>}
      />
    );

    if(window.location.pathname !== '' && window.location.pathname !== '/')
      appBar = (
        <AppBar
          iconElementLeft={<Link to={'/'}><IconButton><NavigationBack/></IconButton></Link>}
        />
      );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="container">
          <header>
            {appBar}
          </header>
          <div>
            <ReactCSSTransitionGroup
              component="div"
              transitionName="page-transition"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {React.cloneElement(this.props.children, {key: location.pathname})}
            </ReactCSSTransitionGroup>
          </div>
      		<div className="overlay overlay-slidedown">
            <About/>
      		</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  setFilterValue: PropTypes.func.isRequired,
  filterValue: PropTypes.array.isRequired
}

export default App;
