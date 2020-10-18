const plugin = require("tailwindcss/plugin");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: {
    // enabled: true,
    content: ["./src/**/*.html"],
  },
  theme: {
    extend: {
      screens: {
        lg: "1144px",
      },
    },
    // screens: {
    //   lg: "1144px",
    // },
  },
  variants: {},
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        // h1: { fontSize: config("theme.fontSize.2xl") },
        // h2: { fontSize: config("theme.fontSize.xl") },
        // h3: { fontSize: config("theme.fontSize.lg") },
      });
    }),
  ],
};
