import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Drupal Developer",
    duration: "1 years 2 months",
    details:
      "Develop and maintain Drupal websites and web applications for various clients. Collaborate with designers and project managers to translate client requirements into functional and user-friendly websites. Ensure website performance and security through best practices and adherence to coding standards.",
  },
  {
    year: 2022,
    title: "Drupal Developer (Intern)",
    duration: "7 months",
    details:
      "Developed a sample website featuring book and author information. Implemented functionality to sort books by author and genre enhancing user experience and navigation. Collaborated with the team to learn best practices in web development and project management.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
