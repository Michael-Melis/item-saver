module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#280046',
      secondary: '#B4FAB4',
      info: '#E6C8FF',
      success: '#28C76F',
      error: '#FA3E3E',
      warning: '#EF7D00',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#F2F2F2',
      yellow: 'yellow',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
