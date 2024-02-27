import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 years",
    details:
      "Loream sijaf ahni9fje isjfa saojfo, iohjfpajijsf jisjfa giepomgv ajnivoemm osjgomv, aojogeoihg.",
  },
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 years",
    details:
      "Loream sijaf ahni9fje isjfa saojfo, iohjfpajijsf jisjfa giepomgv ajnivoemm osjgomv, aojogeoihg.",
  },
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 years",
    details:
      "Loream sijaf ahni9fje isjfa saojfo, iohjfpajijsf jisjfa giepomgv ajnivoemm osjgomv, aojogeoihg.",
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
