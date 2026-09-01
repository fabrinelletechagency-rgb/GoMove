/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dbe7ff",
          200: "#b8cfff",
          300: "#8bb0ff",
          400: "#5c8bff",
          500: "#2f66f5",
          600: "#1d4ed8",
          700: "#1a3fb0",
          800: "#17358c",
          900: "#132a6b",
          950: "#0b1a44",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(29, 78, 216, 0.35)",
      },
    },
  },
  plugins: [],
}
