import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="/smoky-mountains.jpg"
        alt="Background"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Rudra Kumar
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <h3 className="flex sm:text-xl text-xl pt-4 text-gray-800">
            Full Stack Developer | React.js Developer |
            PERN Stack
          </h3>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://twitter.com/RudraKumar1999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="cursor-pointer" size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/rudra-kumar-71a180172"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://github.com/rudrakumar2012"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
