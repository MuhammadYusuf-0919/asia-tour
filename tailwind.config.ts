import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/themes/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors:{
      "green":'#35CC61',
      'grey':'#838383',
      'gray':"#A0A0A0",
      'lighter':'#EBEBEB',
      'dark':'#000',
      'darker':"rgba(0, 0, 0, 0.65)",
      'greener':'rgba(53, 204, 97, 0.70)'
    },
    screens:{
      '2xl': {'max': '1750px'},
      'lxl':{'max':'1600px'},
      'xl': {'max': '1380px'},
      'lg': {'max': '1170px'},
      'md': {'max': '1000px'},
      'smd': {'max': '770px'},
      'sm': {'max': '456px'}
    },
    boxShadow:{
      'card':"0px 0px 25px 0px rgba(0, 0, 0, 0.25)"
    },
    extend: {
    },
  },
  plugins: [nextui()]
}
export default config