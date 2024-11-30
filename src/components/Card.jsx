import { useState } from 'react'
import Dice from './../images/icon-dice.svg'
import Line from './../images/pattern-divider-desktop.svg'

function Card() {
  const [text, setText] = useState('Click the button to receive an advice')
  const [num, setNum] = useState('0')

  const ChangeAdvice = async () => {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
      const data = await res.json();
      setText(data.slip.advice);
      setNum(data.slip.id);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }

  return (
    <div className='bg-dark-grayish-blue p-16P relative flex flex-col justify-center items-center rounded-10BR'>
      <p id='num' className='uppercase tracking-widest text-xs mb-16M text-neon-green'>Advice #{num}</p>
      <h1 id='textAdvice' className='text-light-cyan mb-32M text-center text-lg md:text-xl max-w-600MW'>
        {text}
      </h1>
      <img className='-mb-10M' src={Line} alt="divider" />
      <button onClick={ChangeAdvice} className='button button-primary p-16P rounded-full bg-neon-green relative top-48I'>
        <img src={Dice} alt="roll a new advice" />
      </button>
    </div>
  )
}

export default Card
