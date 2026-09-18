/* ============================================================
   Hub Back-Button — Astro Master Hub
   हर ऐप में ऊपर-बाईं तरफ एक छोटा "← हब" बटन दिखाता है ताकि
   PWA/installed-app मोड में भी बिना ऐप बंद किए हब पर वापस जाया जा सके।
   ============================================================ */
(function () {
  'use strict';

  if (document.getElementById('hubBackBtn')) return; // already added

  var style = document.createElement('style');
  style.textContent =
    '#hubBackBtn{position:fixed;left:14px;top:14px;z-index:999997;' +
    'display:inline-flex;align-items:center;gap:6px;' +
    'background:rgba(15,23,42,.85);color:#f1f5f9;border:1px solid rgba(255,255,255,.15);' +
    'border-radius:9999px;padding:8px 14px 8px 10px;font-size:13px;font-weight:600;' +
    'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
    'text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,.35);backdrop-filter:blur(6px);' +
    'cursor:pointer;user-select:none;}' +
    '#hubBackBtn:active{transform:scale(0.95);background:rgba(51,65,85,.95);}' +
    '#hubBackBtn .hbIcon{font-size:15px;line-height:1;}' +
    '@media (max-width:420px){#hubBackBtn{padding:7px 12px 7px 9px;font-size:12px;}}';
  document.head.appendChild(style);

  var btn = document.createElement('a');
  btn.id = 'hubBackBtn';
  btn.href = './index.html';
  btn.innerHTML = '<span class="hbIcon">←</span><span>हब</span>';
  btn.setAttribute('aria-label', 'मुख्य हब पर वापस जाएँ');

  function mount() {
    document.body.appendChild(btn);
  }
  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
