import { max } from "rxjs";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max':'520px'},
        'ps': '550px', // for application part mobile and tablet
        'sm': {'min': '540px', 'max': '1024px'}, // tablet view
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1736px',
        '4xl': '1936px',
        'tablet': {'min': '540px', 'max': '1024px'},
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(177.41deg, #156082 28.57%, #264653 97.72%)',
        'orange-gradient': 'linear-gradient(180deg, #E76F51 0%, #F4A261 100%)',
        'green-gradient': 'linear-gradient(180deg, #2A9D8F 0%,#264653 100%)',
        'orange-gradient-2': 'linear-gradient(180deg, #F4A261 0%, #E76F51 54.76%)',
      },
      boxShadow: {
        'float': '0px 10px 30px rgba(0, 0, 0, 0.14)',
        'package-card': '3px 6px 30px 0px rgba(0, 0, 0, 0.14)',
      },
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
      },
      fontSize: {
        'carousel-title': ['36px', '48px'], // Default size
        'carousel-title-xs': ['24px', '32px'], // Smaller size for xs screens
        'carousel-subtitle': ['20px', '28px'], // Default size
        'carousel-subtitle-xs': ['16px', '24px'], // Smaller size for xs screens
        'carousel-title-tablet': ['30px', '40px'], // Smaller size for tablet screens
        'carousel-subtitle-tablet': ['18px', '26px'], // Smaller size for tablet screens
        'section-title-tablet': ['32px', '42px'], // New size for tablet screens
        'section-subtitle-tablet': ['16px', '22px'], // New size for tablet screens
        'section-text-tablet': ['15px', '20px'], // New size for tablet screens
        'floating-title-tablet': ['26px', '34px'], // New size for tablet screens
        'floating-text-tablet': ['18px', '26px'], // New size for tablet screens
        'about-title-tablet': ['48px', '58px'], // New size for tablet screens
        'about-text-tablet': ['18px', '26px'], // New size for tablet screens
      },
      height: {
        'floating-step-tablet': '80px', // New height for tablet screens
        'about-header-tablet': '80px', // New height for tablet screens
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(50px)', opacity: '0' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 0.7s ease-out',
        slideDown: 'slideDown 0.4s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        fadeOut: 'fadeOut 0.5s ease-in',
      },
    },
  },
  plugins: [],
}
