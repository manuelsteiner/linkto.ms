import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string|null|undefined>();

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, []);

  useEffect(() => {
    if (
      theme === "dark" ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (theme) {
      localStorage.setItem('theme', theme);
    } else if(theme === null) {
      localStorage.removeItem('theme');
    }
  }, [theme]);

  const changeTheme = () => {
    if (!theme) {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme(null);
    }
  };

  return (
    <>
      {theme === undefined && null}

      {
        theme !== undefined &&
        <button className={`${theme === 'light' ? 'text-white bg-purple-500 hover:bg-purple-600' : 'text-black bg-yellow-400 hover:bg-yellow-500'} font-bold rounded p-2 overflow-hidden`} aria-label="Change Theme" onClick={changeTheme}>
          <AnimatePresence exitBeforeEnter={true} initial={false}>
            <motion.div key={theme} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} transition={{ duration: .2 }}>
              {!theme && <FiSun />}
              {theme === 'light' && <FiMoon />}
              {theme === 'dark' && <FiMonitor />}
            </motion.div>
          </AnimatePresence>
        </button>
      }
    </>
  );
};

export default ThemeToggle;
