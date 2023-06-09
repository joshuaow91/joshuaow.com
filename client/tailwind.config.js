export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', 
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        mytheme: {
          primary: "#45AEEE",
          secondary: "#E8488A",
          accent: "#FFF232",
          // neutral: "#1A1A1A",
          "base-100": "#FFFFFF",
          info: "#4AA8C0",
          success: "#823290",
          warning: "#EE8133",
          error: "#E93F33",
        },
        black: '#303030',
        darkBlack: '#383838',
        blacker: '#222222',
        blackest:'#141414',
        white: '#F8F8F8',
        greener: '#4ADE80',
        accent: '#CCF381',
        baseTwo: '#4831D4',
        imgblack: '1E1E1E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
