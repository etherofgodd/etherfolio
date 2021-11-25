module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: ["Comforter Brush", "cursive"],
      hi: ["Poppins", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      default: "#F8F7F1",
      hi: "#0D2F3F",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      hi: "#0D2F3F",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
