import { motion } from "framer-motion";

const About = () => {
  const qualifications = [
    {
      time: "2017 - present",
      description: "PhD candidate (RMIT University, Melbourne, Australia)",
    },
    {
      time: "2016 - present",
      description: "Freelance software developer",
    },
    {
      time: "2016",
      description:
        "MSc in Computer Science (Johannes Kepler University, Linz, Austria)",
    },
  ];

  return (
    <section id="about" className="fade-in-up">
      <h1 className="text-lg font-bold tracking-tight text-orange-600 underline decoration-2 underline-offset-4 dark:text-white md:text-xl">
        About
      </h1>

      <p className="mt-2 leading-relaxed tracking-wide text-gray-700 dark:text-gray-300">
        I am an information retrieval researcher and software developer, based
        in Austria. My analytical skills and curious mind are applied in
        researching search processes. My software development experience
        includes designing bespoke full-stack web applications as well as tools
        for automated data processing. Additionally, I am knowledgeable in
        analysing and transforming data for industry-leading corporations in the
        banking sector.
      </p>
      <p className="mt-2 leading-relaxed tracking-wide text-gray-700 dark:text-gray-300">
        Currently, I am working on obtaining a doctorate degree. The research
        focuses on backstories as scenario descriptions for information
        retrieval evaluation settings. Furthermore, I am developing a bespoke
        project management software to enhance the client company&apos;s
        workflow for managing their projects.
      </p>

      <h1 className="mt-4 text-lg font-bold tracking-tight text-orange-600 underline decoration-2 underline-offset-4 dark:text-white md:text-xl">
        Qualifications
      </h1>

      <ul className="mt-2 text-gray-700 dark:text-gray-300">
        {qualifications.map((qualification) => {
          return (
            <li key={qualification.time} className="mt-2 sm:mt-0">
              <span className="font-bold text-gray-900 dark:text-white sm:mr-2">
                {qualification.time}:
              </span>
              <br className="inline sm:hidden" />
              <span className="tracking-wider">
                {qualification.description}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default About;
