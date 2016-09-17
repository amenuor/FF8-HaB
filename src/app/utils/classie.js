/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

class Classie{

  static classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  static hasClass(elem, c){
    if ( 'classList' in document.documentElement ) {
      return elem.classList.contains( c );
    }else{
      return classReg( c ).test( elem.className );
    }
  }

  static addClass(elem, c){
    if ( 'classList' in document.documentElement ) {
      elem.classList.add( c );
    }else{
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    }
  }

  static removeClass(elem, c){
    if ( 'classList' in document.documentElement ) {
      elem.classList.remove( c );
    }else{
      elem.className = elem.className.replace( classReg( c ), ' ' );
    }
  }

  static toggleClass(elem, c){
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }


  static has(elem, c){
    return Classie.hasClass(elem, c);
  }

  static add(elem, c){
    Classie.addClass(elem, c);
  }

  static remove(elem, c){
    Classie.removeClass(elem, c);
  }

  static toggle(elem, c){
    Classie.toggleClass(elem, c);
  }

}

export default Classie;
