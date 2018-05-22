"use strict";

let cacheName = 'resume';
self.addEventListener('fetch', event => {

  // console.log(event);
  var urlStr = event.request.url;
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.add(urlStr))
  );
});