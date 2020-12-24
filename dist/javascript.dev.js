"use strict";

function hoverArrowLeft() {
  if (localStorage.getItem('mode') === 'light') {
    left.src = 'assets/button-slider-left-hover.svg';
  } else {
    left.src = 'assets/button-slider-left-md-noct-hover.svg';
  }
}

function hoverArrowRight() {
  if (localStorage.getItem('mode') === 'light') {
    right.src = 'assets/button-slider-right-hover.svg';
  } else {
    right.src = 'assets/button-slider-right-md-noct-hover.svg';
  }
}

function arrowLeft() {
  if (localStorage.getItem('darkMode') === 'enabled') {
    left.src = 'assets/button-slider-left-md-noct.svg';
  } else {
    left.src = 'assets/button-slider-left.svg';
  }
}

function arrowRight() {
  if (localStorage.getItem('darkMode') === 'enabled') {
    right.src = 'assets/button-slider-right-md-noct.svg';
  } else {
    right.src = 'assets/button-slider-right.svg';
  }
}