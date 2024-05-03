import React from "react";
import profilePic from "../assets/profile.jpg";

const About = () => {
  const email = "rudrakumarofkv@gmail.com";
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Left side with image placeholder */}
        <div className="flex justify-center items-center">
          <div className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto">
            <img
              src={profilePic}
              alt="Profile"
              className="w-3/4 h-auto rounded-full"
            />
          </div>
        </div>
        {/* Right side with text and buttons */}
        <div className="flex flex-col justify-center">
          <p className="text-lg font-bold text-gray-700 mb-2">
            Experienced Full Stack Developer proficient in React.js, Postgres SQL, 
            Node.js, Express.js, HTML, CSS, JavaScript, EJS, REST API, and Tailwind 
            CSS. Demonstrated ability to develop robust web applications with a 
            keen focus on usability and performance optimization.
          </p>
          <p className="text-lg text-gray-700 mb-1">
            Seeking opportunities to:
          </p>
          <p className="text-lg text-gray-700">
            <ul>
              <li>
                Apply my extensive experience in full stack development to tackle 
                complex challenges and deliver high-quality solutions.
              </li>
              <li>
                Collaborate with teams to architect and implement scalable software 
                architectures that meet business objectives.
              </li>
              <li>
                Further enhance my expertise by staying abreast of emerging technologies 
                and industry best practices.
              </li>
            </ul>
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href={`mailto:${email}`}
              className="bg-[#001b5e] text-gray-100 p-4 rounded-lg"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/rudra-kumar-71a180172"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#001b5e] text-gray-100 p-4 rounded-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
