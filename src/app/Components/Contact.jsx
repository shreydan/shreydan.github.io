import React from "react";

const contacts = [
  {
    name: "GitHub",
    url: "https://github.com/shreydan",
  },
  {
    name: "Kaggle",
    url: "https://kaggle.com/shreydan",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shreydan",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/shreydan",
  },
  {
    name: "Mail",
    url: "mailto:iamshreydan@gmail.com",
  },
];

function Contact() {
  return (
    <div>
      <div>
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.url}
            className={`underline inline-block mr-4`}
          >
            {contact.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
