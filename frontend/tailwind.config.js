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
    themes: ["pastel"],
  },
  plugins: [require('daisyui')],
};

export default tailwindConfig;
