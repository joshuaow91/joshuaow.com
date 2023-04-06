const flowbite = require('flowbite/plugin');

export default {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      // Add your custom theme colors here
      backgroundColor: {
        mytheme: {
          primary: "#45AEEE",
          secondary: "#E8488A",
          accent: "#FFF232",
          neutral: "#1A1A1A",
          "base-100": "#FFFFFF",
          info: "#4AA8C0",
          success: "#823290",
          warning: "#EE8133",
          error: "#E93F33",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [flowbite],
};
