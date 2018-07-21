import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/*
const scrollconsts = {
  maxScrollFrame: 2,
  scrolltimeout: 300,
  scrolltime: 300
}

var scroll = {
  scrollframe: 0,
  lasty: 0,
  lastts: 0
}

document.onload = function() {
  scroll.lasty = window.scrollY;
}

document.onscroll = function(e) {
  if(e.timeStamp - scroll.lastts > scrollconsts.scrolltimeout) {
    if(window.scrollY - scroll.lasty > 0) {
      console.log("up");
    } else {
      console.log("down");
    }
    scroll.lasty = window.scrollY;
    scroll.lastts = e.timeStamp;
  }
}

*/
registerServiceWorker();
