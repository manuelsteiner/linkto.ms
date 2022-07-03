import { AnimatePresence, motion } from "framer-motion";
import Image from "next/future/image";
import { useEffect, useState } from "react";
import profile from "../public/profile.jpg";

const Hero = () => {
  const INTERVAL = 5000;

  const descriptions = [
    "Information Retrieval Researcher",
    "Software Developer",
    "Tinkerer",
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
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDescription((currentDescription + 1) % descriptions.length);
    }, INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentDescription, descriptions.length]);

  return (
    <section id="hero">
      <div className="flex flex-col items-center sm:flex-row">
        <Image
          src={profile}
          width="92"
          height="92"
          sizes="92"
          quality={100}
          priority
          alt="Profile"
          className="flex-shrink-0 rounded-full shadow-inner"
        ></Image>
        <div className="mt-4 flex-grow sm:mt-0">
          <div className="text-center text-2xl font-bold tracking-tight dark:text-white md:text-4xl">
            Manuel Steiner
          </div>
          <AnimatePresence exitBeforeEnter={true} initial={false}>
            <motion.div
              key={descriptions[currentDescription]}
              className="mt-1 text-center text-xl tracking-tight text-orange-600 dark:text-orange-400 md:mt-2 md:text-2xl"
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
            >
              {descriptions[currentDescription]
                .split("")
                .map((character, index) => {
                  return (
                    <motion.span
                      key={character + "" + index}
                      variants={letterVariants}
                    >
                      {character}
                    </motion.span>
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
