import React, { Component } from 'react';
import {Link} from 'react-router';
import Classie from '../utils/classie';

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

  triggerOverlay(){
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
      <div>
        <header>
          <div className="nav">
            <ul>
              <li className="left"><a href="#" onClick={() => {this.triggerOverlay()}}><i className="fa fa-info" aria-hidden="true"/></a></li>
              <li><a href="#"><i className="fa fa-filter" aria-hidden="true"/></a></li>
              <li className="right"><a href="#"><i className="fa fa-search" aria-hidden="true"/></a></li>
            </ul>
          </div>
        </header>
        <div className="container">
            {this.props.children}
        </div>

    		<div className="overlay overlay-slidedown">
    			<button type="button" className="overlay-close" onClick={() => {this.triggerOverlay()}}>Close</button>
          <div className="about">
            sjahisuhauishuiahsuia siuahsiuahs aius aiuhsi uaisua sashauis
          </div>
    		</div>


    </div>
    );
  }
}

export default App;
