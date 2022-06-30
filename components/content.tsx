import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Hero from "./hero";
import Works from "./works";

const Content = () => {
  return (
    <main className="relative flex justify-center px-2 py-4">
      <div className="w-11/12 max-w-2xl dark:text-gray-50">
        <Hero />
        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Content;
