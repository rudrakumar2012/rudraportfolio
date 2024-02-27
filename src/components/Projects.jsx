import React from "react";
import ProjectItem from "./ProjectItem";
import todoDapp from "../assets/tododapp.jpg";
import imdbClone from "../assets/imdbclone.jpg"

const Project = () => {
  
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={todoDapp} title="To Do Dapp" />
        <ProjectItem img={imdbClone} title="Imdb-Clone" />
        <ProjectItem img={todoDapp} title="To Do Dapp" />
        <ProjectItem img={imdbClone} title="Imdb-Clone" />
      </div>
    </div>
  );
};

export default Project;
