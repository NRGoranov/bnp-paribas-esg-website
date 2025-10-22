/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bnp-green': '#2E7D32',
        'bnp-light-green': '#4CAF50',
        'bnp-blue': '#1976D2',
        'bnp-light-blue': '#42A5F5',
        'bnp-grey': '#616161',
        'bnp-light-grey': '#E0E0E0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



