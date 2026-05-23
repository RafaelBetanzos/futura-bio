/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'futura-dark': '#2A3519',
        'futura-cream': '#F5F2EA',
        'futura-light': '#FAFAF7',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
