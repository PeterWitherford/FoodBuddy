var CACHE_NAME = 'gih-cache';
var CACHED_URLS = [
  'offline.html',
    'css/styles.css',
    'css/materialize.css',
    'img/logont.png',
    'img/logont-200.png',
    'img/logont-350.png',
    'img/logont-450.png',
    'fonts/roboto/MaterialIcons-Regular.eot',
    'fonts/roboto/MaterialIcons-Regular.woff',
    'fonts/roboto/MaterialIcons-Regular.woff2',
    'fonts/roboto/MaterialIcons-Regular.ttf',
    'fonts/roboto/Roboto-Regular.eot',
    'fonts/roboto/Roboto-Regular.woff',
    'fonts/roboto/Roboto-Regular.woff2',
    'fonts/roboto/Roboto-Regular.ttf'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('offline.html');
        }
      });
    })
  );
});
