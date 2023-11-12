/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      '@tablet': '640px',
      '@laptop': '1024px',
      '@desktop': '1280px',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'blue-primary': '#1D4FFE',
        'green-primary': '#4BCE97',
        'gray-border-card': '#131317',
        'gray-area-favorite': '#05040A',
      },
      maxWidth: {
        logo: '10rem',
        grid: '77.5rem',
        'card-nft': '17.4rem',
        'card-collector': '37rem',
        'footer-content': '20.2rem',
      },
      width: {
        'area-cards-mobile': '43.7rem',
      },
      height: {
        'area-image-nft': '14.7rem',
        'area-cards-mobile': '15.3rem',
        'area-cards-desktop': '26.6rem',
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
      backgroundImage: {
        'hero-pattern': 'url("/bg-hero.svg")',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
