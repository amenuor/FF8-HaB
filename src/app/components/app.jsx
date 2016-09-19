import React, { Component } from 'react';
import {Link} from 'react-router';
import Classie from '../lib/classie';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import ActionInfo from 'material-ui/svg-icons/action/info';

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
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <header>
            <AppBar
              title = {<IconButton><FilterList/></IconButton>}
              iconElementLeft={<IconButton><ActionSearch/></IconButton>}
              iconElementRight={<IconButton onTouchTap={()=>{this.triggerOverlay();}}><ActionInfo /></IconButton>}
            />
          </header>
          <div>
              {this.props.children}
          </div>
      		<div className="overlay overlay-slidedown">
            <div className="about">
              sjahisuhauishuiahsuia siuahsiuahs aius aiuhsi uaisua sashauis
            </div>
      		</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
