import { FaDownload } from "react-icons/fa6";
import logo_sec from '../assets/Proxima_Cloud_3.png'

export default function About() {
  return (
    <>
      <img src={logo_sec} alt="proxima cloud logo" className="h-20 w-auto mr-4 opacity-90" />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-800">About Us</h2>
      {/* About Me (Detailed) */}
      <div className="max-w-3xl p-6 mx-auto">

        <div className="mb-8 flex items-start text-left bg-white/50 hover:bg-white/75 rounded-lg py-8 px-8">
          <img
            src="/profile-picture.jpg" // Replace with your image path
            alt="GS"
            className="rounded-full w-32 h-32 mr-4" // Added mr-4 for spacing
          />
          <div className='text-left'>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hello! I'm Girish Sakore, a full-stack developer passionate about building intuitive and efficient web applications. My journey into web development began with a fascination for how technology can solve real-world problems. I strive to create clean, maintainable code and deliver exceptional user experiences.
            </p>
          </div>
        </div>

        <div className="mb-8 text-left bg-white/50 hover:bg-white/75 rounded-lg py-8 px-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">My Expertise</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            I specialize in building dynamic front-end applications using React.js and crafting robust back-end solutions with Node.js and Ruby on Rails. My skills extend to UI/UX design, where I leverage Figma to create user-centered interfaces. I am also experienced in cloud deployments with AWS, and use tools like Docker and Git.
          </p>
        </div>

        <div className="mb-8 text-left bg-white/50 hover:bg-white/75 rounded-lg py-8 px-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">My Goals</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            My goal is to continue growing as a developer and contribute to meaningful projects. I am committed to continuous learning and staying up-to-date with the latest technologies.
          </p>
        </div>

        <div className=' text-left bg-white/50 hover:bg-white/75 rounded-lg py-8 px-8'>
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Let's Connect</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Feel free to reach out to me via <a href="mailto:girish.sakore2+portfolio@gmail.com" className="text-[var(--color-teal-600)] hover:underline">email</a> or connect with me on <a href="https://www.linkedin.com/in/girish-sakore/" className="text-[var(--color-teal-600)] hover:underline" target='_blank'>LinkedIn</a>.
          </p>
          <a
            href="/resume.pdf"
            className="inline-flex gap-2 relative bg-[var(--color-teal-600)] hover:bg-[var(--color-teal-700)] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 mt-4 inline-block overflow-hidden shine-button"
          >
            <FaDownload className="text-xl group-hover:text-white" />
            Download My Resume
          </a>
        </div>
      </div>
    </>
  );
}