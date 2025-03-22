import React from 'react';
import { FaAws, FaReact, FaNodeJs, FaFigma, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaCodeBranch, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRubyonrails } from "react-icons/si";
import { SiJfrogpipelines } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { MdModelTraining } from "react-icons/md";
import { SiMinetest } from "react-icons/si";
import { SiTestcafe } from "react-icons/si";

interface SkillCategory {
  title: string;
  skills: { name: string; icon: React.ComponentType }[];
}

const SkillsWithIcons: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: FaReact },
        { name: 'Next.js', icon: FaReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'JavaScript', icon: FaJsSquare },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Ruby on Rails', icon: SiRubyonrails },
        { name: 'Spring Boot', icon: BiLogoSpringBoot },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Database', icon: FaDatabase },
        { name: 'Docker', icon: FaDocker },
      ],
    },
    {
      title: 'UI/UX',
      skills: [
        { name: 'Figma', icon: FaFigma },
        { name: 'Prototyping', icon: SiMinetest },
        { name: 'Usability Testing', icon: SiTestcafe },
        { name: 'User Research', icon: MdModelTraining },
      ],
    },
    {
      title: 'DevOps/Cloud',
      skills: [
        { name: 'AWS', icon: FaAws },
        { name: 'Docker', icon: FaDocker },
        { name: 'Git', icon: FaCodeBranch },
        { name: 'CI/CD', icon: SiJfrogpipelines }, // You might need a different icon for CI/CD
        // { name: 'Deployment', icon: FaCodeBranch }, // You might need a different icon for Deployment
      ],
    },
  ];

  return (
    <div className="w-full bg-white/25 py-12 mt-12 rounded-lg">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Our Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-2">
                    {/* @ts-ignore */}
                    <skill.icon className="text-2xl text-[var(--color-teal-600)]" />
                    <span className="text-gray-600">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsWithIcons;