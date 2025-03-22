import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import { GiCandlestickPhone } from "react-icons/gi";
import { animated, useSpring } from "@react-spring/web";
import { IoIosSend } from "react-icons/io";
import logo_sec from '../assets/Proxima_Cloud_3.png'

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!message) {
      setMessageError("Message is required");
      isValid = false;
    } else if (message.split(/\s+/).length > 500) {
      setMessageError("Message exceeds 500 words");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      console.log("Form submitted:", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  
  const labelAnimation = useSpring({
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? "translateY(-20px)" : "translateY(0px)",
    config: { tension: 500, friction: 50 },
  });

  return (
    <>
      <img src={logo_sec} alt="proxima cloud logo" className="h-20 w-auto mr-4 opacity-90" />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-800">Get in touch📬</h2>
      <div className="max-w-3xl p-6 mx-auto flex justify-center" style={{'overflowY':'clip'}}>
        <motion.div
          className="relative w-[350px] h-[450px] bg-white/25 shadow-lg rounded-lg"
          style={{ perspective: 1000 }}
        >
          {/* Flip Container */}
          <motion.div
            className="absolute w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Front Side (Form) */}
            <div
              className="absolute w-full h-full bg-white/50 rounded-lg p-6 flex flex-col justify-between"
              style={{ backfaceVisibility: "hidden" }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">I’d love to hear from you! 😊</h3>
              <form className="space-y-4 text-left" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-1000">So I know who’s saying hi...</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white p-2"
                  />
                  {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-1000">No spam, I promise!</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white p-2"
                  />
                  {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-1000">Spill the beans!</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white p-2"
                    style={{resize: 'none', maxHeight: '120px'}}
                    rows={4}
                  ></textarea>
                  {messageError && <p className="text-red-500 text-sm">{messageError}</p>}
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  <IoIosSend className="text-xl" /> &nbsp; Send Message
                </button>
              </form>
            </div>

            {/* Back Side (Social Links) */}
            <div
              className="absolute w-full h-full bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-center"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect with Me</h3>
              <div className="flex space-x-6">
                <a href="mailto:girish.sakore2+portfolio@gmail.com">
                  <FaEnvelope className="text-3xl text-gray-800 hover:text-teal-600 transition" />
                </a>
                <a href="https://www.linkedin.com/in/girish-sakore/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl text-gray-800 hover:text-teal-600 transition" />
                </a>
                <a href="tel:917798729845">
                  <FaPhone className="text-3xl text-gray-800 hover:text-teal-600 transition" />
                </a>
              </div>
            </div>
            {/* Flip Button (Corner Cutout Icon) */}
            <button
              className="corner-cutout"
              onClick={() => setIsFlipped(!isFlipped)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/*@ts-ignore*/}
              <animated.div
                style={labelAnimation}
                className="absolute w-max left-1/2 -translate-x-1/2 bottom-full p-2 rounded-md bg-black/80 text-white text-sm pointer-events-none"
              >
                {!isFlipped ? 'Looking for more ways to connect?\nFlip!' : 'Flip Back'}
              </animated.div>
              <GiCandlestickPhone className="icon text-2xl text-gray-800" />
            </button>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
};

export default Contact;
