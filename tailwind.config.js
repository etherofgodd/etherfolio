module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
    fontFamily: {
      title: ["Comforter Brush", "cursive"],
      hi: ["Poppins", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
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
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/parkay-floor.svg')",
      },
    },
    plugins: [require("tailwindcss-bg-patterns")],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
