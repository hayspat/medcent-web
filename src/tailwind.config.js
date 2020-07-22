module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-spinner")({
      className: "spinner",
      themeKey: "spinner",
    }),
  ],
};
