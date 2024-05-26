import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: "https://iili.io/H3q2w8l.jpg",
      demo: false,
      gitHub: "https://github.com/isamir909/Project-5-Ecommerce-Site",
      title: "Shopping Cart",
      description: "",
    },
    {
      id: 2,
      src: "https://iili.io/H3q2hFf.jpg",
      demo: false,
      gitHub: "https://github.com/isamir909/Project-4-Url-Shortner",
      title: "URL shortener",
      description: "",
    },
    {
      id: 3,
      src: "https://iili.io/H3q2W6G.png",
      demo: false,
      gitHub: "https://github.com/isamir909/Project-3-BookManagement",
      title: "Book Management",
      description: "",
    },
    {
      id: 4,
      src: "https://iili.io/H3q20uI.jpg",
      demo: false,
      gitHub: "https://github.com/isamir909/Project-1-Bloging-Site",
      title: "Blogging Site",
      description: "",
    },
    {
      id: 5,
      src: "https://iili.io/H3q2cyN.jpg",
      demo: false,
      gitHub: "https://github.com/isamir909/Project-2-Open-to-Intern",
      title: "Open To Intern",
      description: "",
    },
    // {
    //   id: 6,
    //   src: "https://iili.io/H3q2Mnn.jpg",
    //   gitHub: "https://github.com/isamir909/Project-2-Open-to-Intern",
    //   demo: false,
    //   live: "",
    //   title: "File Sharing",
    //   description: "",
    //   comingSoon: true,
    // },
    // {
    //   id: 7,
    //   src: "https://iili.io/H3q2Mnn.jpg",
    //   gitHub: "https://github.com/isamir909/Project-2-Open-to-Intern",
    //   demo: false,
    //   live: "",
    //   title: "File Sharing",
    //   description: "",
    //   comingSoon: false,
    // }
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0 pb-28">
          {projects.map(
            ({
              id,
              src,
              imageURL,
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
