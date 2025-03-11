import { useState } from 'react';
import { motion } from 'framer-motion';
import Spinner from './Spinner';
import Dice from './../images/icon-dice.svg';
import Line from './../images/pattern-divider-desktop.svg';

function Card() {
  const [text, setText] = useState('Click the button to receive an advice');
  const [num, setNum] = useState('0');
  const [isLoading, setIsLoading] = useState(false);

  const ChangeAdvice = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.adviceslip.com/advice?timestamp=${Date.now()}`
      );
      const data = await res.json();
      setText(data.slip.advice);
      setNum(data.slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const divVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Button animation setup
  const buttonVariants = {
    idle: {
      scale: [1, 1.1, 1], // Pulsing effect
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1.5,
      },
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.div
      variants={divVariants}
      initial="hidden"
      animate="visible"
      className="bg-dark-grayish-blue p-16P relative flex flex-col justify-center items-center rounded-10BR"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <p className="uppercase tracking-widest text-xs mb-16M text-neon-green">
            Advice #{num}
          </p>
          <motion.h1
            className="text-light-cyan mb-32M text-center text-lg md:text-xl max-w-600MW"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {text}
          </motion.h1>
          <img className="-mb-10M" src={Line} alt="divider" />

          {/* Button with multiple animations */}
          <motion.button
            onClick={ChangeAdvice}
            className="button button-primary p-16P rounded-full bg-neon-green relative top-48I"
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
          >
            <img src={Dice} alt="roll a new advice" />
          </motion.button>
        </>
      )}
    </motion.div>
  );
}

export default Card;
