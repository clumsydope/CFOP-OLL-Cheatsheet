const CACHE_NAME = `cfop-cheat-sheet-v16`;
const APP_SHELL = [
  `./2-Look-OLL.html`,
  `./2-Look-PLL.html`,
  `./F2L.html`,
  `./3x3%20CFOP_%20OLL%20Guide.html`,
  `./PLL.html`,
  `./bottom-tabs.js`,
  `./U.png`,
  `./U'.png`,
  `./style.css`,
  `./manifest.json`,
  `./icon-192.png`,
  `./icon-512.png`,
  `./icon.svg`
];
const APP_URL = new URL(`./3x3%20CFOP_%20OLL%20Guide.html`, self.registration.scope);
const SCOPE_URL = new URL(self.registration.scope);

self.addEventListener(`install`, event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener(`activate`, event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names
          .filter(name => (name.startsWith(`oll-cheat-sheet-`) || name.startsWith(`cfop-cheat-sheet-`)) && name !== CACHE_NAME)
          .map(name => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener(`fetch`, event => {
  const request = event.request;
  const requestUrl = new URL(request.url);
  if (
    request.method !== `GET` ||
    requestUrl.origin !== SCOPE_URL.origin ||
    !requestUrl.pathname.startsWith(SCOPE_URL.pathname)
  ) {
    return;
  }

  if (request.mode === `navigate`) {
    event.respondWith(
      fetch(request).catch(async () => {
        const cachedPage = await caches.match(request, { ignoreSearch: true });
        return cachedPage || caches.match(APP_URL);
      })
    );
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;

    const response = await fetch(request);
    if (response.ok) {
      try {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      } catch (error) {
        console.error(`Failed to cache ${request.url}:`, error);
      }
    }
    return response;
  })());
});
