import { FiGithub } from "react-icons/fi";

const Footer = () => {
  const sourceLink = 'https://github.com/manuelsteiner/linkto.ms';

  return (
    <footer className="flex justify-center w-11/12 max-w-2xl mt-4 pt-2">
      <span className="text-sm text-gray-700 dark:text-gray-300 mr-2">
       &copy; {(new Date()).getFullYear()} Manuel Steiner
      </span>
      <a className="text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:underline underline-offset-2" href={sourceLink}>
        <FiGithub className="inline" /> Source
      </a>
    </footer>
  );
};

export default Footer;
