const CACHE_NAME = 'cosmic-hub-v9';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './bnn-calculator.html',
  './ghat-chakra.html',
  './kundli-milan.html'
];

// इंस्टॉल करते समय नया कैश बनाएं और तुरंत एक्टिवेट करें
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// पुराना कैश तुरंत डिलीट करें
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

// नेटवर्क से ताज़ा डेटा लाएं, इंटरनेट न होने पर ही कैश का उपयोग करें
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // अगर रिस्पॉन्स सही है, तो कैश को बैकग्राउंड में अपडेट करें
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // ऑफलाइन होने पर कैश से लोड करें
        return caches.match(event.request);
      })
  );
});
