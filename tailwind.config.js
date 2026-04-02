/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cbo-green': '#2e7d32',
        'cbo-blue': '#1565c0',
        'cbo-cream': '#fff9c4',
      },
    },
  },
  plugins: [],
}