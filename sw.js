const CACHE_NAME = 'pwa-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Rehefa mametraka (Install) ny Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Tehirizina ao amin'ny cache ny rakitra...');
      return cache.addAll(ASSETS);
    })
  );
});

// Rehefa maka (Fetch) rakitra ny app
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // Raha efa ao anaty cache ilay rakitra dia izay no omeny, raha tsy izany dia alainy amin'ny internet
      return response || fetch(e.request);
    })
  );
});
