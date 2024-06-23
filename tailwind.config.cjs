/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edfaff",
          100: "#d6f2ff",
          200: "#b5eaff",
          300: "#83dfff",
          400: "#48cbff",
          500: "#1eadff",
          600: "#068fff",
          700: "#007bff",
          800: "#085ec5",
          900: "#0d519b",
          950: "#0e315d",
        },
        secondary: "#F8F8F8",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
