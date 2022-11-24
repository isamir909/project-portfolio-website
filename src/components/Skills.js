import React from "react";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: "https://iili.io/H3qfFDB.png",
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 2,
      src: "https://iili.io/H3qf9cb.png",
      title: "Express.Js",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "https://iili.io/H3qfqV1.png",
      title: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "https://iili.io/H3qf3NV.png",
      title: "MongoDB",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: "https://iili.io/H3qKmPe.png",
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: "https://iili.io/H3qfHSj.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills{" "}
          </p>
          <p className="py-6">
            These are the Technologies that I have worked with{" "}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style} `}
            >
              <img src={src} alt="" className="w-20 mx-auto"></img>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
