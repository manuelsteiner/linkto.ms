import { motion } from "framer-motion";

const About = () => {

  const qualifications = [
    {
      time: '2017 - present',
      description: 'PhD candidate (RMIT University, Melbourne, Australia)'
    },
    {
      time: '2016 - present',
      description: 'Freelance software developer'
    },
    {
      time: '2016',
      description: 'MSc in Computer Science (Johannes Kepler University, Linz, Austria)'
    }
  ];

  return (
    <motion.section id="about" className="mt-4" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
      <h1 className="text-lg md:text-xl font-bold tracking-tight text-orange-500 dark:text-white">
        <span className="border-b-2 border-b-orange-500 dark:border-b-white">About</span>
      </h1>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide mt-2">
        I am an information retrieval researcher and software developer, based in Austria. My analytical skills and curious mind are applied in researching search processes. My software development experience includes designing bespoke full-stack web applications as well as tools for automated data processing. Additionally, I am knowledgeable in analysing and transforming data for industry-leading corporations in the banking industry.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide mt-2">
        Currently, I am working on obtaining a doctorate degree. The research focuses on backstories as scenario descriptions for information retrieval evaluation settings. Furthermore, I am developing a bespoke project management software to enhance the client company&apos;s workflow for managing their projects.
      </p>

      <h1 className="text-lg md:text-xl font-bold tracking-tight text-orange-500 dark:text-white mt-4">
        <span className="border-b-2 border-b-orange-500 dark:border-b-white">Qualifications</span>
      </h1>

      <ul className="text-gray-700 dark:text-gray-300 mt-2">
        {
          qualifications.map(qualification => {
            return (
              <li key={qualification.time} className="mt-2 sm:mt-0">
                <span className="font-bold text-gray-900 dark:text-white sm:mr-2">{qualification.time}:</span>
                <br className="inline sm:hidden" />
                <span className="tracking-wider">{qualification.description}</span>
              </li>
            )
          })
        }
      </ul>
    </motion.section>
  );
};

export default About;
