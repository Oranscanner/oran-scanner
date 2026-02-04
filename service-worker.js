const CACHE_NAME = 'oran-scanner-v3';
const ASSETS = [
  '/oran-scanner/',
  '/oran-scanner/index.html',
  '/oran-scanner/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
