const tailwindConfig = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fill: ['hover'], // Enabling hover state for fill
      stroke: ['hover'], // Enabling hover state for stroke
    },
  },
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#d1c1d7',
          'primary-content': '#100e11',
          'secondary': '#f6cbd1',
          'secondary-content': '#150f10',
          'accent': '#b4e9d6',
          'accent-content': '#0c1310',
          'neutral': '#b5a7bb',
          'neutral-content': '#040b0e',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#161616',
          'info': '#00b5ff',
          'info-content': '#000000',
          'success': '#00A96E',
          'success-content': '#000000',
          'warning': '#ffbe00',
          'warning-content': '#000000',
          'error': '#ff5861',
          'error-content': '#000000',
        },
      },
    ],
  },
  
  plugins: [require('daisyui')],
};

export default tailwindConfig;
