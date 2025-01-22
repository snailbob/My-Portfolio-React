import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: "Davao City, Philippines, 8000",
    link: "https://maps.app.goo.gl/TfDhbPBxMoZHgfKV9",
    target: "_blank",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "snailbob@live.com",
    link: "mailto:snailbob@live.com",
    target: "_self",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "+639369830471",
    link: "tel:+639369830471",
    target: "_self",
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="text-left max-w-xl p-6 pb-4 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mb-8">
          Contact details
        </h2>
        <ul className="font-general-regular mb-0">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <a
                target={contact.target}
                rel="noreferrer"
                className="flex hover:opacity-60"
                href={contact.link}
              >
                <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                  {contact.icon}
                </i>
                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                  {contact.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
