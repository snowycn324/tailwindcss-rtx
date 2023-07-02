// tailwind.config.js
const rtxPlugin = require('.src/index').default;

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    rtxPlugin,
  ],
};
