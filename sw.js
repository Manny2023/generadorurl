
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cat-zip-cache').then(cache => {
      return cache.addAll(['index.html', 'manifest.json', 'icon-192.png', 'icon-512.png']);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
