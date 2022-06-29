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
        <motion.div key={descriptions[currentDescription]} className="text-xl md:text-2xl tracking-tight text-center text-orange-500 mt-1 md:mt-2" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} transition={{ duration: .2 }}>
          { descriptions[currentDescription] } 
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
