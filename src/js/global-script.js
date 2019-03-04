
// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".page__section").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }

  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $previousSlide = $(".page__section").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
  var $currentSlide = $(".page__section").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}


$(function () {
    var $accordion, $wideScreen;
    $accordion = $('#accordion').children('li');
    $wideScreen = $(window).width() > 767;
    if ($wideScreen) {
        $accordion.on('mouseenter click', function (e) {
            var $this;
            e.stopPropagation();
            $this = $(this);
            if ($this.hasClass('out')) {
                $this.addClass('out');
            } else {
                $this.addClass('out');
                $this.siblings().removeClass('out');
            }
        });
    } else {
        $accordion.on('touchstart touchend', function (e) {
            var $this;
            e.stopPropagation();
            $this = $(this);
            if ($this.hasClass('out')) {
                $this.addClass('out');
            } else {
                $this.addClass('out');
                $this.siblings().removeClass('out');
            }
        });
    }
});

// burger
// $(document).ready(function(){
//   $(".hamburger").click(function(){
//     $(this).toggleClass("is-active");
//   });
// });
// burger


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

( function( window ) {

  'use strict';
  
  // class helper functions from bonzo https://github.com/ded/bonzo
  
  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }
  
  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;
  
  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }
  
  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }
  
  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };
  
  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( classie );
  } else {
    // browser global
    window.classie = classie;
  }

})( window );
  
  
  
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * https://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

  // var bodyEl = document.body,
  //   content = document.querySelector( '.content-wrap' ),
  //   openbtn = document.getElementById( 'hamburger-4' ),
  //   closebtn = document.getElementById( 'hamburger-4' ),
  //   isOpen = false;

  // function init() {
  //   initEvents();
  // }

  // function initEvents() {
  //   openbtn.addEventListener( 'click', toggleMenu );
  //   if( closebtn ) {
  //     closebtn.addEventListener( 'click', toggleMenu );
  //   }

  //   // close the menu element if the target it´s not the menu element or one of its descendants..
  //   content.addEventListener( 'click', function(ev) {
  //     var target = ev.target;
  //     if( isOpen && target !== openbtn ) {
  //       toggleMenu();
  //     }
  //   } );
  // }

  // function toggleMenu() {
  //   if( isOpen ) {
  //     classie.remove( bodyEl, 'show-menu' );
  //   }
  //   else {
  //     classie.add( bodyEl, 'show-menu' );
  //   }
  //   isOpen = !isOpen;
  // }

  // init();

})();

$(document).ready(function() {

});

$(document).ready(function(){  
  $('.promo-menu').hover (
    function(){ $(this).addClass('hover') },
    function(){ $(this).removeClass('hover') }
  )
});

$(document).ready(function(){  
  $('.promo-menu li').hover (
    function(){ $(this).addClass('active') },
    function(){ $(this).removeClass('active') }
  )
});

$(document).ready(function() {
  $(document).mouseup(function(e) {
      var container = $(".side-nav.is-active");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
          $(".side-nav").removeClass("is-active");
          $(".side-nav__content").removeClass("is-active");
          $(".side-nav__trigger").removeClass('is-active');
      }
  });
});

const overlay1 = document.querySelector('.search__overlay--overlay-1');
const overlay2 = document.querySelector('.search__overlay--overlay-2');
const search = document.querySelector('.search');
const input = document.querySelector('.search__input');
overlay1.addEventListener('click', () => {
  search.classList.toggle('active');
  $(".page-header__tel").addClass("active");
  if (search.classList.contains('active')) {
    setTimeout(() => {
      input.focus();
    }, 200)
  }
})
search.addEventListener('click', () => {
  if (search.classList.contains('active')) {
    setTimeout(() => {
      input.focus();
    }, 200)
  }
})
overlay2.addEventListener('click', (e) => {
  input.value = '';
  input.focus();
  search.classList.remove('searching')
})
document.body.addEventListener('click', (e) => {
  if (!search.contains(e.target) && input.value.length === 0) {
    search.classList.remove('active');
    search.classList.remove('searching');
    $(".page-header__tel").removeClass("active");
    input.value = '';
  }
})
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    input.blur();
  }
})
input.addEventListener('input', () => {
  if (input.value.length > 0) {
    search.classList.add('searching')
  } else {
    search.classList.remove('searching')
  }
})
input.value = '';
input.blur();


var navigation = {
  // Variables
  $nav: document.querySelector('.side-nav'),
  $navTrigger: document.querySelector('.side-nav__trigger'),
  $navContent: document.querySelector('.side-nav__content'),
  $navList: document.querySelector('.side-nav__list'),
  transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
  
  init() {
      var self = this;

      // Handle the transitions
      self.$navTrigger.addEventListener('click', function() {
          if (!self.$navTrigger.classList.contains('is-active')) {
              // .nav--trigger active
              self.$navTrigger.classList.add('is-active');

              // .nav active
              if (!self.$nav.classList.contains('is-active')) {
                  self.$nav.classList.add('is-active');
                  self.$nav.addEventListener('transitionend', function(e) {
                      if (e.propertyName == 'width' && self.$navTrigger.classList.contains('is-active')) {
                          // .nav__content active
                          self.$navContent.classList.add('is-active');
                      }
                  });
              } else {
                  self.$navContent.classList.add('is-active');
              }

              // no-csstransitions fallback
              if (document.documentElement.classList.contains('no-csstransitions')) {
                  self.$navContent.classList.add('is-active');
              }
          } else {
              // .nav--trigger inactive
              self.$navTrigger.classList.remove('is-active');
              
              // .nav__content inactive
              if (self.$navContent.classList.contains('is-active')) {
                  self.$navContent.classList.remove('is-active');
                  self.$navContent.addEventListener('transitionend', function(e) {
                      if (e.propertyName == 'opacity' && !self.$navTrigger.classList.contains('is-active')) {
                          // .nav inactive
                          self.$nav.classList.remove('is-active');
                      }
                  });
              } else {
                  self.$nav.classList.remove('is-active');                    
              }

              // no-csstransitions fallback
              if (document.documentElement.classList.contains('no-csstransitions')) {
                  self.$nav.classList.remove('is-active');
              }
          }
      });
  }
}

navigation.init();


$(document).ready(function (){
    $(".main-nav--promo a").click(function (){
        $(".page__section--one").addClass("down-scroll");
    });
});