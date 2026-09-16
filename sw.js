const CACHE_NAME = 'cosmic-hub-v19';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './Know_Yourself.html',
  './watch_prashna.html',
  './Panch_Pakshi.html',
  './kp_vastu.html',
  './fortuna_point.html',
  './gulbarga_prashna_app.html',
  './aaj-ka-rashifal.html',
  './Muhurat_Vichar.html',
  './Life_Promise.html',
  './time_of_event.html',
  './navtara_chakra.html',
  './BNN_Kundli_Calculator.html',
  './ghat-chakra (1).html',
  './kundli-milan.html'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
