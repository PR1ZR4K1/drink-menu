/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';

module.exports = ({
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [nextui({
    prefix: "app", defaultTheme: "light", // default theme from the themes object
      }
  )],
});
