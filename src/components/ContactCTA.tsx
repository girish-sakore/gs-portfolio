import React from 'react';
import { FaBlenderPhone } from 'react-icons/fa';
const ContactCTA: React.FC = () => {
  return (
    <div className="max-w-3xl p-6">
      <a
        href="/contact"
        className="group flex items-center font-bold gap-2 border-[var(--color-gray-800)] border-2 text-[var(--color-gray-800)] py-3 px-6 rounded-full transition-colors duration-300 hover:bg-[var(--color-teal-600)] hover:text-white hover:border-[var(--color-teal-600)]"
      >
        <FaBlenderPhone className="text-xl group-hover:text-white" />
        Let's Connect!
      </a>
    </div>
  );
};

export default ContactCTA;