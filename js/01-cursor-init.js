/* =====================================================================
   LAXTLINE — js/01-cursor-init.js   (runs first, near top of <body>)
   ---------------------------------------------------------------------
   PURPOSE: create the two custom-cursor elements (the small dot and the
   trailing ring) ONLY on desktop / mouse devices.

   WHY here & why document.write: on touch phones the cursor uses
   mix-blend-mode which can darken the screen, so we never insert it
   there. It is written this early so the elements exist before
   js/02-interactions.js looks them up with getElementById.
   ===================================================================== */

// Insert cursor elements ONLY on non-touch devices — prevents mix-blend-mode darkening on mobile.
// We append real DOM nodes instead of document.write(): document.write() run after the parser
// has yielded (which can happen on a live HTTPS host with network latency, unlike instant local
// file loads) wipes the whole page. This script sits right after <body>, so document.body exists.
if(!('ontouchstart' in window) && navigator.maxTouchPoints === 0){
  var _host = document.body || document.documentElement;
  var _cur = document.createElement('div'); _cur.className = 'cursor';          _cur.id = 'cursor';
  var _fol = document.createElement('div'); _fol.className = 'cursor-follower'; _fol.id = 'cursorFollower';
  _host.appendChild(_cur);
  _host.appendChild(_fol);
}
