import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, my name is Samir Lohiya, I'm from Bengaluru-Karnataka. I have
          completed my bachelor's in Chemical Engineering with 9.23 CGPA from
          Gujarat Technological University.
        </p>

        <br />
        <p className="text-xl">
          Currently, I am a Backend Developer trainee at functionUp. During my
          training, I have completed 5+ projects using Backend technologies.
          Talking about my Technical skills - I am skilled in JavaScript,
          NodeJs, Express.js, MongoDB, AWS S3, Redis,GitHub, HTML/CSS, Mysql and
          some tools - VS Code, Postman.
        </p>
      </div>
    </div>
  );
};

export default About;
