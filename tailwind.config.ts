import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages//*.{js,ts,jsx,tsx,mdx}',
    './src/components//*.{js,ts,jsx,tsx,mdx}',
    './src/app//*.{js,ts,jsx,tsx,mdx}',
    './src/app//*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      "green":'#35CC61',
      'grey':'#838383',
      'gray':"#A0A0A0",
      'lighter':'#EBEBEB',
      'dark':'#000'
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
    extend: {
    },
  },
  plugins: [],
}
export default config