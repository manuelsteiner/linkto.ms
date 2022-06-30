import { motion, useViewportScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavBrand from "./nav-brand";
import NavItem from "./nav-item";
import NavList from "./nav-list";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  const navbarRef = useRef(null);

  const [navbarVisible, setNavbarVisible] = useState(true);
  const [showNavbarShadow, setShowNavbarShadow] = useState(false);
  const { scrollY } = useViewportScroll();

  const navbarVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: -(navbarRef.current ? navbarRef.current["clientHeight"] : 50),
    },
  };

  function update() {
    if (scrollY && scrollY.get() < scrollY.getPrevious()) {
      setNavbarVisible(true);
    } else if (
      scrollY.get() >
        (navbarRef.current ? navbarRef.current["clientHeight"] : 50) &&
      scrollY.get() > scrollY.getPrevious()
    ) {
      setNavbarVisible(false);
    }

    setShowNavbarShadow(scrollY.get() > 0);
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
    <motion.header
      ref={navbarRef}
      variants={navbarVariants}
      animate={navbarVisible ? "visible" : "hidden"}
      transition={{ type: "tween" }}
      className={`${
        showNavbarShadow
          ? "shadow-md shadow-gray-200 dark:bg-gray-800 dark:shadow-none"
          : "shadow-none"
      } sticky top-0 z-10 flex justify-center bg-white p-2 dark:bg-gray-900`}
    >
      <nav className="flex w-11/12 max-w-2xl flex-col sm:flex-row sm:items-baseline sm:justify-start">
        <NavBrand>
          <Link href="/">
            <a className="dark:text-white">Manuel Steiner</a>
          </Link>
        </NavBrand>
        <NavList>
          <NavItem>
            <Link href="/">
              <a className="mr-4 hover:text-orange-600 hover:underline hover:underline-offset-2 dark:hover:text-orange-400">
                About
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#works">
              <a className="mr-4 hover:text-orange-600 hover:underline hover:underline-offset-2 dark:hover:text-orange-400">
                Works
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#contact">
              <a className="hover:text-orange-600 hover:underline hover:underline-offset-2 dark:hover:text-orange-400">
                Contact
              </a>
            </Link>
          </NavItem>
        </NavList>

        <div className="absolute right-6 sm:relative sm:ml-auto">
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
