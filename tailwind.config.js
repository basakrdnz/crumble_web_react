/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crumble: {
          50: "#fefae0",    // cornsilk (çok açık)
          100: "#e9e4c5",   // cornsilk'ten biraz koyu (ara ton)
          200: "#d6cfa3",   // cornsilk + earth-yellow karışımı (ara ton)
          300: "#dda15e",   // earth-yellow
          400: "#bc6c25",   // tigers-eye
          500: "#a05a1c",   // tigers-eye'dan koyu (ara ton)
          600: "#606c38",   // dark-moss-green
          700: "#4e5a2c",   // dark-moss-green'den koyu (ara ton)
          800: "#283618",   // pakistan-green
          900: "#1a220e",   // pakistan-green'den koyu (en koyu)
        },
      },
    },
  },
  plugins: [],
};