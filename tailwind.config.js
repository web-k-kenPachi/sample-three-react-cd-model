/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.8rem', '1rem'],
      sm: ['0.89rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.14rem', '1.75rem'],
      xl: ['1.33rem', '2rem'],
      '2xl': ['1.6rem', '2.25rem'],
      '3xl': ['2rem', '2.25rem'],
      '4xl': ['2.67rem', '3.25rem'],
      '5xl': ['4rem', '4.5rem'],
      '6xl': ['8rem', '8rem'],
      displaySm: ['min(3vw,6rem)', '1.5em'],
      display: ['min(4vw,8rem)', '1.5em'],
      displayXl: ['min(12vw,12rem)', '1em'],
    },
    extend: {
      colors: {
        themeYellow: {
          500: '#FFF245',
        },
        themePink: {
          500: '#FD327F',
        },
        themeBlue: {
          500: '#6FC9F3',
        },
        themeRed: {
          500: '#FD2662',
          800: '#FF3A3A',
        },
      },
      fontFamily: {
        Anton: "'Anton', 'sans-serif'",
        NotoSans: "'Noto Sans JP', 'sans-serif'",
        KaiseiDecol: "'Kaisei Decol', 'sans-serif'",
        DotGothic: "'DotGothic16', 'sans-serif'",
      },
      boxShadow: {
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4);',
      },
      dropShadow: {
        '2xl': '0 10px 10px rgba(0, 0, 0, 0.3)',
        '3xl': '0 20px 20px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [require('@designbycode/tailwindcss-text-stroke')],
};
