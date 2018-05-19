"use strict";

let cacheName = 'resume';
self.addEventListener('fetch', event => {

  if (/\.jpg$|.jpeg$/.test(event.request.url)) {
    console.log(event);
    var urlStr = event.request.url;
    var imageName = urlStr.slice(urlStr.indexOf('%20')+3);
    var reqName = './images/image ' + imageName;
    console.log(reqName)
    event.waitUntil(
      caches.open(cacheName)
      .then(cache => cache.add(reqName))
    );
  }else {
    console.log(event);
    event.waitUntil(
      caches.open(cacheName)
      .then(cache => cache.addAll(['./test.html','./lookImage.html','./lookText.html']))
    );
  }
});

