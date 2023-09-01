/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'shadow-custom': 'rgb(157 157 157 / 20%) 0px 4px 10px',
      },
     backgroundColor:{
      'bg-header':'#0A1117',
      'icon-header':'rgb(102 116 204/1)',
       'bg-header-login':' #243241',
       'mathbtncolor':' #FFCF01'
     },
     textColor:{
      'typewritter-color':' rgb(102 116 204/1)',
      'mathcolor':'#000000',
      
      
     },
     fontWeight:{
      'btnweight':'700'
     }
    },
    // backgroundColor:theme=>({
    //   ...theme('colors'),
    //   'bg-header':'rgb(247 248 252/1)'
    // })
  },
  plugins: [],
}
