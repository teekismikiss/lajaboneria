const CACHE_NAME = 'savonnerie-cache-v1';

const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    'https://teeki.es/examen/img/SAVONNERIE.png',
    'https://teeki.es/examen/img/savon1.png',
    'https://teeki.es/examen/img/savon2.png',
    'https://teeki.es/examen/img/savon3.png',
    'https://teeki.es/examen/img/savon4.png',
    'https://teeki.es/examen/img/savon5.png'
];

// INSTALACIÓN
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// ACTIVACIÓN (limpia caché antigua)
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// FETCH (sirve desde caché si existe)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});