import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const INTERVAL = 5000;

  const descriptions = [
    'Information Retrieval Researcher',
    'Software Developer',
    'Tinkerer'
  ];

  const [currentDescription, setCurrentDescription] = useState(0);

  const descriptionVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDescription((currentDescription+1) % (descriptions.length));
    }, INTERVAL);

    return () => {
      clearInterval(intervalId);
    }
  }, [currentDescription, descriptions.length]);

  return (
    <section id="hero">
      <div className="text-2xl md:text-4xl tracking-tight text-center font-bold dark:text-white">Manuel Steiner</div>
      <AnimatePresence exitBeforeEnter={true} initial={false}>
        <motion.div key={descriptions[currentDescription]} className="text-xl md:text-2xl tracking-tight text-center text-orange-500 mt-1 md:mt-2" variants={descriptionVariants} initial="hidden" animate="visible">
          { 
            descriptions[currentDescription].split('').map((character, index) => {
              return (
                <motion.span key={character + '' + index} variants={letterVariants}>
                  {character}
                </motion.span>
              )
            })
          }
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
