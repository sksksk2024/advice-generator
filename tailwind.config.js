// tailwind.config.js
module.exports = {
  content: [ 
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
  extend: {
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      'dm-sans': ['DM Sans', 'sans-serif'],
      'red-hat-text': ['Red Hat Text', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
    },
    keyframes: {
      fade: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      walk: {
        '0%': {
          transform: 'translateX(-100px)',
          opacity: '0',
        },
        '50%': {
          transform: 'translateX(100px)',
          opacity: '0.2',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'ease-in-out',
        },
        '25%': {
          transform: 'translateY(-20%)',
          'animation-timing-function': 'ease-in',
        },
        '50%': {
          transform: 'translateY(10%)',
          'animation-timing-function': 'ease-out',
        },
        '75%': {
          transform: 'translateY(-10%)',
          'animation-timing-function': 'ease-in-out',
        },
      },
      bounceCombo: {
        '0%': {
          transform: 'translate(-50px, -50%) scale(0.8)',
          opacity: '0',
        },
        '50%': {
          transform: 'translate(0, 50%) scale(1.5)',
          opacity: '0.5',
        },
        '100%': {
          transform: 'translate(0, 0) scale(1)',
          opacity: '1',
        },
      },
    },
    animation: {
      fade: 'fade .8s forwards',
      walk: 'walk 2s backwards',
      bounce: 'bounce .6s forwards',
      bounceCombo: 'bounceCombo 1.5s forwards',
    },
    colors: {
      'light-cyan': 'var(--light-cyan)',
      'neon-green': 'var(--neon-green)',
      'grayish-blue': 'var(--grayish-blue)',
      'dark-grayish-blue': 'var(--dark-grayish-blue)',
      'dark-blue': 'var(--dark-blue)',
    },
    maxWidth: { 
      // Casual, but confusing method for me 
      'container-3xs': '200px',     
      'container-2xs': '250px',     
      'container-xs': '500px',
      'container-sm': '900px',     
      'container-md': '1100px',     
      'container-lg': '1200px',     
      'container-xl': '1500px',     
      'custom': '100%',
      // Prefered By Me
      '1-6MW': '0.1rem',
      '8MW': '0.5rem',
      '16MW': '1rem',
      '24MW': '1.5rem',
      '28-8MW': '1.8rem',
      '32MW': '2rem',
      '48MW': '3rem',
      '64MW': '4rem',
      '128MW': '8rem',
      '160MW': '10rem',
      '200MW': '12.5rem',
      '208MW': '13rem',
      '256MW': '16rem',
      '272MW': '17rem',
      '288MW': '18rem',
      '300MW': '18.75rem',
      '400MW': '25rem',
      '464MW': '29rem',
      '600MW': '37.5rem',
      '640MW': '40rem',
      '800MW': '50rem',
      '1000MW': '62.5rem',
      '1200MW': '75rem',
    },
    width: {
      '1W': '0.0625rem',
      '1.6W': '0.1rem',
      '8W': '0.5rem',
      '16W': '1rem',
      '24W': '1.5rem',
      '28-8W': '1.8rem',
      '32W': '2rem',
      '48W': '3rem',
      '64W': '4rem',
      '128W': '8rem',
      '160W': '10rem',
      '200W': '12.5rem',
      '208W': '13rem',
      '256W': '16rem',
      '272W': '17rem',
      '288W': '18rem',
      '300W': '18.75rem',
      '316W': '19.75rem',
      '400W': '25rem',
      '464W': '29rem',
      '600W': '37.5rem',
      '800W': '50rem',
      'logo': '125px',
      'how': '182px',
      'btn': '35%',
    },
    maxHeight: {
      '1.6MH': '0.1rem',
      '8MH': '0.5rem',
      '16MH': '1rem',
      '24MH': '1.5rem',
      '28-8MH': '1.8rem',
      '32MH': '2rem',
      '48MH': '3rem',
      '64MH': '4rem',
      '128MH': '8rem',
      '160MH': '10rem',
      '200MH': '12.5rem',
      '208MH': '13rem',
      '256MH': '16rem',
      '272MH': '17rem',
      '288MH': '18rem',
      '300MH': '18.75rem',
      '400MH': '25rem',
      '464MH': '29rem',
      '600MH': '37.5rem',
      '1200MH': '75rem',
    },
    height: {
      '1.6H': '0.0625rem',
      '8H': '0.5rem',
      '16H': '1rem',
      '24H': '1.5rem',
      '32H': '2rem',
      '33.6H': '2.1rem',
      '40H': '2.5rem',
      '48H': '3rem',
      '56H': '3.5rem',
      '64H': '4rem',
      '1-6H': '0.1rem',
      '24H': '1.5rem',
      '28-8H': '1.8rem',
      '73.6H': '4.6rem',
      '80H': '5rem',
      '100H': '6.25rem',
      '128H': '8rem',
      '160H': '10rem',
      '200H': '12.5rem',
      '208H': '13rem',
      '256H': '16rem',
      '272H': '17rem',
      '288H': '18rem',
      '300H': '18.75rem',
      '316H': '19.75rem',
      '400H': '25rem',
      '464H': '29rem',
      '800H': '40rem',
    },
    screens: {
      '3xs': '0px',
      '2xs': '380px',
      'custom': '430px',
      'xs': '480px', // extra small screens
      'sm': '640px', // small screens
      'md': '768px', // medium screens
      'lg': '1024px', // large screens
      'xl': '1280px', // extra large screens
      '2xl': '1536px', // double extra large screens
    },
    fontSize: {
      '2xs': 'var(--font-size-2xs)',
      'xs': 'var(--font-size-xs)',
      'sm': 'var(--font-size-sm)',
      'md': 'var(--font-size-md)',
      'md-1': 'var(--font-size-md-1)',
      'lg': 'var(--font-size-lg)',
      'xl': 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '2-2xl': 'var(--font-size-2-2xl)',
      '2-4xl': 'var(--font-size-2-4xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
    },
    margin: {
      'socialM': '-4rem',
      '1.6M': '0.1rem',
      '10M': '0.625rem',
      '16M': '1rem',
      '28.8M': '1.8rem',
      '32M': '2rem',
      '1.2M': '1.2rem',
      '48M': '3rem',
      '64M': '4rem',
      '128M': '8rem',
    },
    borderWidth: {
      '1BW': '1px',
      '3BW': '3px',
      '4BW': '4px',
      '5BW': '5px',
    },
    inset: {
      '16negI': '-1rem',
      '1.12I': '0.07rem',
      '1.6I': '0.1rem',
      '2.4I': '0.15rem',
      '4I': '0.25rem',
      '8I': '0.5rem',
      '10I': '0.625rem',
      '16I': '1rem',
      '24I': '1.5rem',
      '26I': '1.625rem',
      '28I': '1.75rem',
      '28.8I': '1.8rem',
      '32I': '2rem',
      '48I': '3rem',
      '64I': '4rem',
      '68.8I': '4.3rem',
      '80I': '5rem',
      '83-2I': '5.2rem',
      '86.4I': '5.4rem',
      '96I': '6rem',
      '105.6I': '6.6rem',
      '112I': '7rem',
      '116.8I': '7.3rem',
      '124.8I': '7.8rem',
      '128I': '8rem',
      '136.8I': '8.55rem',
      '140I': '8.75rem',
      '146.4I': '9.15rem',
      '152.8I': '9.55rem',
      '176I': '11rem',
      '182.4I': '11.4rem',
      '192I': '12rem',
      '224I': '14rem',
      '200I': '12.5rem',
      '208I': '13rem',
      '243.2I': '15.2rem',
      '256I': '16rem',
      '280I': '17.5rem',
      '300I': '18.75rem',
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg,hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
    },
    padding: {
      '1.2P': '1.2rem',
      '1.6P': '0.1rem',
      '3.2P': '0.2rem',
      '6P': '0.375rem',
      '8P': '0.5rem',
      '10P': '0.625rem',
      '12P': '0.75rem',
      '16P': '1rem',
      '22.4P': '1.4rem',
      '24P': '1.5rem',
      '28P': '1.75rem',
      '28.8P': '1.8rem',
      '32P': '2rem',
      '48P': '3rem',
      '56P': '3.5rem',
      '64P': '4rem',
      '80P': '5rem',
      '128P': '8rem',
    },
    borderRadius: {
      '5BR': '5px',
      '10BR': '10px',
      '20BR': '20px',
      '30BR': '30px',
      '50BR': '50px',
      '80BR': '80px',
      '100BR': '100px',
      '150BR': '150px',
    },
    boxShadow: {
      'custom-light': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      'custom-medium': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
      'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)',
      'custom-xl': '0 20px 25px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
      'custom-dark-cyan': '0 3px 1px rgba(0, 100, 0, 0.9), 0 4px 6px rgba(38, 186, 164, 0.9)',
      'custom-dark-light-blue': '0 3px 1px rgba(80, 70, 100, 0.9), 0 4px 6px rgba(97, 115, 255, 0.9)',
      'centered-black-soft': '0 0 5px 1px rgba(0, 0, 0, 0.3), 0 0 10px 3px rgba(0, 0, 0, 0.2)',
      'centered-black-strong': '0 0 15px 5px rgba(0, 0, 0, 0.7), 0 0 30px 10px rgba(0, 0, 0, 0.5)',
    },
    userSelect: {
      'none': 'none',
    },
    letterSpacing: {  
      '0.2': '0.2rem',  
      '0.4': '0.4rem',  
    },
  },
},
  plugins: [
    require('daisyui'),
  ],
}