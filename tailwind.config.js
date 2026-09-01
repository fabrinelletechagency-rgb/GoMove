/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef1ff",
          100: "#dce3ff",
          200: "#b6c3ff",
          300: "#8798ff",
          400: "#5d6ffb",
          500: "#3a4bef",
          600: "#2734d9",
          700: "#1f28ad",
          800: "#1b2286",
          900: "#161c63",
          950: "#0a0e33",
        },
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 32px -12px rgba(39, 52, 217, 0.4)",
      },
    },
  },
  plugins: [],
}
