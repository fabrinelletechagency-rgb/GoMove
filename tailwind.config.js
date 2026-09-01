/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f5fb",
          100: "#dce8f5",
          200: "#b9d1ea",
          300: "#8bb2da",
          400: "#5c8fc4",
          500: "#3d72aa",
          600: "#2e5c8c",
          700: "#264a70",
          800: "#1f3b58",
          900: "#182e44",
          950: "#101f2f",
        },
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 28px -14px rgba(46, 92, 140, 0.35)",
      },
    },
  },
  plugins: [],
}
