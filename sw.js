/* Offline-Speicher für die App. Nach jeder Änderung an den Dateien VERSION hochzählen. */
const VERSION = 'seiten-v25';
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/icon.svg', './icons/favicon-48.png', './lib/jspdf.umd.min.js', './lib/html2canvas.min.js', './fonts/cormorant-garamond-co3bmX5s.woff2', './fonts/cormorant-garamond-co3ZmX5s.woff2', './fonts/crimson-pro-q5uDsoa5.woff2', './fonts/crimson-pro-q5uSsoa5.woff2', './fonts/eb-garamond-SlGFmQSN.woff2', './fonts/eb-garamond-SlGUmQSN.woff2', './fonts/libre-baskerville-kmKnZrc3.woff2', './fonts/libre-baskerville-kmKWZrc3.woff2', './fonts/libre-caslon-text-DdT578IG.woff2', './fonts/libre-caslon-text-DdT678IG.woff2', './fonts/libre-caslon-text-DdT878IG.woff2', './fonts/lora-0QI8MX1D.woff2', './fonts/lora-0QIvMX1D.woff2', './fonts/merriweather-u-4B0qyr.woff2', './fonts/merriweather-u-4e0qyr.woff2', './fonts/playfair-display-nuFRD-vY.woff2', './fonts/playfair-display-nuFvD-vY.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

/* Eigene Dateien: erst aus dem Netz (damit Änderungen ankommen), ohne Netz aus dem Speicher */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
