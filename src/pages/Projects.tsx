const projects = [
  {
    title: "MyneLeap2024",
    description: "A complete wealth solution built for your financial well-being.",
    image: '/src/assets/234844.png',
    link: "https://joinmyne.com/",
    technologies: ['Ruby on rails', 'React', 'React Native']
  },
  {
    title: "Hapchi",
    description: "India's first child safety digital platform focuses on every child safety concern that a child encounters during their journey from early childhood to adolescence.",
    image: '/src/assets/000032.png',
    link: "https://hapchi.in/",
  },
  {
    title: "Social Media App",
    description: "A social platform for connecting creative professionals",
    image: "https://images.unsplash.com/photo-1675703818188-cee153b831f3",
    link: "#",
  },
  {
    title: "Portfolio Generator",
    description: "Tool for creating beautiful portfolio websites",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    link: "#",
  },
];
// @ts-ignore
function ProjectDetails({ project }) {
  return (
    <div className="relative  rounded-2xl overflow-hidden shadow-2xl transition-shadow duration-300 transform backdrop-blur-lg bg-white/50 hover:bg-white/80 border border-gray-200/50">
      <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
      <div className="p-6 text-left">
        <div className="font-bold text-xl text-gray-800 mb-2">{project.title}</div>
        <p className="text-gray-600 text-base overflow-hidden overflow-ellipsis line-clamp-3">{project.description}</p>
      </div>
      <div className="flex justify-left ml-4 mr-4">
        <div className="px-4 pb-4">
          <a
            href={project.link}
            className="inline-block bg-gradient-to-r from-teal-500 to-teal-800 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Project
          </a>
        </div>
        <div className="p-4 pt-2">
          {/* <div className="flex text-center"> */}
              <a className="text-teal-700 after:content-['_↗']" href={project.link} target='_blank'>Visit</a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectDetails key={index} project={project} />
        ))}
      </div>
    </div>
  );
}