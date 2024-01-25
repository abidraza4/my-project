/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "background": {
          50 : "#4f7364",
          100 : "#8fbc8f"
        },
        "gradient":{
          50 : "#BDF1C3",
          100 : "#117338",
          150 : "#2C3817",
        },
        "buttons":{
          50: "#27242D",
          100: "#44404D",
          150: "#9C24D4",
          200: "#BD4CF2"
        },
        "gradient2":{
          50 : "#07A14F",
          100 : "#117338",
          150 : "#2C3817"
        },
        "gradient3":{
          50 : "#E44C52",
          100 : "#DF4DB5",
          150 : "#CA43D4",
          200 : "#6610F5",
        },
        "primary": {
          10: "#04020B",
          50: "#362C46",
          100: '#ba2944',
          150: '#7A797E',
          "border-o1": "var(--border-o1)",
          "purple-1": "var(--purple-1)",
          "white-1": "var(--white-1)",
        },
        "highlight":{
          50: "#D86E53"
        },
      }
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}