module.exports = {
  dark: 'class',
  purge:
    process.env.NODE_ENV === 'production'
      ? {
          enabled: true,
          content: ['./src/**/*.vue', './src/**/*.js']
        }
      : false,
  theme: {
    extend: {
      fontFamily: {
        mono: ['Hack', 'D2Coding', 'monospace']
      },
      fontSize: {
        xl: '1.3rem'
      },
      screens: {
        '2xl': '1480px'
      },
      colors: {
        elevation: {
          100: 'rgba(255, 255, 255, 0.05)',
          200: 'rgba(255, 255, 255, 0.07)',
          300: 'rgba(255, 255, 255, 0.08)',
          400: 'rgba(255, 255, 255, 0.09)',
          500: 'rgba(255, 255, 255, 0.11)',
          600: 'rgba(255, 255, 255, 0.12)',
          700: 'rgba(255, 255, 255, 0.14)',
          800: 'rgba(255, 255, 255, 0.15)',
          900: 'rgba(255, 255, 255, 0.16)'
        },
        accent: {
          lighter: '#54AAF0',
          main: '#247CC4',
          darker: '#0B4B80'
        },
        dark: {
          surface: '#121212',
          lighten: '#282828'
        },
        white: {
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.5)',
          600: 'rgba(255, 255, 255, 0.6)',
          700: 'rgba(255, 255, 255, 0.7)',
          800: 'rgba(255, 255, 255, 0.8)',
          900: 'rgba(255, 255, 255, 0.9)',
          f: 'rgb(255, 255, 255)'
        }
      }
    }
  }
}
