/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Menü tasarımıyla aynı palet
      colors: {
        paper: "#FFFFFF",
        sand: "#FAF6EE", // bölüm arka planları için yumuşak krem
        cream: "#F1E6CF",
        ink: "#2E2A20",
        muted: "#716856",
        line: "#ECE6DA",
        olive: {
          DEFAULT: "#55711A",
          dark: "#445B14",
        },
        brick: {
          DEFAULT: "#C8391F",
          dark: "#A82F18",
        },
        "on-brick": "#FDEEE4",
        "on-brick-muted": "#F6CDBF",
        // Detox görselinden
        mustard: "#E5B553",
        floor: "#93A84A",
        leaf: "#5E7F2A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Garamond", '"Times New Roman"', "serif"],
        sans: ["Figtree", "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
