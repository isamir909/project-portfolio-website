/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { FaGithub, FaLinkedin,FaWhatsapp  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/isamirlohiya/",
      child: (
        <>
       <FaLinkedin size={30} />LinkedIn 
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      href: "https://github.com/isamir909",
      child: (
        <>
        <FaGithub size={30} />GitHub 
        </>
      ),
    },
    {
      id: 3,
      href: "mailto:samirlohiya909@gmail.com",
      child: (
        <>
        <HiOutlineMail size={30} />Mail 
        </>
      ),
    },
    {
      id: 4,
      href: "Resume_Samir_Lohiya.pdf",
      child: (
        <>
        <BsFillPersonLinesFill size={30} />  Resume 
        </>
      ),
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 5,
      href: "https://api.whatsapp.com/send?phone=919909779216&text=Hello%F0%9F%98%80",
      child: (
        <>
        <FaWhatsapp size={30} />Whatsapp 
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col top-[35%] right-0 fixed">
      <ul>
        {links.map(({ id, href, child, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-10px hover:rounded-md duration-300 bg-green-700 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_SEJ"
              rel="noreferrer"
            >
              {child}{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
