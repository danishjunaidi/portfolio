/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#6d28d9",
        accent: "#0ea5e9",
        dark: "#0f172a",
        light: "#f1f5f9",
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        "glow": {
          "0%, 100%": {
            "box-shadow": "0 0 20px rgba(14, 165, 233, 0.5)",
          },
          "50%": {
            "box-shadow": "0 0 40px rgba(109, 40, 217, 0.8)",
          },
        },
        "float": {
          "0%, 100%": {
            "transform": "translateY(0px)",
          },
          "50%": {
            "transform": "translateY(-20px)",
          },
        },
      },
    },
  },
  plugins: [],
}
