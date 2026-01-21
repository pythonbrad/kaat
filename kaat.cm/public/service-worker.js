const CACHE_NAME = 'kaat-cache-v1';
    const urlsToCache = [
      '/',
      '/index.html',
      '/src/main.jsx',
      '/src/App.jsx',
      '/src/index.css',
      '/src/components/Header.jsx',
      '/src/components/Header.css',
      '/src/components/Footer.jsx',
      '/src/components/Footer.css',
      '/src/components/BookCard.jsx',
      '/src/components/BookCard.css',
      '/src/components/PrintModal.jsx',
      '/src/components/PrintModal.css',
      '/src/pages/HomePage.jsx',
      '/src/pages/HomePage.css',
      '/src/pages/BooksPage.jsx',
      '/src/pages/BooksPage.css',
      '/src/pages/BookReaderPage.jsx',
      '/src/pages/BookReaderPage.css',
      '/src/pages/AboutPage.jsx',
      '/src/pages/AboutPage.css',
      '/src/pages/ContactPage.jsx',
      '/src/pages/ContactPage.css',
      '/src/data/booksData.js',
      '/src/utils/localStorage.js',
      '/kaat-logo.png',
      '/kaat-logo-icon-only-light-background.png',
      'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Book+1+Cover',
      'https://via.placeholder.com/300x200/7CB342/FFFFFF?text=Book+2+Cover',
      'https://via.placeholder.com/300x200/FFB84D/FFFFFF?text=Book+3+Cover',
      'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Book+4+Cover'
      // Add other static assets like fonts, images, etc.
    ];

    self.addEventListener('install', (event) => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
      );
    });

    self.addEventListener('fetch', (event) => {
      event.respondWith(
        caches.match(event.request)
          .then((response) => {
            // Cache hit - return response
            if (response) {
              return response;
            }
            // No cache hit - fetch from network
            return fetch(event.request).then(
              (response) => {
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== 'basic') {
                  return response;
                }
                // IMPORTANT: Clone the response. A response is a stream
                // and can only be consumed once. We need to consume it once
                // to return it to the browser and once to add it to the cache.
                const responseToCache = response.clone();

                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseToCache);
                  });

                return response;
              }
            );
          })
      );
    });

    self.addEventListener('activate', (event) => {
      const cacheWhitelist = [CACHE_NAME];
      event.waitUntil(
        caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
    });