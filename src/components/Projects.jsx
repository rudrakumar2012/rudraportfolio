import React from "react";
import ProjectItem from "./ProjectItem";
import todoDapp from "../assets/tododapp.jpg";
import imdbClone from "../assets/imdbclone.jpg";
import portfolio from "../assets/portfolio.jpg";
import votingdapp from "../assets/votingdapp.jpg";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Explore a collection of interactive projects showcasing my skills in
        both blockchain development and web development. Technologies used
        include React + Vite, Tailwind CSS, Hardhat, Ethers.js, Web3.js, and
        Solidity.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={imdbClone}
          title="Imdb-Clone"
          tech="Web Development"
          live="https://imdb-clone-99.netlify.app/"
          code="https://github.com/rudrakumar2012/imdb-clone"
        />
        <ProjectItem
          img={votingdapp}
          title="Voting Dapp (Desktop Optimized only)"
          tech="Decentralized application"
          live="https://votingdappin.netlify.app/"
          code="https://github.com/rudrakumar2012/votingdapp"
        />

        <ProjectItem
          img={portfolio}
          title="My Portfolio"
          tech="Web Development"
          live="https://rudrakumarportfolio.netlify.app/"
          code="https://github.com/rudrakumar2012/rudraportfolio"
        />
        <ProjectItem
          img={todoDapp}
          title="To Do Dapp (Desktop Optimized only)"
          tech="Decentralized application"
          live="https://tasktododapp.netlify.app/"
          code="https://github.com/rudrakumar2012/tododapp"
        />
      </div>
    </div>
  );
};

export default Project;
