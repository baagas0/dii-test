import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#009ef7',
        gray: '#DBDFE9',
        green: '#50cd89',
        purple: '#7239ea',
        yellow: '#ffc700',
        red: '#f1416c',
        light: {
          blue: '#f1faff',
          gray: '#F9F9F9',
          green: '#e8fff3',
          purple: '#f8f5ff',
          yellow: '#fff8dd',
          red: '#fff5f8',
        }
      },
    },
  },
  plugins: [],
};
export default config;
