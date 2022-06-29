import { motion } from "framer-motion";

const Works = () => {
  const currentProjects = [
    {
      title: 'PhD dissertation',
      link: 'https://dblp.org/pid/238/6308.html',
      text: 'I am researching complex, task based search scenarios. More specifically, I investigate how backstories as a written form of information needs can efficiently be created as well as how useful such alternative information need representations are for search. This includes the usage in offline evaluation settings as well as search personalisation and diversification. The job search domain is used as an instantiation and motivating example. I have the privilege to work with one of the world\'s leading information retrieval research groups at RMIT.'
    },
    {
      title: 'Quokka',
      link: 'https://github.com/managementtechniksysteme/quokka',
      text: 'Quokka is a bespoke project management software, built as modern web application. The sofware allows users to manage customers, projects and tasks. Built-in processes for getting customer signatures on various reports and a reporting and notification system allows for an enhanced workflow when working on projects.'
    },
  ];

  const pastProjects = [
    {
      title: 'Banking ETL and reporting',
      text: 'Data of a major Austrian bank from various different sources in different formats was consolidated and transformed into a relational database. After the data cleaansing process, reports were created to aid the customer with analysis and future projections.'
    },
    {
      title: 'Inkdrop Todoist Sync',
      link: 'https://github.com/manuelsteiner/inkdrop-todoist-sync',
      text: 'Inkdrop Todoist Sync is an Inkdrop plugin to synchronise notebooks and markdown notes with Todoist projects and tasks. It is highly customisable via a range of settings and allows for import and export of data in various different ways.'
    },
    {
      title: 'AmitareMTS',
      text: 'AmitareMTS was a bespoke project management software, written as client-side application. It has been superseeded by Quokka.'
    }
  ];

  return (
    <motion.section id="works" className="mt-4" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .1 }}>
      <h1 className="text-lg md:text-xl font-bold tracking-tight text-orange-500 dark:text-white">
        <span className="border-b-2 border-b-orange-500 dark:border-b-white">Current Projects</span>
      </h1>

      <ul className="text-gray-900 dark:text-gray-50 mt-2">
        {
          currentProjects.map(project => {
            return (
              <li key={project.title} className="mt-2">
                <h2 className="font-bold">{project.title}</h2>
                { project.link && <a className="hover:text-orange-500 hover:underline hover:underline-offset-2" href={project.link}>{project.link}</a> }
                <p className="tracking-wide mt-1">{project.text}</p>
              </li>
            )
          })
        }
      </ul>

      <h1 className="text-lg md:text-xl font-bold tracking-tight text-orange-500 dark:text-white mt-4">
        <span className="border-b-2 border-b-orange-500 dark:border-b-white">Select Past Work</span>
      </h1>

      <ul className="text-gray-900 dark:text-gray-50 mt-2">
        {
          pastProjects.map(project => {
            return (
              <li key={project.title} className="mt-2">
                <h2 className="font-bold">{project.title}</h2>
                { project.link && <a className="hover:text-orange-500 hover:underline hover:underline-offset-2" href={project.link}>{project.link}</a> }
                <p className="tracking-wide mt-1">{project.text}</p>
              </li>
            )
          })
        }
      </ul>
   </motion.section>
  );
};

export default Works;
