/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "425px",
      ml: "768px",
      xl: "1024px",
      lg: "1200px",
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
      gray: "#667592",
      "soft-blue": "#BBC7D5",
    },

    backgroundImage: {
      "bg-aboutUs": "url('/src/assets/images/aboutUs/bg.webp')",
      "bg-footer": "url('/src/assets/images/bg-footer.webp')",
      "bg-information": "url('/src/assets/images/logo-bg.webp')",
      "bg-catalog": "url('/src/assets/images/catalog-bg.webp')",
    },
    backgroundPosition: {
      "position-aboutUs": "right 10px top 35px",
      "position-contacts": "right 550px bottom -350px",
      "position-information": "right 0 bottom 0",
      "position-catalog": "right -4rem bottom -5rem",
    },

    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      boxShadow: {
        custom: "0px 10px 20px 0px rgba(0, 0, 0, 0.25)",
      },

      backgroundSize: {
        70: "70%",
      },
    },
  },
  plugins: [],
};
