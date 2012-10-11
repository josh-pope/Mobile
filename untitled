/* Generic function for detecting pad orientation, and orientation change event */

var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
   if(window.orientation == 90 || window.orientation == -90)
   {
    // current orientation is landscape
   }
   else {
    // current orientation is portrait
   }
}, false);