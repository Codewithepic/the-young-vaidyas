/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f7f5',
          100: '#e3ebe6',
          200: '#c5d9ce',
          300: '#9bbfa9',
          400: '#6d9e80',
          500: '#4a8260',
          600: '#366649',
          700: '#2c523c',
          800: '#254232',
          900: '#1a332a', // Deep Forest Green (Main Brand Color)
          950: '#111f18',
        },
        secondary: {
          50: '#fbf9f2',
          100: '#f5f0df',
          200: '#ebe0c0',
          300: '#dfca96',
          400: '#d0af66',
          500: '#c5a059', // Muted Gold (Main Accent Color)
          600: '#9d7239',
          700: '#7e5530',
          800: '#68452c',
          900: '#563a28',
          950: '#301e12',
        },
        accent: {
          50: '#fdf6f3',
          100: '#fbece6',
          200: '#f5d6cd',
          300: '#ebb6a6',
          400: '#de8d76',
          500: '#cb664b', // Terracotta
          600: '#b04a32',
          700: '#923a26',
          800: '#7a3325',
          900: '#662e24',
          950: '#371510',
        },
        // Mapped legacy colors
        'hita-green': '#1a332a', // Main Deep Green
        'hita-cream': '#fdfbf7', // Warm Cream Background
        'hita-gold': '#c5a059', // Main Gold
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
        display: ['var(--font-playfair)', 'serif'],
        cinzel: ['var(--font-cinzel)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'paper-texture': "url('/images/paper-texture.png')", // Placeholder for texture if added
      },
    },
  },
  plugins: [],
}