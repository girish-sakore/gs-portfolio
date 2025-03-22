import long_logo from '../assets/Proxima_Cloud_6.png'; // Replace with the actual path to your brand logo

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const originalCompanyName = "Proxima Centauri Cloud Solutions (OPC) Private Limited"; // Replace with your company's original name

  return (
    <footer className="w-full bg-gray-900 py-0 text-white text-xs">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Copyright Info */}
        <div className="flex items-center px-4 sm:px-6 lg:px-8">
          <span>&copy; {currentYear} {originalCompanyName}. All rights reserved.</span>
        </div>

        {/* Center: Blank Space */}
        <div className=""></div>

        {/* Right Side: Brand Logo */}
        <div className="flex items-center px-4 sm:px-6 lg:px-8">
          <img src={long_logo} alt="Brand Logo" className="h-8 w-auto" /> {/* Adjust logo size as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;