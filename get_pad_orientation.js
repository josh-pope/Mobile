/******************************************
 *     ___          ___           ___           ___     
 *    /  /\        /  /\         /  /\         /__/\    
 *   /  /:/       /  /::\       /  /:/_        \  \:\   
 *  /__/::\      /  /:/\:\     /  /:/ /\        \__\:\  
 *  \__\/\:\    /  /:/  \:\   /  /:/ /::\   ___ /  /::\ 
 *     \  \:\  /__/:/ \__\:\ /__/:/ /:/\:\ /__/\  /:/\:\
 *      \__\:\ \  \:\ /  /:/ \  \:\/:/~/:/ \  \:\/:/__\/
 *      /  /:/  \  \:\  /:/   \  \::/ /:/   \  \::/     
 *     /__/:/    \  \:\/:/     \__\/ /:/     \  \:\     
 *     \__\/      \  \::/        /__/:/       \  \:\    
 *                 \__\/         \__\/         \__\/    
 *       ___         ___           ___         ___     
 *      /  /\       /  /\         /  /\       /  /\    
 *     /  /::\     /  /::\       /  /::\     /  /:/_   
 *    /  /:/\:\   /  /:/\:\     /  /:/\:\   /  /:/ /\  
 *   /  /:/~/:/  /  /:/  \:\   /  /:/~/:/  /  /:/ /:/_ 
 *  /__/:/ /:/  /__/:/ \__\:\ /__/:/ /:/  /__/:/ /:/ /\
 *  \  \:\/:/   \  \:\ /  /:/ \  \:\/:/   \  \:\/:/ /:/
 *   \  \::/     \  \:\  /:/   \  \::/     \  \::/ /:/ 
 *    \  \:\      \  \:\/:/     \  \:\      \  \:\/:/  
 *     \  \:\      \  \::/       \  \:\      \  \::/   
 *      \__\/       \__\/         \__\/       \__\/   
 * 
 *   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *  Joshpopenyc@gmail.com
 *  joshpope.com
 * 
 *  Generic function for detecting pad orientation, and orientation change event // for iOS mobile development
 * 
 * */

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
