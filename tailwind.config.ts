/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Roboto"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        gold: '#ffd700',
        lightGray: '#dfdfdf',
        gray: '#636363',
        white: '#ffffff',
        black: '#000000',
        border: '#e5e7eb',
        background: '#dfdfdf',
        foreground: '#ffd700',
      },
      // Removed noise background
    }
  },
  plugins: [tailwindcssAnimate],
};
