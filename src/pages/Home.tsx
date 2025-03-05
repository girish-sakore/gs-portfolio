import SkillsWithIcons from '../components/SkillsWithIcons';
import ContactCTA from '../components/ContactCTA';
import { FaPhoenixFramework } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-[80vh] text-center">
      {/* Hero Section */}
      <div className="max-w-3xl p-6 text-left"> {/* Left-align text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
          Girish Sakore
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
          Crafting Exceptional Web Experiences
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Full Stack Developer with a passion for UI/UX. Building robust and intuitive web applications that solve real-world problems.
        </p>
        <a
          href="/projects"
          className="group inline-flex items-center gap-2 bg-[var(--color-teal-600)] hover:bg-[var(--color-teal-700)] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
        >
          <FaPhoenixFramework className="text-xl group-hover:text-white" />
          Explore My Work
        </a>
      </div>

       {/* Skills Section with Icons */}
       <SkillsWithIcons />

        {/* Technologies Section */}
        {/* <TechStack /> */}

        {/* Contact Call to Action */}
        <ContactCTA />
    </div>
  );
};

export default Home;