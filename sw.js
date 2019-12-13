/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.68a438ce.png",
    "revision": "2f652f4a8ad3099720884d9ebc85d355"
  },
  {
    "url": "android-chrome-512x512.4db80238.png",
    "revision": "7a5d3a13a059e4d031c3a60e638855d7"
  },
  {
    "url": "apple-touch-icon.aceb9f81.png",
    "revision": "a4d47c9f7bb42c0a68609b685a19676a"
  },
  {
    "url": "campus-utec-lima.95384030.png",
    "revision": "96be1d54f2f461a220e1c3841274aa9f"
  },
  {
    "url": "favicon.acc7193f.ico",
    "revision": "589333f0dd092d2e93760b32ecc5178e"
  },
  {
    "url": "index.html",
    "revision": "4731063face6ea5d23f0a68c84b988fc"
  },
  {
    "url": "main.dd317b7c.js",
    "revision": "60c694dd32732c70a9746ff329fd39ba"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "cbd13038819092489bbbd7d89cc39140"
  },
  {
    "url": "style.4e8046cc.css",
    "revision": "0fb244535a2088db36739a8b0454411a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 60, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(({ url }) => (
        ['github.com', 'datascience.pe'].indexOf(url.hostname) >= 0
        && /\.png$/.test(url.pathname)
      ), new workbox.strategies.CacheFirst({ "cacheName":"avatars", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, new workbox.strategies.CacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 10, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
