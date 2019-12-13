module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{png,ico,html,js,webmanifest,css}',
  ],
  swDest: 'dist/sw.js',

  skipWaiting: true,
  clientsClaim: true,

  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 60,
        },
      },
    },
    {
      urlPattern: ({ url }) => (
        ['github.com', 'datascience.pe'].indexOf(url.hostname) >= 0
        && /\.png$/.test(url.pathname)
      ),
      handler: 'CacheFirst',
      options: {
        cacheName: 'avatars',
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts-stylesheets',
      },
    },
    // Cache the underlying font files with a cache-first strategy for 1 year.
    {
      urlPattern: /^https:\/\/fonts\.gstatic\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-webfonts',
        cacheableResponse: {
          statuses: [0, 200],
        },
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
      },
    },
  ],
};
