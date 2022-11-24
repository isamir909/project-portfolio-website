import React from "react";
import URLShortener from "../assets/portfolio/url-shortener.jpg";

import BookManagement from "../assets/portfolio/book-management.png";

import ShoppingCart from "../assets/portfolio/Shopping-cart.jpg";

import BloggingSite from "../assets/portfolio/Blogging-site1.jpg";
import FileSharing from "../assets/portfolio/file-sharing.jpg";
import OpenToIntern from "../assets/portfolio/opnToIntern.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: ShoppingCart,
      demo: false,
      gitHub:
        "https://docs.google.com/spreadsheets/d/1MfSS6AIQ7JId334sJ7TFEUSq74R9bBXsMhtvYgmp8yQ/edit?pli=1#gid=0",
      title: "Shopping Cart",
      description: "",
    },
    {
      id: 2,
      src: URLShortener,
      demo: false,
      gitHub: "https://github.com/Ajay-Jaiswal?tab=repositories",
      title: "URL shortener",
      description: "",
    },
    {
      id: 3,
      src: BookManagement,
      demo: false,
      gitHub: "https://github.com/Ajay-Jaiswal?tab=repositories",
      title: "Book Management",
      description: "",
    },
    {
      id: 4,
      src: BloggingSite,
      demo: false,
      gitHub: "www.google.com",
      title: "Blogging Site",
      description: "",
    },
    {
      id: 5,
      src: OpenToIntern,
      demo: false,
      gitHub: "www.google.com",
      title: "Open To Intern",
      description: "",
    },
    {
      id: 6,
      src: FileSharing,
      gitHub: "www.google.com",
      demo: false,
      live: "",
      title: "File Sharing",
      description: "",
      comingSoon: true,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-11"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0 pb-48">
          {projects.map(
            ({
              id,
              src,
              demo,
              gitHub,
              live,
              title,
              description,
              comingSoon,
            }) => (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg ">
                
                  <img
                    src={src}
                    alt=""
                    className="w-65 h-60 rounded-md duration-200 hover:scale-105 border-4 border-white mb-3"
                  />
                <a
                  href={gitHub}
                  target="_SEJ"
                  rel="noreferrer"
                  className="text-2xl font-bold pt-5 mx-3"
                >
                  {title}
                </a>
                {/* <h5>{description}</h5> */}
                <div className="flex item-center justify-center pt-6">
                  {demo && (
                    <a
                      href={live}
                      target="_SEJ"
                      rel="noreferrer"
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Live Project
                    </a>
                  )}
                  {comingSoon ? (
                    <p>Coming Soon</p>
                  ) : (
                    <a
                      href={gitHub}
                      target="_SEJ"
                      rel="noreferrer"
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 mb-1 flex flex-col justify-center "
                    >
                      GitHub Link
                    </a>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
