import React from 'react';
import { FaCodeBranch, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSpringboot, SiRubyonrails } from "react-icons/si";

const TechStack: React.FC = () => {
  const technologies = [
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Git', icon: FaCodeBranch },
    { name: 'Docker', icon: FaDocker },
    { name: "Tailwind CSS", icon: SiTailwindcss},
    { name: "Spring Boot", icon: SiSpringboot},
    { name: "Ruby on Rails", icon: SiRubyonrails},
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Technologies I Use</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex items-center space-x-2">
            <tech.icon className="text-2xl text-blue-600" />
            <span className="text-gray-600">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;