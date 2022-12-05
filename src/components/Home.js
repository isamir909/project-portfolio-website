import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl mt-12 font-bold text-white">
            Hello, I'm Samir Lohiya
          </h2>
          <p className="text-gray-500 py-4 max-w-md">Backend Developer</p>
          <p className="text-gray-500 py-4 max-w-md text-justify">
            I am a NodeJs backend Developer with Experience in various
            technologies (NodeJs,MongoDB,JavaScript,etc) and Best coding
            practices to write well-maintained industry-standard Code.
          </p>
          <div>
            <a
              href="Resume_Samir_Lohiya.pdf"
              download={true}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-blue-500 cursor-pointer"
            >
              Download Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://iili.io/H3ftpku.jpg"
            alt="my profile"
            className="rounded-2xl ms-auto w-2/3 md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
