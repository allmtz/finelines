/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hl: "#ff7356",
      },
      backgroundImage: {
        haircut: "url('/images/haircut.jpg')",
        chair: "url('/images/chair.jpg')",
        shop: "url('/images/shop.jpg')",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        text: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
