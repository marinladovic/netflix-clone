const withTm = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]);
/** @type {import('next').NextConfig} */
module.exports = withTm({
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
});
