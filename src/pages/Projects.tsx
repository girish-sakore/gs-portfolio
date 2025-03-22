import { useState } from "react";
import logo_sec from '../assets/Proxima_Cloud_3.png'
import myne_logo from '../assets/234844.png';
import hapchi_logo from '../assets/000032.png';
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  features: string[];
  client?: string; // Optional
  projectType?: string; // e.g., "Web Development", "Redesign", "Marketing"
  startDate?: string; // Optional
  endDate?: string; // Optional
  technologiesUsed?: string[];
  challenges?: string; // Optional
  solutions?: string; // Optional
  results?: string; // Optional
}

const projects: Project[] = [
  {
    title: 'MyneLeap2024',
    description: 'A complete wealth solution built for your financial well-being.',
    image: myne_logo,
    link: 'https://joinmyne.com/',
    features: [
      'International payments',
      'Global Timezone Appointment Booking',
      'User Subscriptions',
      'Financial Data Analytics',
      'Multiple Currencies',
      'Multirole Users',
      'Admin Console',
    ],
    client: 'Myne',
    projectType: 'Web Application',
    startDate: '2023-01-15',
    endDate: '2024-03-01',
    technologiesUsed: ['Ruby on Rails', 'React', 'React Native', 'PostgreSQL'],
    challenges: 'Integrating diverse financial services and ensuring secure transactions.',
    solutions: 'Developed a robust API and implemented strong encryption and authentication protocols.',
    results: 'Successful launch with positive user feedback and increased customer engagement.',
    id: 1,
  },
  {
    title: 'Hapchi',
    description:
      "India's first child safety digital platform focuses on every child safety concern that a child encounters during their journey from early childhood to adolescence.",
    image: hapchi_logo,
    link: 'https://hapchi.in/',
    features: [
      'Assesments and Questionaires',
      'Test Evaluations',
      'Reports Generators',
      'Multirole Users',
      'Admin Console',
    ],
    client: 'Hapchi',
    projectType: 'Web and IOS/Android Application',
    startDate: '2022-05-01',
    endDate: '2023-08-15',
    technologiesUsed: ['Ruby on Rails', 'React', 'React Native', 'MySQL'],
    challenges: 'Creating a user-friendly interface for sensitive child safety data.',
    solutions: 'Implemented intuitive UI/UX design and strict data privacy measures.',
    results: 'Positive feedback from parents and educators, demonstrating the platform\'s effectiveness.',
    id: 2,
  },
  {
    title: 'Social Media App',
    description: 'A social platform for connecting creative professionals',
    image: 'https://images.unsplash.com/photo-1675703818188-cee153b831f3',
    link: '#',
    features: [],
    projectType: 'Mobile Application',
    id: 3,
  },
  {
    title: 'Portfolio Generator',
    description: 'Tool for creating beautiful portfolio websites',
    image: 'https://images.unsplash.com/photo-1739514984003-330f7c1d2007',
    link: '#',
    projectType: 'Web Tool',
    id: 4,
    features: [],
  },
];

function ProjectDetails({ project, openModal }: { project: Project; openModal: (project: Project) => void }) {
  return (
    <div className="relative  rounded-2xl overflow-hidden shadow-2xl transition-shadow duration-300 transform backdrop-blur-lg bg-white/50 hover:bg-white/80 border border-gray-200/50">
      <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
      <div className="p-6 text-left">
        <div className="font-bold text-xl text-gray-800 mb-2">{project.title}</div>
        <p className="text-gray-600 text-base overflow-hidden overflow-ellipsis line-clamp-3">{project.description}</p>
      </div>
      <div className="flex justify-left ml-4 mr-4">
        <div className="px-4 pb-4">
          <button
            // href={link}
            onClick={() => openModal(project)}
            className="inline-block bg-gradient-to-r from-teal-500 to-teal-800 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Project
          </button>
        </div>
        <div className="p-4 pt-2">
          {/* <div className="flex text-center"> */}
              <a className="text-teal-700 after:content-['_↗']" href={project?.link} target='_blank'>Visit</a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, closeModal }: { project: Project | null; closeModal: () => void }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-[var(--color-teal-600)]  flex justify-center items-center">
      <div className="bg-white rounded-lg w-full max-w-2xl relative">
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6 max-h-[80vh] overflow-y-auto text-left">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <img className="w-full h-64 object-cover mb-4 rounded-md" src={project.image} alt={project.title} />
          <p className="text-gray-600 mb-4">{project.description}</p>
          {project.client && <p><strong>Client:</strong> {project.client}</p>}
          {project.projectType && <p><strong>Project Type:</strong> {project.projectType}</p>}
          {project.startDate && project.endDate && <p><strong>Duration:</strong> {project.startDate} - {project.endDate}</p>}
          {project.technologiesUsed && (
            <div>
              <h3 className="font-semibold mb-2">Technologies Used:</h3>
              <ul className="list-disc list-inside">
                {project.technologiesUsed.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {project.challenges && <p><strong>Challenges:</strong> {project.challenges}</p>}
          {project.solutions && <p><strong>Solutions:</strong> {project.solutions}</p>}
          {project.results && <p><strong>Results:</strong> {project.results}</p>}
          <h3 className="font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside mb-4">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="mt-4">
            <a
              href={project.link}
              target="_blank"
              className="inline-block bg-gradient-to-r from-teal-500 to-teal-800 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  }

  const closeModal = () => {
    setSelectedProject(null);
  }

  return (
    <>
      <img src={logo_sec} alt="Your Logo" className="h-20 w-auto mr-4 opacity-90" />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectDetails key={index} project={project} openModal={openModal} />
          ))}
        </div>
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      </div>
    </>
  );
}