self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('gih-cache').then(function(cache) {
      return var CACHE_NAME = 'gih-cache';
var CACHED_URLS = [
  'offline.html',
  'mystyles.css’,
  'dino.png'
];

    })
  );
});