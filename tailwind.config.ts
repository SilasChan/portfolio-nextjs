/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        dark: {
          100: "#f5f5f5", // Example light gray
          200: "#d1d5db", // Lighter color shades for dark mode
          800: "#1f2937", // Dark background
          900: "#111827", // Even darker shade
        },
      },
      backgroundImage: {
        pattern: 'url("../images/pattern.svg")',
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
      fontFamily: {
        martianMono: ["var(--font-martian-mono)"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
