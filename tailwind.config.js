/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
      textColor: {
        'ae4d12/50': '#ae4d12' // Define your custom color class
      },
    },
  },
  plugins: [],
});
