import type { Config } from "tailwindcss";

export default {
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
        gray: '#636363',
        lightGray: '#dfdfdf',
        white: '#ffffff',
        black: '#000000',
        border: '#e5e7eb', // Adding a default border color
        background: '#ffffff', // Adding a default background color
        foreground: '#ffd700', // Default text color (gold)
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
