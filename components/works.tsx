import { FiBookmark, FiGithub } from "react-icons/fi";

const Works = () => {
  const currentProjects = [
    {
      title: "PhD dissertation",
      link: {
        icon: FiBookmark,
        title: "Publications",
        target: "https://dblp.org/pid/238/6308.html",
      },
      text: "I am researching complex, task based search scenarios. More specifically, I investigate how backstories as a written form of information needs can efficiently be created as well as how useful such alternative information need representations are for search. This includes the usage in offline evaluation settings as well as search personalisation and diversification. The job search domain is used as an instantiation and motivating example. I have the privilege to work with one of the world's leading information retrieval research groups at RMIT.",
    },
    {
      title: "Quokka",
      link: {
        icon: FiGithub,
        title: "Source",
        target: "https://github.com/managementtechniksysteme/quokka",
      },
      text: "Quokka is a bespoke project management software, built as modern web application. The software allows users to manage customers, projects and tasks. Built-in processes for getting customer signatures on various reports and a reporting and notification system allows for an enhanced workflow when working on projects.",
    },
  ];

  const pastProjects = [
    {
      title: "Banking ETL and reporting",
      text: "Data of a major Austrian bank from various different sources in different formats was consolidated and transformed into a relational database. After the data cleansing process, reports were created to aid the customer with analysis and future projections.",
    },
    {
      title: "rcproxy",
      link: {
        icon: FiGithub,
        title: "Source",
        target: "https://github.com/manuelsteiner/rcproxy",
      },
      text: "Rcproxy is a content proxy to securely serve HTTP assets via HTTPS. It is implemented in Rust and heavily inspired by camo and go-camo. It supports a range of useful features, such as different URL styles, MIME type and IP restrictions.",
    },
    {
      title: "Inkdrop Todoist Sync",
      link: {
        icon: FiGithub,
        title: "Source",
        target: "https://github.com/manuelsteiner/inkdrop-todoist-sync",
      },
      text: "Inkdrop Todoist Sync is an Inkdrop plugin to synchronise notebooks and markdown notes with Todoist projects and tasks. It is highly customisable via a range of settings and allows for import and export of data in various different ways.",
    },
    {
      title: "AmitareMTS",
      text: "AmitareMTS was a bespoke project management software, written as client-side application. It has been superseeded by Quokka.",
    },
  ];

  return (
    <section id="works" className="fade-in-up mt-4 delay-150">
      <h1 className="text-lg font-bold tracking-tight text-orange-600 dark:text-white md:text-xl">
        <span className="border-b-2 border-b-orange-600 dark:border-b-white">
          Current Projects
        </span>
      </h1>

      <ul className="mt-2 text-gray-700 dark:text-gray-300">
        {currentProjects.map((project) => {
          return (
            <li key={project.title} className="mt-2">
              <h2 className="inline font-bold text-gray-900 dark:text-gray-50">
                {project.title}
              </h2>
              {project.link && (
                <a
                  className="ml-3 hover:text-orange-600 hover:underline hover:underline-offset-2 dark:hover:text-orange-400"
                  href={project.link.target}
                >
                  <project.link.icon className="mr-1 inline" />
                  {project.link.title}
                </a>
              )}
              <p className="mt-1 leading-relaxed tracking-wide">
                {project.text}
              </p>
            </li>
          );
        })}
      </ul>

      <h1 className="mt-4 text-lg font-bold tracking-tight text-orange-600 dark:text-white md:text-xl">
        <span className="border-b-2 border-b-orange-600 dark:border-b-white">
          Select Past Work
        </span>
      </h1>

      <ul className="mt-2 text-gray-700 dark:text-gray-300">
        {pastProjects.map((project) => {
          return (
            <li key={project.title} className="mt-2">
              <h2 className="inline font-bold text-gray-900 dark:text-gray-50">
                {project.title}
              </h2>
              {project.link && (
                <a
                  className="ml-3 hover:text-orange-600 hover:underline hover:underline-offset-2 dark:hover:text-orange-400"
                  href={project.link.target}
                >
                  <project.link.icon className="mr-1 inline" />
                  {project.link.title}
                </a>
              )}
              <p className="mt-1 leading-relaxed tracking-wide">
                {project.text}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Works;
