/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/**/*.{js,ts,jsx,tsx}", "./src/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/forms'],
}

