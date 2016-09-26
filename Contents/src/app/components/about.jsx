import React from 'react'

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      This progressive app has been developed by <a href="https://yanchware.com" target="_blank">YanchWare</a> using few hours during few nights by using the following freely accessible resources:
      <ul>
        <li>
          Frontend coded in JavaScript using <a href="https://facebook.github.io/react/" target="_blank">ReactJS</a>, <a href="http://redux.js.org/" target="_blank">Redux</a>, <a href="http://sass-lang.com/" target="_blank">Sass</a>, and <a href="http://www.material-ui.com/" target="_blank">Material-UI</a>.
          Inspired by the great boilerplate <a href="https://github.com/btomashvili/react-redux-firebase-boilerplate" target="_blank">from btomashvili</a>.
        </li>
        <li>
          Images and data hosted on <a href="https://firebase.google.com/" target="_blank">FireBase</a>.
        </li>
        <li>
          The nice slider controller, used to select the level you are interested in, was originally engineered by <a href="https://github.com/davidchin/react-input-range" target="_blank">davidchin</a>
        </li>
        <li>
          See those nice <a href="http://www.chartjs.org/" target="_blank">charts</a>? Have you noticed you can <a href="https://github.com/oliviertassinari/react-swipeable-views" target="_blank">swipe</a> from one to the other, and back?
        </li>
        <li>
          Mobile apps based on the boilerplates from nabilfreeman for <a href="https://github.com/nabilfreeman/android-webview-boilerplate" target="_blank">Android</a> and <a href="https://github.com/nabilfreeman/ios-universal-webview-boilerplate" target="_blank">iOS</a>.
        </li>
        <li>
          Further Frontend inspiration from the great people at <a href="http://tympanus.net/codrops/" target="_blank">Codrops</a> and <a href="http://codyhouse.co/" target="_blank">Codyhouse</a> (Truly amazing stuff!)
        </li>
        <li>
          Actual images, icons, and etc. come from <a href="http://www.deviantart.com/" target="_blank">deviantart</a>, <a href="http://www.cssauthor.com/mobile-app-ui-psd/" target="_blank">CSSAuthor</a>, <a href="http://www.flaticon.com/" target="_blank">FlatIcon</a>, and <a href="http://freebiesbug.com/" target="_blank">FreebiesBug</a>.
        </li>
        <li>
          Fonts? <a href="https://fonts.google.com" target="_blank">Google Fonts</a>!
        </li>
      </ul>
      <div className="credits">
        <h1>Credits</h1>
          App icon made by <a href="http://alexielios.deviantart.com/art/Icon-Final-Fantasy-VIII-528510335" target="_blank">Alexielios</a>
          Notification icons made by <a href="http://www.flaticon.com/authors/madebyoliver" target="_blank">Madebyoliver</a> from <a href="http://www.flaticon.com/" target="_blank">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC 3.0 BY</a>
      </div>
    </div>
  )
};

export default About
