import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-[70vh]  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 text-justify">
        Hi, I’m Samir Lohiya, an experienced backend developer with expertise in Node.js, AWS, and both SQL and NoSQL databases. As one of the initial developers at my startup, I’ve gained comprehensive experience in taking projects from the design phase through to delivery in a fast-paced and evolving environment.
        </p>
        <p className="text-xl mt-20 text-justify">
        In this dynamic setting, I’ve delivered key features both independently and as part of a collaborative team. My work includes creating scalable features that have the potential to evolve into SaaS solutions, managing DevOps tasks with tools like GitHub Actions and Nginx, and ensuring smooth deployments with a focus on data integrity and scalability.
        </p>

        <br />
        <p className="text-xl text-justify ">
        What sets me apart is my hands-on experience in a startup environment where rapid development and frequently changing requirements are the norm. My background in comprehensive product development and my technical skills will enable me to contribute effectively to your team’s success.
        </p>
      </div>
    </div>
  );
};

export default About;
