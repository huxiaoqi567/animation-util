'use strict';

const raf = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const vendors = ['webkit', 'moz', 'ms', 'o'];
let cancelRAF = window.cancelAnimationFrame;
for (let i = 0; i < vendors.length; i++) {
  if (window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame']) {
    cancelRAF = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
  }
}
cancelRAF = cancelRAF || window.clearTimeout;

export {
  raf,
  cancelRAF
};
