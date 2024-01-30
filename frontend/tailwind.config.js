const tailwindConfig = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["pastel"],
  },
  plugins: [require('daisyui')],
};

export default tailwindConfig;
