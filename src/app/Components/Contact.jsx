import React from "react";
import Link from "next/link";

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
  {
    name: "Résumé",
    url: "https://bit.ly/shreydan-resume",
  },
];

function Contact() {
  return (
    <div>
      <div>
        {contacts.map((contact, idx) => (
          <Link
            key={idx}
            href={contact.url}
            className={`underline inline-block mr-4`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Contact;
