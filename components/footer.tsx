import { FiGithub } from "react-icons/fi";

const Footer = () => {
  const sourceLink = "https://github.com/manuelsteiner/linkto.ms";

  return (
    <footer className="mt-4 flex w-11/12 max-w-2xl justify-center pt-2">
      <span className="mr-2 text-sm text-gray-700 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Manuel Steiner
      </span>
      <a
        className="text-sm text-gray-700 underline-offset-2 hover:text-orange-600 hover:underline dark:text-gray-300 dark:hover:text-orange-400"
        href={sourceLink}
      >
        <FiGithub className="inline" /> Source
      </a>
    </footer>
  );
};

export default Footer;
