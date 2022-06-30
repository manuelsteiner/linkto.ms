import { motion } from "framer-motion";
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";

const Contact = () => {
  const contacts = [
    { logo: FiMail, text: "mail@linkto.ms" },
    {
      logo: FiTwitter,
      text: "manuelsteiner_",
      link: "https://twitter.com/manuelsteiner_",
    },
    {
      logo: FiGithub,
      text: "manuelsteiner",
      link: "https://github.com/manuelsteiner",
    },
  ];

  return (
    <section id="contact" className="fade-in-up mt-4 delay-300">
      <h1 className="text-lg font-bold tracking-tight text-orange-600 dark:text-white md:text-xl">
        <span className="border-b-2 border-b-orange-600 dark:border-b-white">
          Contact
        </span>
      </h1>

      <p className="mt-2 leading-relaxed tracking-wide text-gray-700 dark:text-gray-300">
        Feel free to contact me to discuss projects or research ideas. I look
        forward to new challanges and opportunities to tinker.
      </p>

      <ul className="mt-2 text-gray-700 dark:text-gray-300">
        {contacts.map((contact) => {
          return (
            <li key={contact.logo.name}>
              <contact.logo className="mr-2 inline text-gray-900 dark:text-gray-50" />
              <span className="tracking-wide">
                {contact.link && (
                  <a
                    className="hover:text-orange-600 hover:underline hover:underline-offset-2 dark:hover:text-orange-400"
                    href={contact.link}
                  >
                    {contact.text}
                  </a>
                )}
                {!contact.link && contact.text}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Contact;
