// Service worker: always check the server for newer files, so updates show up right after publishing
// instead of waiting for the browser's saved copy to expire. Unchanged files come back as a quick
// "not modified" reply. If the network is down, the browser's saved copy is used.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }).catch(() => fetch(req)));
});
