/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#040E26",
        title: "#2A9D8F",
        highlight: "#FB7185",
        accent: "#E76F51",
      },

      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },

      keyframes: {
        appear: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },

      animation: {
        pop: "appear 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
