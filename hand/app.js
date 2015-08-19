// test https://handjs.codeplex.com/
(function () {
  'use strict';

  var main = document.getElementById('main');
  var square = document.getElementById('square');
  var text = document.getElementById('text');
  var x = 0;
  var y = 0;
  var state = {
    tapped: false,
    longPress: false,
    dragging: false,
    update: true,
    offsetX: 0,
    offsetY: 0,
    currentElement: square
  };

  // debug output
  var bXOut = document.getElementById('bX');
  var bYOut = document.getElementById('bY');
  var mXOut = document.getElementById('mX');
  var mYOut = document.getElementById('mY');
  var oXOut = document.getElementById('oX');
  var oYOut = document.getElementById('oY');
  var draggingOut = document.getElementById('dragging');
  var offsetOut = document.getElementById('offset');

  // event binding:

  square.addEventListener('pointerdown', function (e) {
    e.stopPropagation();
    e.preventDefault();
    setState(square, e);
  });
  text.addEventListener('pointerdown', function (e) {
    e.stopPropagation();
    e.preventDefault();
    setState(text, e);
  });

  document.addEventListener('pointerup', function (e) {
    e.stopPropagation();
    e.preventDefault();
    state.dragging = false;
    draggingOut.innerHTML = state.dragging;
  });

  document.addEventListener('pointermove', function (e) {
    e.preventDefault();
    
    var top, left;
    var  mainRect = main.getBoundingClientRect();
    
    top = (e.pageY - mainRect.top - state.offsetY);
    left = (e.pageX - mainRect.left - state.offsetX);
    
    bXOut.innerHTML = truncate(e.pageY);
    bYOut.innerHTML = truncate(e.pageX);

    mXOut.innerHTML = truncate(e.pageY - mainRect.top);
    mYOut.innerHTML = truncate(e.pageX - mainRect.left);
    draggingOut.innerHTML = state.dragging;
    
    if (state.dragging) {
      var tl = quantize(top, left, state.currentElement, main);
      oXOut.innerHTML = truncate(tl.top);
      oYOut.innerHTML = truncate(tl.left);
      state.currentElement.style.top = tl.top + 'px';
      state.currentElement.style.left = tl.left + 'px';
    }
  });

  function truncate(num) {
    return String(num).slice(0, 6);
  }

  function setState(element, e) {
    state.currentElement = element;
    state.dragging = true;
    // fire fox doesn't use relative position for square.offsetTop/Left
    // use getBoundingClientRect instead
    var squareRect = element.getBoundingClientRect()
    state.offsetX = e.pageX - squareRect.left;
    state.offsetY = e.pageY - squareRect.top;
    offsetOut.innerHTML = truncate(state.offsetX) + ',' + truncate(state.offsetY);

    draggingOut.innerHTML = state.dragging;
  }

  // bounds detection
  function quantize(top, left, item, container) {
    var containerTopLeft, containerBottomRight, itemTopLeft, itemBottomRight, rtn = {
      top: top,
      left: left
    };
    containerTopLeft = {
      // it's relative to container not doc
      x: 0,
      y: 0
    };
    containerBottomRight = {
      y: container.offsetHeight,
      x: container.offsetWidth
    };
    itemTopLeft = {
      x: left,
      y: top
    };
    itemBottomRight = {
      y: itemTopLeft.y + item.offsetHeight,
      x: itemTopLeft.x + item.offsetWidth
    };
    if (itemTopLeft.x < containerTopLeft.x) {
      rtn.left = 0;
    }
    if (itemTopLeft.y < containerTopLeft.y) {
      rtn.top = 0;
    }
    if (itemBottomRight.x > containerBottomRight.x) {
      rtn.left = containerBottomRight.x - item.offsetWidth;
    } 
    if (itemBottomRight.y > containerBottomRight.y) {
      rtn.top = containerBottomRight.y - item.offsetHeight;
    }
    return rtn;
  };

}());
