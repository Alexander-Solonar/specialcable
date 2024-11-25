/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: "1025px",
      ml: "769px",
      sm: "480px",
    },
    fontFamily: {
      main: ["PT Sans Narrow", "sans-serif"],
    },
    colors: {
      black: "#000000",
      "vivid-red": "#DB3737",

      transparent: "transparent",
      backdrop: "rgba(12, 36, 62, 0.2)",
      white: "#FFFFFF",
      "deep-blue": "#0C2440",
      "midnight-blue": "#0d233f",
      "space-blue": "#0C243E",
      "vivid-orange": "#FF7300",
    },
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      boxShadow: {
        custom: "0px 10px 20px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
