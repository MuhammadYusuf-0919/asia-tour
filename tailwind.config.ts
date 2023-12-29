import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors: {
      "green": '#35CC61',
      'grayDark': '#838383',
      'grayDarker': '#4B4B4B',
      'grayLighter': "#A0A0A0",
      'lighter': '#EBEBEB',
      'greenLighter': '#DCFFE6',
      'dark': '#000',
      'danger': '#F54180'
    },
    screens: {
      '2xl': { 'max': '1750px' },
      'lxl': { 'max': '1600px' },
      'xl': { 'max': '1380px' },
      'lg': { 'max': '1170px' },
      'md': { 'max': '1000px' },
      'smd': { 'max': '770px' },
      'sm': { 'max': '456px' }
    },
    extend: {
    },
  },
  plugins: [nextui()]
}
export default config