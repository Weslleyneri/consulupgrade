self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('app-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/service-worker.js',
        '/icon-192.png',
        '/icon-512.png',
        '/https://images.seeklogo.com/logo-png/30/2/positivo-logo-png_seeklogo-306133.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
