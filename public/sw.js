// Service Worker for caching static assets and API responses
const CACHE_NAME = 'rizal-web-v1';
const STATIC_CACHE_NAME = 'rizal-static-v1';
const DYNAMIC_CACHE_NAME = 'rizal-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/app.css',
  '/favicon.ico',
  // Core images (WebP versions)
  '/images/rizal-bg.webp',
  '/images/profile.webp',
  '/images/rizal-bg-full.webp',
  // Core JS/CSS will be added by the build process
];

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (
              cacheName !== STATIC_CACHE_NAME && 
              cacheName !== DYNAMIC_CACHE_NAME &&
              cacheName.startsWith('rizal-')
            ) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests (unless they're fonts or APIs we control)
  if (url.origin !== location.origin && !isCacheableResource(url)) {
    return;
  }

  event.respondWith(
    handleRequest(request)
  );
});

function isCacheableResource(url) {
  // Cache external fonts and specific CDNs
  return (
    url.host === 'fonts.googleapis.com' ||
    url.host === 'fonts.gstatic.com' ||
    url.host === 'view.genial.ly'
  );
}

async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Images - Cache First strategy
    if (request.destination === 'image') {
      return await cacheFirst(request, STATIC_CACHE_NAME);
    }
    
    // Fonts - Cache First strategy
    if (url.pathname.includes('.woff') || url.pathname.includes('.woff2')) {
      return await cacheFirst(request, STATIC_CACHE_NAME);
    }
    
    // Static assets (JS, CSS) - Stale While Revalidate
    if (
      request.destination === 'script' || 
      request.destination === 'style' ||
      url.pathname.includes('.css') ||
      url.pathname.includes('.js')
    ) {
      return await staleWhileRevalidate(request, STATIC_CACHE_NAME);
    }
    
    // HTML pages - Network First (with cache fallback)
    if (request.destination === 'document' || request.headers.get('Accept')?.includes('text/html')) {
      return await networkFirst(request, DYNAMIC_CACHE_NAME);
    }
    
    // Default to Network First for other requests
    return await networkFirst(request, DYNAMIC_CACHE_NAME);
    
  } catch (error) {
    console.error('Service Worker: Fetch error', error);
    
    // Return offline fallback if available
    if (request.destination === 'document') {
      const offlineCache = await caches.open(STATIC_CACHE_NAME);
      const offlinePage = await offlineCache.match('/');
      return offlinePage || new Response('Offline - Please check your connection', {
        status: 503,
        statusText: 'Service Unavailable'
      });
    }
    
    throw error;
  }
}

// Cache First strategy
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  
  if (networkResponse.ok) {
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Network First strategy
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale While Revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  // Always try to fetch from network in background
  const networkResponsePromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => {
      // Network failed, but we might have cache
      return null;
    });
  
  // Return cached version immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Otherwise wait for network
  return await networkResponsePromise;
}

// Background sync for offline actions (future enhancement)
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Implement background sync logic here
  console.log('Service Worker: Performing background sync');
}
